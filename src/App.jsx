import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/todos')
      .then((response) => {
        setTodos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addTodo = (newTodo) => {
    const todo = { title: newTodo, completed: false };
    axios
      .post('http://localhost:3001/todos', todo)
      .then((response) => {
        setTodos([...todos, response.data]);
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  };

  const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    axios
      .put(`http://localhost:3001/todos/${id}`, {
        completed: !todo.completed,
      })
      .then((response) => {
        setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
      })
      .catch((error) => {
        console.error('Error toggling todo:', error);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };

  const updateTodo = (id, newTitle) => {
    axios
      .put(`http://localhost:3001/todos/${id}`, { title: newTitle })
      .then((response) => {
        setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
      });
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
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
