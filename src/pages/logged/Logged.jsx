import React, { useState, useEffect } from 'react';
import {Container, Row, Col } from 'styled-bootstrap-grid';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import ContentWrapper from './styles';
import { H3, H4, H6 } from '../../styles';
import { useHistory } from 'react-router-dom';
import logoBall from '../../assets/logged/logoBall.png';
import logoHeader from '../../assets/logged/LogoCompasso.png';
import iconCloud from '../../assets/logged/icon_cloud.svg';

export default function Logged() {
  const history = useHistory();
  const [countDown, setcountDown] = useState(600);
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  
  function logout() {
    history.push('/');
  }
  
  function reset() {
    setcountDown(60);
  }

  function getDataTimes(){
    const now = new Date();
    const formattedTime = format(
      now, 
      "HH':'mm",
      {locale: pt}
      );
      setTime(formattedTime);
    const formattedDate = format(
      now, 
      "EEEE',' dd 'de' MMMM 'de' y",
      {locale: pt}
      );
    setDate(formattedDate);
  }

  React.useEffect(() => {
    if(countDown <= 0) {
      logout();
    }
    const timer =
    countDown > 0 && setInterval(() => {
      setcountDown(countDown - 1);
      getDataTimes();
    }
    , 1000);
    return () => clearInterval(timer);
    
  }, [countDown]);

  return(
    <ContentWrapper>
      <Container fluid>

        <Row className="header" alignItems="center">
          <Col md={4}>
            <div className="logo-header">
              <img src={ logoHeader } alt="logo-header"/>
            </div>
          </Col>
          <Col md={4} className="header-mid">
            <span className="timer">{time}</span>
            <H3>{date}</H3>
          </Col>
          <Col md={4} className="header-end">
            <H4>Passo Fundo - RS</H4>
            <div>
              <img src={ iconCloud } alt="icon-cloud"/>
              <span className="degree">22º</span>
            </div>           
          </Col>
        </Row>

        <Row className="body" alignItems="end">
          <Col md={5} className='body-left' hiddenMdDown="true">
            <img src={ logoBall } alt="logo-ball"/>
          </Col>
          <Col md={7} className="body-right">
            <div className="content-text-first">Our mission is</div>
            <div className="sub-text">Nossa missão é</div>
            <div className="content-text">to transform the world</div>
            <div className="sub-text">transformar o mundo</div>
            <div className="content-text">building digital experiences</div>
            <div className="sub-text">construindo experiências digitais</div>
            <div className="content-text">that enable our client’s growth</div>
            <div className="sub-text">que permitam o crescimento dos nossos clientes</div>
          </Col>
        </Row>

        <Row className="footer" alignItems="center">
          <Col md={5} className="footer-first">
            <H6>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</H6>
          </Col>
          <Col md={4} className="footer-mid">
            <Row alignItems="center">
              <Col col={5} className="refresh">
                <H4>Application</H4>
                <H4>refresh in</H4>
              </Col>
              <Col col={3} className="countDown">
                <div>
                  <span>{countDown}</span>
                  <H4>seconds</H4>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={3} sm={12} className="footer-end">
              <button className="button-refresh refresh" onClick={() => reset()}>
                <div>Continuar</div>
                <div>Navegando</div>
              </button>
              <button className="button-logout logout" onClick={() => logout()}>Logout</button>
          </Col>
        </Row>

      </Container>
    </ContentWrapper>
  )
}