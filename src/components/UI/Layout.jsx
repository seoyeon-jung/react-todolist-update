import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <TodoLayout>{children}</TodoLayout>;
};

export default Layout;

const TodoLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  background-color: #e6dcf4;
  border-radius: 20px;
  text-align: center;
`;
