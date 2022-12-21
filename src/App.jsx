import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9e9e9;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
