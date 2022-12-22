import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
  todos: [],
  todo: [{ id: "0", title: "", text: "", check: false }],
  isLoading: false,
  error: null,
};

// thunk 이용
export const __getTodo = createAsyncThunk(
  "todo/getTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todo");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postTodo = createAsyncThunk(
  "todo/postTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/todo", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/todo/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// redux toolkit 적용한 reducer
const TodoSlice = createSlice({
  name: "TodoSlice", // 이 모듈의 이름
  initialState,
  reducers: {
    switchTodo: (state, action) => {
      state.todo = state.todo.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            check: !todo.check,
          };
        }
        return {
          ...todo,
        };
      });
    },
  },
  // extraReducers(비동기를 위한 reducer)
  extraReducers: {
    [__getTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__postTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = [...state.todo, action.payload];
    },
    [__postTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = state.todo.filter((del) => del.id !== action.payload);
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export default reducer
export const { switchTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
