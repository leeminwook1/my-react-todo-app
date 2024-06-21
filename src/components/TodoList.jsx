import Todoitem from './Todoitem';

function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todoitem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
