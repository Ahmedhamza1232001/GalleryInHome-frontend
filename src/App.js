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
import Profile from './pages/profile';

  
  const SidebarLayout = () => (
    <>
      <Search/>
      <MObNav/>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );

  const HeaderAdminLayout = () => (
    <>
      {/* <AdminHeader/> */}
      <MObNav/>
      <HeaderAdmin />
      <Outlet /> 
    </>
  );
function App() {
  const {IssearchOpen} = useGlobalContext()

  return (
    <div className={`${IssearchOpen?"search-wrappe-on":"app-container"}`} >
      <Router>   
        <div className="main-content">  
          <Routes >
            <Route element={<SidebarLayout/>}>
          </Routes>
        </div>
      </Router>
  </div>
  )
}

export default App
