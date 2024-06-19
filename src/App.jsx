import './App.css';
import Todoinput from './components/Todoinput';
import Todoitem from './components/Todoitem';

function App() {
  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-black-600 ml-2">Todo list</h1>
        </div>

        <Todoinput />
        <Todoitem />
      </div>
    </div>
  );
}

export default App;
