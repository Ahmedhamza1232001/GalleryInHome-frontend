import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { useGlobalContext } from './context';
// components 
import MObNav from './components/mobNav';
import Search from './components/search';
import Header from './components/header';
import Feedback from './components/feedback';
import Footer from './components/footer';
// pages
import Product from './pages/product';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import Error from './pages/error';
import Home from './pages/home';
import Category from './pages/Category';
import CheckOut from './pages/checkout';
import Cart from './pages/cart';
import ThreeDModel from './pages/3dModel';
import Profile from './pages/profile';


function App () {
  const {IssearchOpen} = useGlobalContext()

  return (
    <div className={`${IssearchOpen?"search-wrappe-on":"app-container"}`} >
      <Router>
        <Search/>
        <div className="main-content">
        <MObNav/>
        <Header/>
          <Routes >
            <Route path="/" element={<Home/>} />
            <Route path='/login' element={<LogIn/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/Category' element={<Category/>}></Route>
            <Route path='/checkout' element={<CheckOut/>}></Route> 
            <Route path='/feedback' element={<Feedback/>}></Route>  
            <Route path='/ThreeDModel' element={<ThreeDModel/>}></Route> 
            <Route path='*' element={<Error/>}></Route>          
          </Routes>
        </div>
      <Footer/>
      </Router>
  </div>
  )
}

export default App

