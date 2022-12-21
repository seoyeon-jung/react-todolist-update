import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./redux/components/UI/Header";
import Layout from "./redux/components/UI/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9e9e9;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
      </Layout>
    </>
  );
}

export default App;
