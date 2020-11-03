import React, { useState } from 'react';
import {Container, Row, Col } from 'styled-bootstrap-grid';
import ContentWrapper from './styles';
import { H1, H2, Text } from '../../styles';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/login/logo.png';

export default function Login() {
  const [login, setLogin] = useState({
    user: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    if (!error) {
      setError(true);
      setLogin({user: 'email.usuario@compasso.com.br', password: 'password'});
    } else {
      history.push('/logged');
    }
  }

  return(
      <ContentWrapper error={error}>
          <Container fluid>
          <Row>
            <Col md={6} sm={12} className="leftSide">
              <Col mdOffset={3} md={6} smOffset={1} sm={10}>
                <Col hiddenMdUp="true">
                    <div className="logo">
                      <img src={ logo } alt="logo"/>
                    </div>
                </Col>
                <Row className="hello">
                  <div className="login-title">
                    <H1 className="ola">Olá,</H1>
                  </div>
                  <Text>  
                    Para continuar navegando de forma segura, efetue o login na rede.
                  </Text>
                </Row>

                <Row className="login">
                  <div className="login-title">
                    <H2>Login</H2>
                  </div>
                  <section className="form">
                    <form onSubmit={handleLogin}>
                      <input
                        placeholder="Usuário"
                        value={login.user}
                        onChange={e => 
                          setLogin({...login, user: e.target.value})
                        }
                      />
                      <input
                        placeholder="Senha"
                        type="password"
                        value={login.password}
                        onChange={e => 
                          setLogin({...login, password: e.target.value})
                        }
                      />
                      {error && (
                        <div className="errorMessage">
                          <Text>
                            Ops, usuário ou senha inválidos.
                          </Text>
                          <Text>
                            Tente novamente!
                          </Text>
                        </div>
                      )}
                      <button className="button" type="submit">Continuar</button>
                    </form>
                  </section>
                </Row>
              </Col>

            </Col>  
            <Col md={6} className='rightSide' hiddenMdDown="true">
              <div className="logo">
                <img src={ logo } alt="logo"/>
              </div>
            </Col>  
          </Row>
          </Container>
      </ContentWrapper>
  )
}