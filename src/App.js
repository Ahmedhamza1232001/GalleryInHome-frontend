import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { useGlobalContext } from './context';
// components 
import Navbar from './components/navbar';
import Search from './components/search';
// pages

import Product from './pages/product';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import Error from './pages/error';
import Home from './pages/home';
import Category from './pages/Category'


function App () {
  const {IssearchOpen} = useGlobalContext()

  return (
    <div className={`${IssearchOpen?"search-wrappe-on":"app-container"}`} >
      <Router>
        <Navbar/>
        <Search/>
        <Routes >
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/Category' element={<Category/>}></Route>
        <Route path='*' element={<Error/>}></Route>
          
        </Routes>
      </Router>
  </div>
  )
}

export default App

