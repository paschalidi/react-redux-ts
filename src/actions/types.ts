import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum Types {
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;
