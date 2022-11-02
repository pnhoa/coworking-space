import styled from 'styled-components';

export const ProfileStyles = styled.div`
  .navBar {
    background-color: rgb(248, 248, 248);
    z-index: 1000;
  }
  .content {
    padding: 150px 0 30px;
    background-color: #fff;
    & > .title {
      text-align: center;
    }
    & > .container {
      margin: 20px 250px;
      padding: 20px;
      border-radius: 10px;
    }
  }
  .footer {
    background-color: rgb(248, 248, 248);
    padding-top: 20px;
  }
`;
