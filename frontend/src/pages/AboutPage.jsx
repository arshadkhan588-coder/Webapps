import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
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

const team = [
  {
    name: 'Arshad Khan',
    role: 'Co-Founder & Senior Developer',
    bio: 'Arshad brings 6+ years of BFSI experience focused on secure enterprise applications and scalable integrations.',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Praveen Kumar',
    role: 'Co-Founder & Senior Developer',
    bio: 'Praveen offers 13+ years of BFSI leadership experience alongside expertise in cloud migration and modernization.',
    linkedin: 'https://www.linkedin.com/',
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About TechEngine</title>
        <meta name="description" content="Learn about TechEngine's mission, values, and leadership team." />
      </Helmet>
      <section className="section container">
        <h1 className="section-title">About TechEngine</h1>
        <p className="muted" style={{ marginBottom: '2rem' }}>We help organizations modernize their technology stack with thoughtful strategy and dependable execution.</p>
        <Grid>
          <Card>
            <h2 style={{ marginBottom: '0.7rem' }}>Our Mission</h2>
            <p className="muted">To deliver innovative, secure, and future-ready digital solutions that empower businesses to grow faster and operate smarter.</p>
          </Card>
          <Card>
            <h2 style={{ marginBottom: '0.7rem' }}>Our Vision</h2>
            <p className="muted">To become the go-to technology partner for companies seeking measurable transformation through cloud, software, and AI.</p>
          </Card>
        </Grid>
      </section>

      <section className="section container">
        <h2 className="section-title">Leadership Profiles</h2>
        <Grid>
          {team.map((member) => (
            <Card key={member.name}>
              <h3 style={{ marginBottom: '0.3rem' }}>{member.name}</h3>
              <p style={{ color: 'var(--teal)', marginBottom: '0.7rem' }}>{member.role}</p>
              <p className="muted" style={{ marginBottom: '0.8rem' }}>{member.bio}</p>
              <a href={member.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--teal)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <FaLinkedin /> LinkedIn
              </a>
            </Card>
          ))}
        </Grid>
      </section>
    </>
  );
}
