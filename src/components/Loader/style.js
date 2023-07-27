import { keyframes, styled } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg) scale(0.5);
  }
  66% {
    transform: rotate(360deg) scale(0.75);
  }
  100% {
    transform: rotate(620deg) scale(0.5);
  }
`;

export const LoaderWrapper = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 5px limegreen solid;
  animation: ${rotate} 1s infinite linear;
`;

export const LoaderComponent = styled.div`
  width: 30px;
  height: 30px;
  margin: 30px;
  border-radius: 50%;
  border: 5px solid;
`;
