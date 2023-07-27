import { styled } from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: ${(props) => (props.display ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  min-width: 45%;
  max-height: 75%;
  padding: 25px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background: #3c3e44;
  border: 1px #fff solid;
  overflow-y: scroll;

  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;
