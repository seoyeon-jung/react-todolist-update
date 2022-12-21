// action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const GET_TODO_ID = "GET_TODO_ID";

// action creator
// 1) add
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// 2) delete
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// 3) toggle
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

// 4) get id
export const getTodoID = (payload) => {
  return {
    type: GET_TODO_ID,
    payload,
  };
};

// initial state
const initialState = {
  todos: [],
  todo: [{ id: "0", title: "", text: "", check: false }],
};

// todos
const Todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, check: !todo.check } : todo
        ),
      };
    case GET_TODO_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default Todos;
