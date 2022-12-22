import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../modules";

const store = configureStore({
  reducer: { TodoSlice: TodoSlice },
});

export default store;
