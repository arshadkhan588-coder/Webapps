import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

const Header = styled.header`
  background: rgba(10, 25, 47, 0.95);
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Brand = styled(Link)`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--white);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--white);
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0 1.5rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  color: var(--white);
  transition: color 0.2s ease;
  &.active { color: var(--teal); }
  &:hover { color: var(--teal); }
`;

export default function Layout({ children }) {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  return (
    <>
      <Header>
        <div className="container">
          <Nav>
            <Brand to="/">TechEngine</Brand>
            <NavLinks>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/services">Services</StyledLink>
              <StyledLink to="/portfolio">Portfolio</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>
            </NavLinks>
            <MobileButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </MobileButton>
          </Nav>
          <MobileMenu open={isMenuOpen}>
            <StyledLink to="/" onClick={() => setIsMenuOpen(false)}>Home</StyledLink>
            <StyledLink to="/about" onClick={() => setIsMenuOpen(false)}>About</StyledLink>
            <StyledLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</StyledLink>
            <StyledLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</StyledLink>
            <StyledLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</StyledLink>
          </MobileMenu>
        </div>
      </Header>
      <main>{children}</main>
      <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--slate)' }}>
        <div className="container">© 2026 TechEngine. All rights reserved.</div>
      </footer>
    </>
  );
}
