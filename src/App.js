import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Greet msg={"Md"} />
      <Greet msg={"ALI"} />
      <Greet msg={"Snsa"} />
      <Counter />
    </div>
  );
}

export default App;
