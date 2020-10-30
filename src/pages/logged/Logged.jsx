import React, { useState, useEffect } from 'react';
import {Container, Row, Col } from 'styled-bootstrap-grid';
import { 
  format, add ,
} from 'date-fns';
import { pt } from 'date-fns/locale';
import ContentWrapper from './styles';
import { H1, H2, H3, H4, H6, Text } from '../../styles';
import { useHistory } from 'react-router-dom';
import logoBall from '../../assets/logged/logoBall.png';
import logoHeader from '../../assets/logged/LogoCompasso.png';
import iconCloud from '../../assets/logged/icon_cloud.svg';

export default function Logged() {
  const history = useHistory();
  const [countDown, setcountDown] = useState(60);
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  
  function logout() {
    history.push('/');
  }

  function timer(){
    setcountDown(0);
    const countDownTimer = add(new Date(), {
      seconds: 60,
    })
    var x = setInterval(() => {
      var now = new Date();
      var distance = countDownTimer - now.getTime();
      var countDown = Math.floor((distance % (1000 * 60)) / 1000);
      setcountDown(countDown);
      setTime(`${now.getHours()}:${now.getMinutes()}`);
      
      const formattedDate = format(
        now, 
        "EEEE',' dd 'de' MMMM 'de' y",
        {locale: pt}
        );
        
      setDate(formattedDate);
      if (distance < 0) {
        clearInterval(x);
        logout();
      }
    }, 1000);
  }

  useEffect(() => {
    timer();
  }, []);

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
            <div className="icon-cloud">
              <img src={ iconCloud } alt="icon-cloud"/>
              <span className="degree">22º</span>
            </div>
            
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
              <button className="button-refresh refresh">Continuar Navegando</button>
              <button className="button-logout logout" onClick={() => logout()}>Logout</button>
          </Col>
        </Row>

      </Container>
    </ContentWrapper>
  )
}