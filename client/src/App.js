import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
