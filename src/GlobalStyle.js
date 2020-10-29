import { createGlobalStyle } from 'styled-components';
import reset from 'styled-nanoreset';

export default createGlobalStyle`
  /* reset css  */
  ${reset}

  /* css global */
  body {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
  }

  /* remove default border blue active */
  *:focus {
    outline: none !important;
  }
`;
