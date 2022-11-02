import styled from 'styled-components';

export default styled.div`
  width: 100%;

  :root {
    --primary-color: #333e48;
    --white-color: #fff;
    --black-color: #000;
    --text-color: #333;
    --boder-color: #dbdbdb;
    --navbar-height: 34px;
    --header-height: 120px;
    --header-search: calc(var(--header-height) - var(--navbar-height));
  }
  .slider {
    background-image: url('https://gvn360.com/wp-content/uploads/2020/07/d6f28492b786d1ee2fdc5296f4c21848-1.jpg');
    height: 500px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat;
  }
  .container {
    padding-top: 120px;
    background-color: #f8f8f8;
    padding-bottom: 30px;
    /* padding: 78px 0px 60px; */
    /* border-bottom: 4px solid var(--primary-color); */
  }
  .home__productitemsimg {
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
  }
  .grid {
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;

    &__row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    &__column2 {
      padding-left: 5px;
      padding-right: 5px;
      width: 22.667%;
      margin-left: -78px;
    }

    &__column10 {
      width: 100%;
      padding-left: 5px;
      padding-right: 5px;
    }

    &__column24 {
      padding-left: 10px;
      padding-right: 10px;
      width: 25%;
    }
    &__column-8 {
      width: 66.666666667%;
      padding-right: 15px;
    }

    &__column-4 {
      width: 33.333333333%;
      padding: 0px 15px;
    }

    &__column5 {
      width: 50%;
      padding: 60px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      position: relative;
    }
  }

  .category {
    background-color: var(--white-color);
    padding-left: 38px;
    padding-right: 46px;
    /* position: fixed; */
    padding-bottom: 63px;
    &__heading {
      font-size: 17px;
      font-weight: 400;
      padding: 8px 16px;
      padding-top: 10px;
      border-bottom: 1px solid #fff;
      margin-top: 17px;
      & i {
        font-size: 15px;
        margin-right: 4px;
        width: 22px;
      }
    }

    &__list {
      list-style: none;
      padding-left: 0px;
      margin: 0px;
      padding-bottom: 15px;
    }
    &__items {
      padding: 20px 0px 10px 15px;
      /* border-bottom: 1px solid #fff; */
      position: relative;
    }
    &__itemslink {
      position: relative;
      text-decoration: none;
      font-size: 16px;
      color: var(--text-color);
      transition: right linear 0.1s;
      right: 0;
      display: flex;
      line-height: 21px;
      margin-left: -22px;
      /* justify-content: space-between; */

      & i {
        padding-left: 20px;
        line-height: 21px;
        margin-right: 10px;
        width: 40px;
      }

      &:hover {
        color: red;
        right: -4px;
      }
    }

    &__itemsactive {
      border-top: 1px solid #fff;
      & i {
        margin-right: 5px;
      }
      & .category__itemslink {
        color: red;
      }
    }
  }

  .slider_img {
    /* width: 100%; */
  }
  .home__product {
  }
  .home__productitems {
    /* height: 100px; */
    display: block;
    text-decoration: none;
    margin-top: 15px;
    position: relative;
    margin-left: 10px;
    background-color: #fff;
    padding-bottom: 10px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    transition: transform linear 0.1s;
    will-change: transform;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 0;
      height: 0;
      background: transparent;
      border: 1px solid transparent;
    }

    &:hover::before {
      animation: animate 0.5s linear forwards;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 0;
      height: 0;
      background: transparent;
      border: 1px solid transparent;
    }

    &:hover::after {
      animation: animate2 0.5s linear forwards;
    }

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 3px 12px #ccc;
      margin-top: 15px;
    }
  }
 

  .home__productitems {
    &img {
      padding-top: 66.67%;
      background-size: contain;
      background-position: center;
    }

    &name {
      padding: 0px 10px;
      line-height: 1.8rem;
      height: 3.6rem;
      overflow: hidden;
      font-size: 14px;
      font-weight: 600;
      color: #000;
      display: block;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin: 6px 0px;
      margin-bottom: 0px;
    }

    &address {
      padding: 0px 10px;
      line-height: 1.8rem;
      height: 3.6rem;
      overflow: hidden;
      font-size: 13px;
      font-weight: 400;
      color: #000;
      display: block;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin: 0px 0px;
      margin-bottom: 20px;
    }

    &price {
      color: #333;
      font-size: 14px;
      margin-left: 15px;
      font-weight: 600;
      line-height: 36px;
    }
  }

  .home__productprice {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .btn_cart {
    font-size: 15px;
    margin-right: 13px;
    margin-left: 13px;
    margin-bottom: 10px;
    padding: 0px 50px;
    line-height: 32px;
    height: 36px;
    border: 2px solid rgb(247, 247, 247);
    border-radius: 12px;
    font-weight: 500;
    color: #fff;
    background-color:  #019164;
    transition: 0.5s;
    cursor: pointer;
    z-index: 1;
    font-family: 'Font Awesome 5 Free';
    text-decoration: none;

    & i {
      margin-right: 5px;
      font-size: 12px;
    }

    &:hover {
      color: #333;
      background-color: transparent;
      border-color: #333;
    }
  }

  .container_productDetails {
    padding-bottom: 0px;
    background-color: #fff;
  }

  .sweet_loading {
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    background-color: #ebeef5;

    & span {
      color: #f5a623;
      margin-top: 10px;
      font-size: 18px;
      font-weight: 600;
      font-family: 'Merienda';
    }
  }

  /* Reponsive */
  @media (min-width: 768px) and (max-width: 1024px) {
    .grid__column24 {
      width: 25%;
    }
    .home__productitemsname {
      font-size: 20px;
    }
    .home__productitemsaddress {
      font-size: 13px;
    }
    .home__productitemsprice {
      font-size: 13px;
      margin-left: 0;
    }

    .btn_cart {
      font-size: 11px;
      margin-right: 6px;
    }
    .btn_cart i {
      margin-right: 3px;
      font-size: 8px;
    }
  }

  @media (max-width: 764px) {
    .grid__column10 {
      padding-left: 0px;
    }
    .grid__column24 {
      padding-left: 0px;
      width: 50%;
    }
    .home__productitemsprice {
      font-size: 12px;
      margin-left: 11px;
    }
    .btn_cart {
      font-size: 9px;
      margin-right: 7px;
      & i {
        margin-right: 3px;
        font-size: 9px;
      }
    }
  }
`;
