import styled from 'styled-components';

export const BookingStyles = styled.div`
  .navBar {
    background-color: rgb(248, 248, 248);
    z-index: 1000;
  }
  .ant-btn-background-ghost.ant-btn-primary {
    background-color: #08966b;
    color: #FFFFFF;
  }
  .ant-btn-background-ghost.ant-btn-primary:hover {
    color: #08966b;
    background-color: #FFFFFF;
  }
  .footer {
    background-color: rgb(248, 248, 248);
    padding-top: 20px;
  }
  .container {
    padding: 130px 50px 0;
    background-color: rgb(248, 248, 248);
    padding-bottom: 30px;
    min-height: 550px;
  }

  .title {
    padding: 0px 10px;
  }

  .cart-detail-empty {
    background-color: #fff;
    text-align: center;
    padding: 40px;
    border-radius: 10px;
    & a {
      padding: 10px 30px;
      background-color: #faad14;
      color: #000;
      border-radius: 5px;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .total-cost {
    &-item {
      padding: 10px;
      background-color: #fff;
      margin: 15px 0;
      border-radius: 5px;
    }
    & .customer-info {
      & .block_header-title {
        color: rgb(128, 128, 137);
        font-weight: normal;
        margin: 0px;
      }
      & .customer-info-detail {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(56, 56, 61);
        margin-bottom: 2px;
        font-weight: 600;

        & i {
          display: block;
          width: 1px;
          height: 20px;
          background-color: rgb(235, 235, 240);
          margin: 0px 8px;
        }
      }
    }
    & .total-cost-detail {
      & .prices__items {
        list-style: none;
        margin: 0px;
        border-bottom: 1px solid rgb(244, 244, 244);
        & .prices__item {
          display: flex;
          flex-wrap: nowrap;
          -webkit-box-pack: justify;
          justify-content: space-between;
          margin-bottom: 10px;
        }
      }
      & .prices__total {
        align-items: center;
        display: flex;
        justify-content: space-between;
        & .prices__value {
          color: #8c0604;
          font-size: 22px;
          font-weight: 400;
          text-align: right;
        }
      }
    }
    & button {
      background-color: #08966b;
      color: #FFFFFF;
      padding: 13px 10px;
      text-align: center;
      border-radius: 4px;
      border: none;
      width: 100%;
      display: block;
      cursor: pointer;
      margin: 15px 0px 0px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .ant-form-item-label {
    padding: 0 0 3px;
    width: 160px;
    text-align: left;
    & > label {
      font-size: 16px;
      color: ${({ theme }) => theme.text.formLabel};
    }
  }
  input {
    border: solid 1px #ccc;
    width: 100%;
    min-height: 40px;
    border-radius: 5px;
    padding-left: 8px;
  }
  input:focus {
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    border-color: #03a9f4;
    outline: none;
  }
`;
