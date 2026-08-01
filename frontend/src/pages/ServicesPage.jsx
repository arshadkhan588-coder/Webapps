import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { FaCode, FaCloud, FaRobot, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 1.4rem;
`;

const services = [
  { icon: <FaCode />, title: 'Custom Software Development', description: 'Bespoke web and mobile applications designed around business workflows.' },
  { icon: <FaCloud />, title: 'Cloud Modernization', description: 'Scalable cloud migration and infrastructure optimization for resilient operations.' },
  { icon: <FaRobot />, title: 'AI & Automation', description: 'Practical AI solutions for support, automation, and data-driven decision making.' },
  { icon: <FaLaptopCode />, title: 'Digital Transformation', description: 'Roadmaps and implementation for modernizing legacy systems and teams.' },
  { icon: <FaShieldAlt />, title: 'Security & Compliance', description: 'Secure architecture patterns and governance for regulated industries.' },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | TechEngine</title>
        <meta name="description" content="Explore TechEngine's software development, cloud, AI, and consulting services." />
      </Helmet>
      <section className="section container">
        <h1 className="section-title">Our Services</h1>
        <p className="muted" style={{ marginBottom: '1.5rem' }}>Every engagement is tailored to your business goals and technical environment.</p>
        <Grid>
          {services.map((item) => (
            <Card key={item.title}>
              <div style={{ color: 'var(--teal)', fontSize: '1.4rem', marginBottom: '0.6rem' }}>{item.icon}</div>
              <h3 style={{ marginBottom: '0.4rem' }}>{item.title}</h3>
              <p className="muted">{item.description}</p>
            </Card>
          ))}
        </Grid>
      </section>
    </>
  );
}
