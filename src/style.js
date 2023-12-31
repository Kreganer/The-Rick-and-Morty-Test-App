import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif;
    font-size: 15px;

    ::-webkit-scrollbar {
      width: 8px;
      background-color: #272b33;
      border-radius: 10px;
      scrollbar-color: rebeccapurple red;
      scrollbar-width: thin;
    }

    ::-webkit-scrollbar-thumb {
      background: limegreen;
      border-radius: 10px;
    }
	}

  html, body, #root, #root>div {
    height: 100%;
  }
  `;

export const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
