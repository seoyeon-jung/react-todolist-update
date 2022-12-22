import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { __postTodo } from "../../redux/modules/TodoSlice";

const InputBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const InputText = styled.input`
  width: 400px;
  height: 15px;
  padding: 7px;
  margin: 15px;
`;

const InputBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: rgb(180, 190, 251);
  color: white;
  margin: 10px;

  &:hover {
    transform: scale(1.2);
  }
`;

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // changehandler
  const onChange = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else if (e.target.id === "text") {
      setText(e.target.value);
    }
  };

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    // 입력칸 공백 방지
    if (!text || !title) {
      toast.warning("제목과 내용 모두 입력해주세요!");
      return;
    }

    if (title && text) {
      const newTodo = {
        id: uuidv4(),
        title: title,
        text: text,
        check: false,
      };
      dispatch(__postTodo(newTodo));
      setTitle("");
      setText("");
    }
  };

  return (
    <InputBox>
      <InputText
        type="text"
        id="title"
        value={title}
        onChange={onChange}
        placeholder="제목을 입력해주세요"
      />
      <InputText
        type="text"
        id="text"
        value={text}
        onChange={onChange}
        placeholder="내용을 입력해주세요"
      />
      <InputBtn type="submit" onClick={onSubmit}>
        ➕
      </InputBtn>
    </InputBox>
  );
};

export default TodoInput;
