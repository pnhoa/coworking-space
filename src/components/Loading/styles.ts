import styled from 'styled-components';

export const LoadingWrapper = styled.div`
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
`;
