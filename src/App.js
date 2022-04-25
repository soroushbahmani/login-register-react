import logo from './logo.svg';
import './App.css';
import SignUp from './components/Auth/signUp/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          soroush1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <SignUp></SignUp>
        </a>
      </header>
    </div>
  );
}

export default App;
