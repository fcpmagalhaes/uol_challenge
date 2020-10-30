import React, { useState } from 'react';
import {Container, Row, Col } from 'styled-bootstrap-grid';
import ContentWrapper from './styles';
import { H1, H2, H3, H4, H6, Text } from '../../styles';
import logoBall from '../../assets/logged/logoBall.png';
import logoHeader from '../../assets/logged/LogoCompasso.png';
import iconCloud from '../../assets/logged/icon_cloud.svg';

export default function Logged() {
  return(
    <ContentWrapper>
      
      <Container fluid>
        <Row className="header">
          <Col md={4}>
            <div className="logo-header">
              <img src={ logoHeader } alt="logo-header"/>
            </div>
          </Col>
          
          <Col md={4}>
            <H1>11:26</H1>
            <H3>terça-feira, 17 de março de 2020</H3>
          </Col>

          <Col md={4}>
            <Row>
              <H4>Passo Fundo - RS</H4>
            </Row>
            <Row>
              <div className="icon-cloud">
                <img src={ iconCloud } alt="icon-cloud"/>
              </div>
              <H1>22º</H1>
            </Row>
          </Col>

        </Row>

        <Row className="body">
        <Col md={5} className='body-left' hiddenMdDown="true">
          <div className="logo-ball">
            <img src={ logoBall } alt="logo-ball"/>
          </div>
        </Col>  
        <Col md={7} sm={12}>
          <H1>Body</H1>
        </Col>
          
        </Row>

        <Row className="footer">
        <Col md={6} className="footer-first">
          <H6>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</H6>
        </Col>
        <Col md={6}>
          <Row>
            <Col col={3}>
              <H4>Application refresh in</H4>
            </Col>
            <Col col={3}>
              <span className="countDown">600</span>
              <H4>seconds</H4>
            </Col>
            <Col col={4} >
              <H4>Botões</H4>
            </Col>
            
          </Row>
        </Col>
          
        </Row>

      </Container>
    </ContentWrapper>
  )
}