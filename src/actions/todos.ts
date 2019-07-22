import axios from "axios";
import { Dispatch } from "redux";
import { Types } from "./types";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: Types.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: Types.deleteTodo;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const { data: payload } = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: Types.fetchTodos,
      payload
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return { type: Types.deleteTodo, payload: id };
};
