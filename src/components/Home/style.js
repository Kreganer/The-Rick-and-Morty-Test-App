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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: larger;
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
`;

export const CharacterCard = styled.div`
  width: 400px;
  height: 200px;
  margin: 10px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background: #3c3e44;
  border: 1px #3c3e44 solid;

  @media screen and (max-width: 768px) {
    width: 700px;
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 150px;
  }
`;
