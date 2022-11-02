import styled from 'styled-components';
export const SpaceDetailWrapper = styled.div`
  .container_productDetails {
    padding-top: 1px;
    background-color: #f8f8f8;
    padding-bottom: 30px;
    padding: 78px 0px 60px;
    padding-bottom: 0px;
    background-color: #fff;
  }
  .grid__row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .grid__column5 {
    width: 50%;
    padding: 60px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
  }
  .grid_border {
    border-right: 1px solid rgb(241, 241, 241);
  }
  .back_btn {
    position: absolute;
    top: 60px;
    left: 60px;
    z-index: 999;
  }
  .btn_back {
    padding: 0px 15px;
    margin-top: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    border-radius: 6px;
    appearance: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
    text-decoration: none;
    font-family: inherit;
    height: 30px;
    font-size: 14px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(241, 241, 241);
    color: rgb(119, 121, 140);
  }
  .product_img {
    /* margin-top: -110px; */
    display: block;
    max-width: 100%;
    height: auto;
    margin-top: 50px;
  }
  .grid_infor {
    align-items: start;
  }
  .ProductName {
    font-size: 21px;
    font-weight: 600;
    color: rgb(13, 17, 54);
    line-height: 1.2;
    margin-bottom: 15px;
  }
  .ProductBand {
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(13, 17, 54);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 22px;
  }
  .ProductDescription {
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: rgb(66, 69, 97);
    line-height: 2;
    margin-top: 30px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
  }
  .ProductBand i {
    margin-right: 10px;
    font-size: 22px;
  }
  .ProductTable {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
  .ProductTableRow {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 15px;
  }
  .ProductItem {
    width: 200px;
    flex-shrink: 0;
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: rgb(66, 69, 97);
  }
  .ProductCartWrapper {
    display: flex;
    flex-direction: column;
  }
  .ProductPriceWapper {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 19px;
    font-weight: 600;
    color: rgb(0, 158, 127);
  }
  .btn_cart {
    margin-top: 30px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 20px;
    border: 2px solid rgb(241, 241, 241);
    background-color: #fff;
    font-weight: 600;
    color: rgb(0, 158, 127);
    font-family: 'Font Awesome 5 Free';
    cursor: pointer;
    transition: all 0.3s ease 0s;
    margin-right: 17px;
    padding: 0px 20px;
    line-height: 32px;
    height: 36px;
  }

  .home__productprice i {
    margin-right: 5px;
    font-size: 13px;
  }

  .ProductListRelated {
    background-color: rgb(247, 247, 247);
    width: 100%;
  }
  .ProductItemRelated {
    height: 100%;
  }
  .ProductItemWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .back_btn i {
    margin-right: 5px;
  }
  .ProductItemRelated {
    height: 100%;
    display: flex;
  }
  .ProductItemWrapper {
    height: 100%;
    width: 100%;
    padding: 30px;
    background-color: rgb(255, 255, 255);
    position: relative;
    font-family: Lato, sans-serif;
    border-radius: 6px;
    cursor: pointer;
  }
  .RelatedWapper {
    background-color: rgb(247, 247, 247);
  }
  .sweet_loading {
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    background-color: #ebeef5;
  }
  .sweet_loading span {
    color: #019164;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Merienda';
  }

  /* reponsive */
  @media (min-width: 768px) and (max-width: 1024px) {
    .grid__column5 {
      width: 49%;
      margin-right: -5px;
    }
  }

  @media (max-width: 764px) {
    .grid__column5 {
      width: 100%;
    }
    .ProductTable {
      width: 335px;
    }
    .btn_back {
      margin-left: -45px;
    }
  }

  .navBar {
    padding: 10px 15px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: fixed;
    z-index: 99999;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    transition: all 0.3s ease 0s;
  }

  .navbar__cart {
    /* background: #fff; */
    border: none;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    float: right;
    margin-top: 0px;
    position: relative;
    font-size: 20px;
  }

  .navbar__cart:hover {
    opacity: 0.75;
  }

  .cart__title {
    font-size: 30px;
    font-weight: bold;
    color: var(--dark-color);
  }

  .cart__image {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  .cart__counter {
    height: 40px;
    width: 40px;
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
    color: var(--dark-color);
    background: var(--light-color);
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar__cart i {
    font-size: 25px;
    color: #33cccc;
  }
  .cart__counter {
    position: absolute;
    top: 3px;
    left: 24px;
    font-size: 15px;
    background-color: #33cccc;
    width: 16px;
    height: 14px;
    color: #fff;
  }

  .img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 28px;
  }
  .navbar_right {
    display: flex;
  }
  .navbar__cart {
    position: relative;
  }
  .nav__itemsmenu {
    position: absolute;
    background-color: #ccc;
    top: 82%;
    right: 29px;
    border-radius: 2px;
    width: 150px;
    z-index: 1;
    padding-left: 0px;
    list-style: none;
    display: none;
    animation: nav__notifyapp ease-in 0.25s;
  }
  .nav__itemsmenu a:visited {
    color: black;
  }
  .nav__itemsmenu a:active {
    color: black;
  }
  .nav__menuitems {
    padding: 10px;
  }
  .nav__itemsaccount:hover .nav__itemsmenu {
    display: block;
  }
  .nav__menuitems::before {
    content: '';
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #ccc transparent;
    position: absolute;
    right: 8px;
    top: -20px;
  }
  .nav__menuitems::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: -9px;
    width: 90px;
    height: 12px;
  }
  .nav__itemsaccount {
    list-style: none;
  }
  .nav__menuitems:hover {
    opancity: 0.75;
    background-color: #ccc;
    cursor: pointer;
  }
  .nav__login {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav__login a {
    color: #33cccc;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }

  /* Reposive */

  @media (min-width: 768px) and (max-width: 1024px) {
    .navBar {
      width: 100%;
    }
  }

  @media (max-width: 764px) {
    .navBar {
      width: 89%;
    }
    .header {
      margin-left: -9px;
    }
    .img {
      margin-left: 15px;
    }
    .navbar_right {
      margin-right: -19px;
    }
  }
  .product-comments {
    width: 100%;
    margin: 20px 0 !important;
    padding: 10px 20px !important;
    background-color: #f7f7f7;

    & > .title {
      margin: 10px 25px;
      margin-left: 44px;
      font-size: 21px;
      font-weight: 600;
      color: #000;
    }

    & > .comment {
      padding: 0 70px;
    }
  }
`;
