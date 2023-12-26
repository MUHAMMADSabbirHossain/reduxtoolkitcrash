import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <AddTodo></AddTodo>
      <Todos></Todos>
    </div>
  );
}

export default App;
