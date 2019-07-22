import React from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodo, Todo } from "../actions";
import { StoreState } from "../reducers";

interface Props {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface State {
  loading: boolean;
}

class _App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { loading: false };
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ loading: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ loading: true });
  };

  onDeleteClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList = (): JSX.Element[] =>
    this.props.todos.map(todo => (
      <li key={todo.id}>
        {todo.title}
        <button onClick={() => this.onDeleteClick(todo.id)}>
          Delete entry
        </button>
      </li>
    ));

  render() {
    const { loading } = this.state;
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {loading ? <h1>loading...</h1> : <ul>{this.renderList()}</ul>}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);
