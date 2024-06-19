import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import(FiEdit2);

function Todoitem() {
  return (
    <li className="flex justify-between items-center bg-blue-100 p-4 my-2 rounded-lg shadow-md">
      <span className="flex-grow">리액트 공부하기</span>
      <div className="flex space-x-1">
        <button className="p-2 rounded-full shadow-md transition duration-300 bg-sky-200 hover:bg-sky-300 text-black">
          <FiEdit2 />
        </button>
        <button className="p-2 rounded-full shadow-md transition duration-300 bg-violet-300 hover:bg-violet-400 text-black">
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
}

export default Todoitem;
