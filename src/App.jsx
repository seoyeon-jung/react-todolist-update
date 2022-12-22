import React from "react";
import { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";
import Header from "./components/UI/Header";
import Layout from "./components/UI/Layout";
import TodoInput from "./components/features/TodoInput";
import TodoList from "./components/features/TodoList";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getTodo } from "./redux/modules/TodoSlice";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9e9e9;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

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
