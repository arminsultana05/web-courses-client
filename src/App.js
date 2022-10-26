import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MenuBar from './Components/Shared/MenuBar/MenuBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div >
     <MenuBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />


     </Routes>

    </div>
  );
}

export default App;
