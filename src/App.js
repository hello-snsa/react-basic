import './App.css';
import FocusInp from './components/hooks/FocusInp';
import RefComp from './components/hooks/RefComp';
import Pmain from './components/proptype/Pmain';
import Filtering from './components/searchingSorting/Filtering';
import Searching from './components/searchingSorting/Searching';
import Sorting from './components/searchingSorting/Sorting';

function App() {
  return (
    <div className="App">

      {/* Hooks */}
      {/* useRef */}
      {/* <RefComp /> */}
      {/* forwardRef*/}
      {/* <FocusInp /> */}

      {/* Prop type */}
      {/* <Pmain /> */}
      {/* npm i prop-types */}

      {/* <Searching /> */}
      <Sorting />
      {/* <Filtering /> */}
    </div>
  );
}

export default App;
