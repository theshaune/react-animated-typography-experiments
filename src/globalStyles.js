import { injectGlobal } from 'styled-components';

const globalStyles = injectGlobal`
  html, 
  body { 
    min-height: 100%; 
  }

  html {
    position: relative; 
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 200;
    letter-spacing: 0.0em;
    line-height: 1.75;
    height: 100%;
    margin: 0;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    -webkit-font-smoothing: antialiased;
  }

  [tabindex="-1"]:focus {
    outline: none !important;
  }

  ol,
  ul,
  dl {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  img { max-width: 100%; }


  h1, h2, h3, h4, h5, h6 {
    font-size: 1rem;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 0;
  }

  h1 { }
  h2 { }
  h3 { }
  h4 { }
  h5 { }

  p { font-size: 1rem; }

  a {
    color: inherit;
    outline: 0;
    text-decoration: none;
  }

  button, 
  button:active, 
  button:focus,
  a, 
  a:active, 
  a:focus {
    outline: none;
  }

  strong {
    font-weight: 400;
  }
`;

export default globalStyles;
