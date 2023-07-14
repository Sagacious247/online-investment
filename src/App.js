import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivateRoute from '../src/components/RivateRoute'
import Packages from './pages/Packages';
import AuthContainer from './components/auth/AuthContainer';


function App() {
  return (
    <>
    <Router >
      <Routes>
        <Route path='/' element={<PrivateRoute/>}>
        <Route path='/' element={<Home/>} />
        </Route>
        <Route path='/signup' element={<AuthContainer/>} />
        <Route path='/packages' element={<Packages/>} />
      </Routes>
    </Router>
     <ToastContainer/>
    </>
  );
}

export default App;
