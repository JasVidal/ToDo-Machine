import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { ButtonCreateTodo } from './ButtonCreateTodo';
import './App.css';


function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <ButtonCreateTodo />
      
    </div>
  );
}


export default App;
