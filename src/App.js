import LogIn from './pages/login';
import SignUp from './pages/signup';
import Navbar from './components/navbar';
import Home from './pages/home';
import Error from './pages/error';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


function App () {
  return (
    <div className="app">
    <Router>
      <Navbar/>
      <Routes >
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='*' element={<Error/>}></Route>
        
      </Routes>
    </Router>
  </div>
  )
}

export default App

