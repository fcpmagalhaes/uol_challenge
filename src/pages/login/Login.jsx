import React, { useState } from 'react';
import {Container, Row, Col } from 'styled-bootstrap-grid';
import ContentWrapper from './styles';
import { H1, H2, H3, Text } from '../../styles';
import { useHistory } from 'react-router-dom';
import background from '../../assets/login/background.png';
import logo from '../../assets/login/logo.png';

export default function Login() {
  const [login, setLogin] = useState({
    user: 'email.usuario@compasso.com.br',
    password: 'password',
  });

  const history = useHistory();
  
  return(
      <ContentWrapper>
          <Container fluid>
          <Row>
            <Col md={6} sm={12} className="leftSide">
              <Col mdOffset={3} md={8}>
                <Row className="hello">
                  <H1 className="ola">Olá,</H1>
                  <Text>  
                    Para continuar navegando de forma segura, efetue o login na rede.
                  </Text>
                </Row>

                <Row className="login">
                  <H2>Login</H2>
                  <button>
                    <H3>Continuar</H3>
                  </button>
                </Row>
              </Col>

            </Col>  
            <Col md={6} sm={12} className='rightSide'>
            <div  style={{
                  backgroundImage: `url("${background}")`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height:'100vh',
              }}>
                <div className="logo">
                  <img src={ logo } />
                </div>
              </div>
            </Col>  
          </Row>
          </Container>
      </ContentWrapper>
  )
}