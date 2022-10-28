import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MenuBar from './Components/Shared/MenuBar/MenuBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Courses from './Components/Solid/Banner/Courses/Courses';
import Footer from './Components/Shared/Footer/Footer';
import CourseDetails from './Pages/CourseDetails/CourseDetails';
import RequieAuth from './Pages/Login/RequieAuth';
import Checkout from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
import { themeChange } from 'theme-change'
themeChange()



function App() {
//   const handleTroggle = () => {
//     const element = document.body;
//     element.classList.toggle("dark-mode");
// }

  return (
    <div className='bg-base-200' >
     <MenuBar  />
     <Routes>
      <Route path='/' element={<Home/>}/>
      {/* Protective route */}
      <Route path='/course/:courseId' element={<CourseDetails/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
