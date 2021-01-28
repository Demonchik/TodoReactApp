import logo from './logo.svg';
import ToDoList from './ToDoList';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);


function App() {
  return (
    <div className="App">
      <h1>Header</h1>

    <ToDoList></ToDoList>
    </div>
  );
}

export default App;
