import './App.css';
import ClassComp from './components/ClassComp';
import HooksComp from './components/HooksComp';
import HooksCounter from './components/HooksCounter';
import LifeCycle from './components/LifeCycle';
import Demo from './components/Demo';
import Demopage from './components/errorBoundary/Demopage';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import State from './components/hooks/State';

function App() {
  return (
    <ErrorBoundary >

      <div className="App">


        {/* Error Boundary */}
        {/* <h1>Heading: Error Boundary</h1> */}
        {/* <Demopage data={"hello"} /> */}
        {/* <Demopage data={false} /> */}

        {/* 
        <ErrorBoundary >
          <Demopage data={false} />
        </ErrorBoundary>

        <p>This is a test </p> */}

        {/* <Demo /> */}
        {/* <LifeCycle /> */}
        {/* <ClassComp /> */}
        {/* <HooksCounter /> */}
        {/* <HooksComp /> */}
        {/* <State /> */}
      </div>
    </ErrorBoundary >

  );
}

export default App;
