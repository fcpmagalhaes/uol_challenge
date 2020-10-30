import styled from 'styled-components';

export default styled.div`
  background-color: #E0E0E0;

  .header {
    margin-right: 41px;
    margin-left: 41px;
    color: #222222;
    .logo-header {
      img {
        width: 150px;
        max-height: 42.75px;
      }
    }
    .header-mid {
      text-align: center;
      .timer {
        font-weight: bold;
        font-size: 100.8px;
        line-height: 128.1px;
      }
    }
    .header-end {
      text-align: end;
    }
    .degree {
      font-weight: bold;
      font-size: 48px;
      line-height: 61px;
      margin-left: 15.22px;
    }

  }

  .body {
    .body-left {
      .logo-ball {
        img {
          margin-left: -15px;
          width: 50%;
        }
      }
    }
  }

  .footer {
    position: fixed;
    width: 100%;
    min-height: 100px;
    bottom: 0;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    color: #FFFFFF;
    .footer-first {
      border-right: 1px solid #FFFFFF;
      height: 61px;
      text-align: right;
    }
    .footer-mid {
      .refresh {
        text-align: right;
      }
      .countDown {
        font-weight: bold;
        font-size: 48px;
        line-height: 61px;
        text-align: center;

      }
    }
    .footer-end {
      text-align:right;
      .refresh, .logout {
        max-width: 131px;
      }
    }


  }

  @media only screen and (max-width: 768px) {
    .body-left {
      background: none;
      height: auto;
    }
    .footer {
      .footer-first {
        margin-top: 15px;
        border-right: 0px;
        text-align: center;
      }
      .footer-end {
        margin-top: 15px;
        text-align:center;
        .refresh, .logout {
          max-width: 100%;
        }
      }
    }
}
`;