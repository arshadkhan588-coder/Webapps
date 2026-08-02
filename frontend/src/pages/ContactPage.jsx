import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 1.4rem;
`;

const Input = styled.input`
  padding: 0.9rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.04);
  color: white;
`;

const TextArea = styled.textarea`
  padding: 0.9rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.04);
  color: white;
  min-height: 120px;
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      await axios.post('https://webapps-midq.onrender.com/api/contact', formData);
      setStatus('Thanks for reaching out. We will be in touch shortly.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact TechEngine</title>
        <meta name="description" content="Contact TechEngine for software, cloud, AI, and consulting services." />
      </Helmet>
      <section className="section container">
        <h1 className="section-title">Contact Us</h1>
        <p className="muted" style={{ marginBottom: '1.5rem' }}>Share your requirements and we will respond with a tailored plan.</p>
        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
          <Input name="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
          <TextArea name="message" placeholder="Tell us about your project" value={formData.message} onChange={handleChange} />
          <button type="submit" disabled={loading} style={{ background: 'var(--teal)', color: 'var(--navy)', padding: '0.9rem', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 700 }}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status ? <p style={{ color: 'var(--teal)' }}>{status}</p> : null}
        </Form>
      </section>
    </>
  );
}
