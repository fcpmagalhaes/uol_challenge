import styled from 'styled-components';
import background from '../../assets/login/background.png';

export default styled.div`
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  
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
      max-width: 100%;
      padding-top: 35px;
      display: block;
      margin: 0 auto;   
    }
  }
  .login-title{
    width: 100%;
  }
  .leftSide {
    color: #E0E0E0;    
  }
  .rightSide {
    background: url(${background}) no-repeat center;
    background-size: cover;
    height: 100vh;
  }
  button {
    margin-top: 115px;
  }

  input {
    margin-top: 33px;
  }

  @media only screen and (max-width: 768px) {
    .rightSide {
      background: none;
      height: auto;
    }
    .leftSide {
    background: url(${background}) no-repeat center;
    background-size: cover;
    height: 100vh;
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