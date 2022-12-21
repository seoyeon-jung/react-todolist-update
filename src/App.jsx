import React from "react";
import { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";
import Header from "./components/UI/Header";
import Layout from "./components/UI/Layout";
import TodoInput from "./components/features/TodoInput";
import TodoList from "./components/features/TodoList";

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
        <TodoInput />
        <TodoList check={true} />
        <TodoList check={false} />
      </Layout>
      <ToastContainer position={"top-center"} />
    </>
  );
}

export default App;
