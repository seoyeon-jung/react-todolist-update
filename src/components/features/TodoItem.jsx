import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/modules/todos";

function TodoItem({ todo, check }) {
  // hooks
  const dispatch = useDispatch();

  // delete
  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // toggle
  const onToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <ItemBox>
        <Title>{todo.title}</Title>
        <Text>{todo.text}</Text>
        <ToggleBtn onClick={() => onToggle(todo.id)}>
          {check ? "완료" : "취소"}
        </ToggleBtn>
        <DelBtn onClick={() => onDelete(todo.id)}>삭제</DelBtn>
      </ItemBox>
    </div>
  );
}

export default TodoItem;

const ItemBox = styled.div`
  max-width: 500px;
  min-width: 300px;
  background-color: rgb(220, 173, 250);
  border-radius: 20px;
  margin: auto;
  margin-bottom: 20px;
`;

const ToggleBtn = styled.button`
  border: none;
  border-radius: 20px;
  background-color: rgb(95, 59, 240);
  color: #fff;
  margin: 10px;
  font-size: 20px;
  &:hover {
    transform: scale(1.2);
  }
`;

const DelBtn = styled.button`
  border: none;
  border-radius: 20px;
  background-color: rgb(248, 90, 90);
  color: #fff;
  margin: 10px;
  font-size: 20px;
  &:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.h3`
  margin: 10px;
  color: #fff;
  font-size: 35px;
`;

const Text = styled.p`
  color: #fff;
  font-size: 20px;
`;
