import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const HomeTitle = styled.span`
  width: 100%;
  height: 30%;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  cursor: default;
`;

export const InformationBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #202329;
  color: #fff;
`;

export const HomeButton = styled.button`
  width: 20%;
  height: 10%;
  border-radius: 25px;
  border: 1px #fff solid;
  background: #202329;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media screen and (max-width: 425px) {
    width: 50%;
    height: 10%;
  }
`;
