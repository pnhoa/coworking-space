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
    padding: 60px 0px 30px 80px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
  }
  .grid__column5_picture {
    width: 50%;
    padding: 30px 10px 10px 0px;
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
    top: 130px;
    left: 80px;
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
    margin-top: 40px;
  }
  .grid_infor {
    align-items: start;
  }
  .ProductName {
    font-size: 30px;
    font-weight: 600;
    color: rgb(13, 17, 54);
    line-height: 1.2;
    margin-bottom: 15px;
  }
  .spaceAddress {
    display: flex;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.0;
    margin-bottom: 10px;
  }
  .spaceAddressDetail {
    margin-left: 10px
  }
  .spaceJoinDate {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.0;
    margin-bottom: 10px;
    color: rgb(0,158,127);
  }
  .spaceJoinDateDetail {
    margin-left: 10px
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
  .spaceDescription {
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: rgb(66, 69, 97);
    line-height: 2;
    margin-top: 10px;
    margin-bottom: 10px;
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
  .spaceTableImage {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }
  .image-detail{
    width: 360px;
    height: 170px;
    border-radius: 6px;
    margin-right: 15px;            
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
    .grid__column5_picture {
      width: 49%;
      margin-right: -5px;
    }
  }

  @media (max-width: 764px) {
    .grid__column5 {
      width: 100%;
    }
    .grid__column5_picture {
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
  .space-detail {
    width: 100%;
    display: flex
  }
  .space-detail-com1 {
    width: 75%;
  }
  .space-detail-com2 {
    width: 25%;
    margin: 10px 50px 400px 20px !important;
    padding: 30px 30px !important;
    display: inline-block;
    background: #fff;
    border: 1px solid #e5e5e5;
    box-shadow: 1px 1px 1px 1px #e3dcdc;
  }
  .space-service {
    width: 100%;
    display: flex
  }
  .space-service-detail {
    width: 100%;
    display: flex
  }
  .space-service-com1 {
    width: 15%;
    background: #ffffff;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
  .space-service-com2 {
    width: 85%;
    margin-left: 0px;
  }
  .space-amenity {
    width: 100%;
    margin: 20px 0 !important;
    padding: 10px 20px !important;
    background-color: #fcfcfc;
    
  }
  .space-amenity-title {
    margin: 10px 25px;
    margin-left: 44px;
    font-size: 21px;
    font-weight: 600;
    color: #000;
  }
  .space-amenity-detail {
    margin: 10px 25px;
    margin-left: 44px;
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }
  .space-starting-con {
      font-weight: 600;
      font-size: 14px;
      line-height: 23px;
      color: #464c4b;
  }

  .space-detail-com2 h5 {
    font-weight: 600;
    font-size: 31px;
    line-height: 22px;
    color: #00927c;
    margin: 8px 0;
  }
  .booking-space {
    margin-top: 30px;
    text-transform: uppercase;
    border-radius: 2px;
    border: 1px solid #00c78a;
    color: #FFFFFF;
    background-color: #08966b;
  }
  .ant-btn-background-ghost.ant-btn-primary {
    background-color: #08966b;
    color: #FFFFFF;
  }
  .ant-btn-background-ghost.ant-btn-primary:hover {
    color: #08966b;
    background-color: #FFFFFF;
  }
  
  .booking-space:hover {
    color: #08966b;
    background-color: #FFFFFF;
    border: 1px solid #00c78a;
    box-shadow: 1px 1px 1px 1px #d6cfc7;
  }
  .space-comments {
    width: 100%;
    margin: 20px 0 !important;
    padding: 10px 20px !important;
    background-color: #fcfcfc;

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

  .space-overview {
    width: 100%;
    margin: 10px 0 !important;
    padding: 10px 80px 10px 80px !important;
    background-color: #fcfcfc;
  }
`;
