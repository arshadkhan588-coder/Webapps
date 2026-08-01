import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { FaCloud, FaCode, FaRobot, FaArrowRight } from 'react-icons/fa';

const Hero = styled.section`
  padding: 6rem 0 4rem;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const services = [
  { icon: <FaCode />, title: 'Software Development', text: 'Custom applications for modern businesses.' },
  { icon: <FaCloud />, title: 'Cloud Solutions', text: 'Reliable migrations and infrastructure strategies.' },
  { icon: <FaRobot />, title: 'AI Integration', text: 'Automation and intelligent workflows tailored to your team.' },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>TechEngine | Technology Solutions & Consulting</title>
        <meta name="description" content="TechEngine provides software development, cloud, AI, and IT consulting services for businesses and startups." />
      </Helmet>
      <Hero className="container">
        <HeroGrid>
          <div>
            <p style={{ color: 'var(--teal)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Innovation. Reliability. Growth.</p>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1, marginBottom: '1rem' }}>Building smarter digital experiences for ambitious companies.</h1>
            <p className="muted" style={{ fontSize: '1.05rem', marginBottom: '1.6rem' }}>TechEngine offers consulting, software engineering, cloud modernization, and AI adoption services that help teams scale with confidence.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ background: 'var(--teal)', color: 'var(--navy)', padding: '0.9rem 1.2rem', borderRadius: '999px', fontWeight: 700 }}>Book a consultation</Link>
              <Link to="/services" style={{ border: '1px solid var(--teal)', color: 'var(--teal)', padding: '0.9rem 1.2rem', borderRadius: '999px' }}>Explore services</Link>
            </div>
          </div>
          <Card>
            <h3 className="section-title" style={{ marginBottom: '0.8rem' }}>Why TechEngine?</h3>
            <ul style={{ color: 'var(--slate)', paddingLeft: '1rem' }}>
              <li>Secure and scalable product delivery</li>
              <li>Enterprise-grade architecture</li>
              <li>Transparent collaboration and measurable outcomes</li>
            </ul>
          </Card>
        </HeroGrid>
      </Hero>

      <section className="section container">
        <h2 className="section-title">Our core services</h2>
        <ServiceGrid>
          {services.map((service) => (
            <Card key={service.title}>
              <div style={{ color: 'var(--teal)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>{service.icon}</div>
              <h3 style={{ marginBottom: '0.4rem' }}>{service.title}</h3>
              <p className="muted">{service.text}</p>
            </Card>
          ))}
        </ServiceGrid>
      </section>

      <section className="section container">
        <Card style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 className="section-title" style={{ marginBottom: '0.4rem' }}>Ready to modernize your digital operations?</h3>
            <p className="muted">Let’s discuss the right solution for your goals.</p>
          </div>
          <Link to="/contact" style={{ color: 'var(--teal)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Get started <FaArrowRight /></Link>
        </Card>
      </section>
    </>
  );
}
