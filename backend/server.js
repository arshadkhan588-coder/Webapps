import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'TechEngine API is running' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  return res.status(200).json({
    success: true,
    message: 'Message received successfully',
    data: { name, email, message },
  });
});

app.listen(PORT, () => {
  console.log(`TechEngine backend running on http://localhost:${PORT}`);
});
