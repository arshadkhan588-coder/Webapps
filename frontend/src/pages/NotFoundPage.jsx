import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | TechEngine</title>
      </Helmet>
      <section className="section container" style={{ textAlign: 'center', paddingTop: '6rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--teal)' }}>404</h1>
        <h2 style={{ marginBottom: '0.8rem' }}>The page you are looking for could not be found.</h2>
        <p className="muted" style={{ marginBottom: '1rem' }}>Let’s get you back on track.</p>
        <Link to="/" style={{ color: 'var(--teal)' }}>Return home</Link>
      </section>
    </>
  );
}
