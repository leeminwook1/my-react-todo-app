import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      completed: true,
      title: '리액트 공부하기',
    },
    {
      id: uuidv4(),
      completed: false,
      title: '축구 연습하기',
    },
  ]);

  const addTodo = (newTodo) => {
    const updatedTodos = [
      ...todos,
      { id: uuidv4(), title: newTodo, completed: false },
    ];
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-black-600 ml-2 text-pink-400">
            Todo list
          </h1>
        </div>
        <Todoinput addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
