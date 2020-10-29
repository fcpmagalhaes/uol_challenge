import React from 'react';

import { Row, Col } from 'styled-bootstrap-grid';
import ContentWrapper from './styles';
import { H1, H2, H3, Text } from '../../styles';

export default function Login() {
  return(
      <ContentWrapper>
          <Row>
            <Col md="6" sm="12">
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
            <Col md="6" sm="12">
              <div className='rightSide'>
                <h1>Background</h1>
              </div>
            </Col>  
          </Row>
      </ContentWrapper>
  )
}