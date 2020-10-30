import styled from 'styled-components';

export default styled.div`
  background-color: #E0E0E0;

  .iIWRLg {
    padding-left: 0;
    padding-right: 0;
  };

  .header {
    color: #222222;

  }

  .body {

  }

  .footer {
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    color: #FFFFFF;
    height: 100px;
    .footer-first {
      border-right: 1px solid #FFFFFF;
      height: 61px;
    }
    .countDown {
      font-weight: bold;
      font-size: 48px;
      line-height: 61px;
    }


  }
  
  .hello {
    margin-top: 20%;
  }
  .hello .ola {
      margin-bottom:  10px;
  }
  .login {
    margin-top: 30%;
  }
  .logo {
    img {
      max-width: 50%;
      bottom: 0;
    }
  }
  .login-title{
    width: 100%;
  }
  .leftSide {
    color: #E0E0E0;    
  }
  .body-left {
    .logo {
      /* max-width: 825px; */
      max-height: 825px;
    }
  }
  button {
    margin-top: 115px;
  }

  input {
    margin-top: 33px;
  }

  @media only screen and (max-width: 768px) {
    .body-left {
      background: none;
      height: auto;
    }
    .leftSide {
  
    .hello {
      margin-top: 5%;
    }
    .login {
      margin-top: 20%;
    }
    input {
      margin-top: 25px;
    }
    button {
      margin-top: 50px;
      margin-bottom: 10%;
    }
  }
}
`;