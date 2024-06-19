import { FiPlus } from 'react-icons/fi';

function Todoinput() {
  return (
    <form className="flex items-center mt-4 bg-green-100 p-2 rounded-lg shadow-md mb-6">
      <input
        type="text"
        placeholder="Add your items"
        className="focus:ring-0 border-none outline-none p-2 flex-grow bg-green-100"
      ></input>
      <button className="bg-yellow-100 rounded-full text-white p-1.5 m-2 shadow-md hover:bg-yellow-200 transition duration-300">
        <FiPlus size={20} />
      </button>
    </form>
  );
}

export default Todoinput;
