
import { useState } from 'react';
import './App.css';
import { Event } from './Components/Event';
import { Props } from './Components/Props';
import { ConditionalRendring } from './Components/ConditionalRendring';
import { List } from './Components/List';
import { Todo } from './Components/Todo';

function App() {
  const [counter,setCounter] = useState(0)

  const handfleCounter= () =>{
    setCounter(counter+1)
  }
  return (
    <div className="App">
      {/* <Event counter={counter}/>
      <Props handfleCounter = {handfleCounter}/> */}
      {/* <ConditionalRendring/> */}
      {/* <List/> */}
      <Todo/>
    </div>
  );
}

export default App;
