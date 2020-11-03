import { createGlobalStyle } from 'styled-components';
import reset from 'styled-nanoreset';

export default createGlobalStyle`
  /* reset css  */
  ${reset}

  /* css global */
  html {
    overflow-y: auto;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    overflow-y: auto;
  }

  /* remove default border blue active */
  *:focus {
    outline: none !important;
  }

  button {
      cursor: pointer;
  }

  form input {
    background-color: transparent;
    width: 100%;
    height: 60px;
    border: 1px solid #ffffff;
    border-radius: 50px;
    padding: 0 20px;
    color: #E0E0E0;
    font-size: 16px
  }
  form input:focus { 
    outline: none !important;
    /* border-color: #719ECE;
    box-shadow: 0 0 10px #719ECE; */
    border-color: #E0E0E0;
    box-shadow: 0 0 3px #E0E0E0;
}

  .button {
      background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
      width: 100%;
      height: 67px;
      border: 0;
      border-radius: 50px;
      color: #ffffff;
      font-weight: bold;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      transition: filter 0.2s;
  }

  .button:hover {
      filter: brightness(75%);
  }

  .button-logout {
      background: transparent;
      width: 100%;
      min-height: 100px;
      color: #ffffff;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 12px;
      line-height: 15px;
  }
  .button-refresh {
      background: #ffffff;
      width: 100%;
      min-height: 100px;
      color: #C13216;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 12px;
      line-height: 15px;
  }
`;
