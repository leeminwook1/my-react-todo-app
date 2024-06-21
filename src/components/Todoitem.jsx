import { useState } from 'react';
import { FiEdit2, FiTrash2, FiSave } from 'react-icons/fi';

function Todoitem({ todo, toggleTodo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, title);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <li className="flex justify-between items-center bg-blue-100 p-4 my-2 rounded-lg shadow-md">
        {isEditing ? (
          <>
            <input
              type="text"
              value={title}
              onChange={handleChange}
              autoFocus
            />
            <button
              className="p-2 rounded-full shadow-md transition duration-300 bg-green-300 hover:bg-green-400 text-black"
              onClick={handleSave}
            >
              <FiSave />
            </button>
          </>
        ) : (
          <>
            <span
              className={`flex-grow ${todo.completed ? 'line-through' : ''}`}
              onClick={() => toggleTodo(todo.id)}
              style={{ cursor: 'pointer' }}
            >
              {todo.title}
            </span>
            <div className="flex space-x-1">
              <button
                className="p-2 rounded-full shadow-md transition duration-300 bg-sky-200 hover:bg-sky-300 text-black"
                onClick={handleEdit}
              >
                <FiEdit2 />
              </button>
              <button
                className="p-2 rounded-full shadow-md transition duration-300 bg-violet-300 hover:bg-violet-400 text-black"
                onClick={() => deleteTodo(todo.id)}
              >
                <FiTrash2 />
              </button>
            </div>
          </>
        )}
      </li>
    </div>
  );
}

export default Todoitem;
