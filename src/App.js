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
import Settings from './pages/setting';
// import AdminHeader from './Admin Pages/adminHeader';
import HeaderAdmin from './Admin Pages/HeaderAdmin';
import AdminDashboard from './Admin Pages/adminDashboard';
import NewProduct from './Admin Pages/newProduct';
import AdminProfile from './Admin Pages/adminProfile';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => (
  <>
    <Search/>
    <MObNav/>
    <Header/>
    <Outlet />
    <Footer/>
  </>
);

const HeaderAdminLayout = () => (
  <>
    <MObNav/>
    <HeaderAdmin/>
    <Outlet />
  </>
);

function App () {
  const {IssearchOpen} = useGlobalContext()

  return (
    <div className={`${IssearchOpen?"search-wrappe-on":"app-container"}`} >
      <Router>
        <div className="main-content">
          <Routes >
            <Route element={<SidebarLayout/>}>
              <Route path="/" element={<Home/>} />
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/Category' element={<Category/>}></Route>
                <Route path='/checkout' element={<CheckOut/>}></Route> 
                <Route path='/feedback' element={<Feedback/>}></Route>  
                <Route path='/profile' element={<Profile/>}></Route> 
                <Route path='/setting' element={<Settings/>}></Route> 
                <Route path='*' element={<Error/>}></Route>   
              </Route> 
              <Route path='/login' element={<LogIn/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>  
            <Route element={<HeaderAdminLayout/>}>
              {/* <Route path='/AdminHeader' element={<AdminHeader/>}></Route>   */}
              <Route path='/HeaderAdmin' element={<HeaderAdmin/>}></Route>
              <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>
              <Route path='/newProduct' element={<NewProduct/>}></Route>   
              <Route path='/adminProfile' element={<AdminProfile/>}></Route>
            </Route> 
          </Routes>
        </div>
      </Router>
  </div>
  )
}

export default App

