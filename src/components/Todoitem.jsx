import { useState } from 'react';
import { FiEdit2, FiTrash2, FiSave } from 'react-icons/fi';

function Todoitem({ todo, toggleTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부 상태
  const [title, setTitle] = useState(todo.title); // 입력한 제목 상태

  const handleEdit = () => {
    setIsEditing(true); // 수정 모드로 변경
  };

  const handleSave = () => {
    // 수정된 제목을 todo 객체에 반영
    todo.title = title;
    // 수정 모드 종료
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setTitle(e.target.value); // 입력한 제목 업데이트
  };

  return (
    <div>
      <li className="flex justify-between items-center bg-blue-100 p-4 my-2 rounded-lg shadow-md">
        {isEditing ? ( // 수정 모드일 때
          <>
            <input
              type="text"
              value={title}
              onChange={handleChange}
              autoFocus // 수정 모드 진입 시 자동으로 포커스
            />
            <button
              className="p-2 rounded-full shadow-md transition duration-300 bg-green-300 hover:bg-green-400 text-black"
              onClick={handleSave}
            >
              <FiSave />
            </button>
          </>
        ) : (
          // 수정 모드가 아닐 때
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
