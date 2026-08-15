import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import pkg from 'pg';
const { Client } = pkg;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database variables
let dbClient = null;
let usePostgres = false;
const DATA_DIR = path.resolve('./data');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');

async function initDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (databaseUrl) {
    usePostgres = true;
    dbClient = new Client({ connectionString: databaseUrl, ssl: { rejectUnauthorized: false } });
    await dbClient.connect();
    await dbClient.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
      );
    `);
    console.log('Connected to Postgres DB');
  } else {
    // Ensure data directory and file exist for local JSON storage
    try {
      await fs.mkdir(DATA_DIR, { recursive: true });
      try {
        await fs.access(CONTACTS_FILE);
      } catch (e) {
        await fs.writeFile(CONTACTS_FILE, '[]');
      }
      console.log('Using local JSON file for contacts at', CONTACTS_FILE);
    } catch (err) {
      console.error('Failed to initialize local data dir:', err);
    }
  }
}

initDb().catch((err) => console.error('DB initialization error:', err));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'TechEngine API is running' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    if (usePostgres && dbClient) {
      const result = await dbClient.query(
        'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING id, created_at',
        [name, email, message]
      );
      const saved = result.rows[0];
      return res.status(200).json({ success: true, id: saved.id, created_at: saved.created_at });
    }

    // Local JSON fallback
    const raw = await fs.readFile(CONTACTS_FILE, 'utf8');
    const arr = JSON.parse(raw || '[]');
    const id = arr.length ? arr[arr.length - 1].id + 1 : 1;
    const created_at = new Date().toISOString();
    const record = { id, name, email, message, created_at };
    arr.push(record);
    await fs.writeFile(CONTACTS_FILE, JSON.stringify(arr, null, 2));
    return res.status(200).json({ success: true, id, created_at });
  } catch (err) {
    console.error('DB insert error:', err);
    return res.status(500).json({ success: false, message: 'Failed to save message.' });
  }
});

app.listen(PORT, () => {
  console.log(`TechEngine backend running on http://localhost:${PORT}`);
});