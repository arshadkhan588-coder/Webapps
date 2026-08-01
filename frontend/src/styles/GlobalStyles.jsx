import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: dark;
    --navy: #0A192F;
    --teal: #64FFDA;
    --white: #FFFFFF;
    --slate: #8892B0;
    --light-navy: #112240;
    --bg: #08111f;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: Inter, 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, var(--bg), var(--navy));
    color: var(--white);
    line-height: 1.6;
  }
  a { text-decoration: none; color: inherit; }
  button, input, textarea { font: inherit; }
  img { max-width: 100%; display: block; }
  .container { width: min(1120px, 92vw); margin: 0 auto; }
  .section { padding: 5rem 0; }
  .section-title { font-size: clamp(1.6rem, 3vw, 2.3rem); margin-bottom: 1rem; color: var(--teal); }
  .muted { color: var(--slate); }
`;

export default GlobalStyles;
