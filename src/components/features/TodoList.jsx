import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TodoItem from "../features/TodoItem";

const TodoList = ({ check }) => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <ListBox>
        <ListHeader>{check ? "진행 중" : "완료"}</ListHeader>
        {todos
          .filter((item) => item.check === !check)
          .map((item) => {
            return <TodoItem key={item.id} todo={item} check={check} />;
          })}
      </ListBox>
    </div>
  );
};

export default TodoList;

const ListBox = styled.div`
  list-style: none;
  max-width: 1000px;
  min-width: 600px;
  height: 500px;
  margin: auto;
  background-color: #f0ecf4;
  border-radius: 20px;
  overflow-y: scroll;
  padding-bottom: 30px;
  border: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListHeader = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;
