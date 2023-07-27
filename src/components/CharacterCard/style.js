import { statusAsset } from 'src/utils/status';
import { styled } from 'styled-components';

export const CharacterCardWrapper = styled.div`
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

  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};

  @media screen and (max-width: 768px) {
    width: 325px;
    height: 150px;
  }

  @media screen and (max-width: 320px) {
    width: 275px;
  }
`;

export const ImageWrapper = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;

  @media screen and (max-width: 320px) {
    width: 100px;
    height: 150px;
  }
`;

export const InfoWrapper = styled.div`
  width: 250px;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  color: #fff;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 125px;
  }

  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusMark = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background: ${({ color }) =>
    statusAsset.find(function (item) {
      return item.name === color;
    })?.background};

  @media screen and (max-width: 768px) {
    width: 12px;
    height: 10px;
  }
`;

export const CharacterName = styled.span`
  font-size: 20px;
`;

export const TitleInfo = styled.span`
  color: grey;
`;

export const InfoText = styled.span`
  cursor: default;
`;
