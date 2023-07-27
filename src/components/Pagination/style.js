import { styled } from 'styled-components';

export const PaginationWrapper = styled.div`
  width: 30%;
  height: 5%;
  border-radius: 30px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #272b33;

  @media screen and (max-width: 1440px) {
    width: 50%;
    height: 5%;
  }

  @media screen and (max-width: 769px) {
    width: 80%;
    height: 5%;
  }

  @media screen and (max-width: 426px) {
    width: 95%;
    height: 5%;
  }
`;

export const PaginationButton = styled.button`
  width: 10%;
  height: 80%;
  margin: 5px;
  border-radius: 30px;
  border: 1px #fff solid;
  color: #fff;
  background: #3c3e44;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }

  &:disabled {
    border-color: grey;
    background-color: rgba(255, 255, 255, 0);
    color: grey;

    cursor: default;
  }
`;

export const PaginationCurrentPageButton = styled.button`
  width: 10%;
  height: 80%;
  margin: 5px;
  border-radius: 30px;
  border: 1px limegreen solid;
  color: limegreen;
  background: #3c3e44;
  cursor: default;
`;
