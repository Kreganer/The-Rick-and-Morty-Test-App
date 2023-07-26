import { statusAsset } from 'src/utils/status';
import { styled } from 'styled-components';

export const CharacterModalInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const CharacterImage = styled.img`
  width: 200px;
  border-radius: 25%;
  border: 5px limegreen solid;
  align-self: start;

  @media screen and (max-width: 425px) {
    align-self: center;
    object-fit: cover;
  }
`;

export const CharacterInfo = styled.div`
  width: 80%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  color: #fff;
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
  margin: 5px;
  cursor: default;
`;
