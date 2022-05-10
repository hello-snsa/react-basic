import './App.css';
import AxiosDelete from './components/AxiosDelete';
import AxiosEdit from './components/AxiosEdit';
import AxiosGet from './components/AxiosGet';
import AxiosPost from './components/AxiosPost';
import CustomHooks from './components/hooks/CustomHooks';
import HookUseMemo from './components/hooks/HookUseMemo';
import Normal from './components/hooks/Normal';

function App() {
  return (
    <div className="App">

      {/* useMemo Hook */}
      {/* <HookUseMemo /> */}

      {/* Custom Hooks */}
      {/* <Normal /> */}
      {/* <CustomHooks /> */}

      {/* CRUD operation */}
      {/* <AxiosGet /> */}
      {/* <AxiosPost /> */}
      {/* <AxiosDelete /> */}
      {/* <AxiosEdit /> */}
    </div>
  );
}

export default App;
