import { Todo, Types, Action } from "../actions";

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case Types.fetchTodos: {
      return action.payload;
    }
    case Types.deleteTodo: {
      return state.filter(todo => todo.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};
