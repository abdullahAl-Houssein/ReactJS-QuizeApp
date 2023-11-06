import logo from './logo.svg';
import './App.css';
import Quiz from "./components/quiz"
import Userfrom from './components/from';
import Adminpage from './components/Adminpage';
import { Routes,Route} from 'react-router-dom';
import Adminplane from './components/Adminpanel';

function App() {
  return (
    <div className="App">
       {/* <Userfrom></Userfrom>  */}
      {/* <Quiz></Quiz> */}

      <Routes>
        <Route path='/' element={<Userfrom></Userfrom>} />
        <Route path='/admin' element={<Adminpage></Adminpage>} />
        <Route path='/adminplane' element={<Adminplane></Adminplane>}/>
      </Routes>
       
    </div>
  );
}

export default App;
