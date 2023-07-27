import styled from 'styled-components';

export const CharactersListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: hidden;
  flex-direction: column;
  justify-content: space-around;
  background: #202329;
`;

export const CharactersListButton = styled.button`
  width: 10%;
  height: 5%;
  margin: 1px 3%;
  border-radius: 25px;
  border: 1px #fff solid;
  background: #202329;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ListWrapper = styled.div`
  width: 95%;
  height: 85%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  overflow-y: scroll;
  align-self: center;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, auto);
  grid-row-gap: 1em;
  grid-gap: 20px;
  background: #272b33;

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, auto);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, auto);
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
  border: 1px #fff solid;

  @media screen and (max-width: 768px) {
    width: 700px;
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 150px;
  }
`;
