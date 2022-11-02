import styled from 'styled-components';

export default styled.div`
  .grid {
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
  }
  .grid__row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  /* .app__content{
      margin-top: 36px;
  } */
  .grid__column2 {
    padding-left: 5px;
    padding-right: 5px;
    width: 22.667%;
    margin-left: -78px;
  }
  .grid__column10 {
    width: 83.334%;
    padding-left: 5px;
    padding-right: 5px;
  }
  .grid__column24 {
    padding-left: 10px;
    padding-right: 10px;
    width: 20%;
  }
  .grid__column-8 {
    width: 66.666666667%;
    padding-right: 15px;
  }
  .grid__column-4 {
    width: 33.333333333%;
    padding: 0px 15px;
  }
  .footer {
    margin-top: 40px;
    color: rgba(0, 0, 0, 0.54);
    margin-bottom: 40px;
  }
  .footer__list {
    list-style: none;
    padding: 0px 0px;
  }
  .footer__items {
    margin-bottom: 10px;
  }
  .footer__heading {
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
    /* font-size: 1.4rem; */
  }
  .footer__link {
    text-decoration: none;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.54);
  }
  .footer__img {
    display: flex;
  }
  .footer__img-qr {
    width: 80px;
    object-fit: contain;
    border: 0.0625rem solid rgba(0, 0, 0, 0.09);
  }
  .footer__img-app {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .footer__img-app img {
    height: 20px;
    margin-top: 5px;
  }
  .footer__link i {
    margin-right: 5px;
  }

  @media (max-width: 764px) {
    .footer__heading {
      font-size: 12px;
    }
    .footer__link {
      font-size: 9px;
    }
  }
`;
