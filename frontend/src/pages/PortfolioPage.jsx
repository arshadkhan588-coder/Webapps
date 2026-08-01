import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

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

const projects = [
  { title: 'FinOps Control Center', description: 'A secure analytics platform for treasury operations and reporting automation.' },
  { title: 'Cloud Migration Program', description: 'Modernized a legacy application estate and improved operational resilience.' },
  { title: 'AI Workflow Assistant', description: 'Automated repetitive document processing and reduced back-office turnaround time.' },
  { title: 'Digital Client Portal', description: 'Delivered a responsive portal with intuitive onboarding and account management.' },
];

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio | TechEngine</title>
        <meta name="description" content="See examples of TechEngine's recent projects and digital transformation work." />
      </Helmet>
      <section className="section container">
        <h1 className="section-title">Selected Projects</h1>
        <p className="muted" style={{ marginBottom: '1.5rem' }}>Our projects combine user-focused design with enterprise-grade engineering.</p>
        <Grid>
          {projects.map((project) => (
            <Card key={project.title}>
              <h3 style={{ marginBottom: '0.4rem' }}>{project.title}</h3>
              <p className="muted">{project.description}</p>
            </Card>
          ))}
        </Grid>
      </section>
    </>
  );
}
