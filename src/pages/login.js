import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './login.css';
import facbook from '../images/facebook.jpeg';
import twitter from '../images/twitter.png';
import google from '../images/google.png';

function LogIn() {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
    mode: 'onChange',
  });
  const [passShow, setPassShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already authenticated
    const isAuthenticated = sessionStorage.getItem('userData');
    if (isAuthenticated) {
      navigate('/'); // Redirect to the profile page or another appropriate page
    }
  }, [navigate]);

  const submition = (data) => {
    const url = 'https://galleryinhome.azurewebsites.net/Auth/login';
    fetchUsers(url, data);
  };

  const fetchUsers = (url, data) => {
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          const { id, token } = res.data; // Extract the user ID from the API response
          sessionStorage.setItem('userId', id); // Store the user ID in session storage

          sessionStorage.setItem('userData', JSON.stringify(res.data));
          sessionStorage.setItem('token', token);
          toast.success('Login successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          setTimeout(() => window.location.href = '/', 500);
        }
        else {
          toast.error('Failed to login!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
      })
      .catch(err => {
        console.log(err.message);
      });
    reset();
  };

  const togglePass = (e) => {
    let passInput = document.getElementById('password');
    let eye = document.getElementById('showPass');
    setPassShow(!passShow);
    if (passShow) {
      eye.classList.remove('fa-eye-slash');
      eye.classList.add('fa-eye');
      passInput.setAttribute('type', 'text');
    }
    else {
      eye.classList.remove('fa-eye');
      eye.classList.add('fa-eye-slash');
      passInput.setAttribute('type', 'password');
    }
  };

  return (
    <main className='registration-wrapper'>
      <div className="login-wrapper container">
        <div className="row">
          <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
            <div className="panel border">
              <div className="panel-heading">
                <h3 className="pt-3 font-weight-bold">Login</h3>
              </div>
              <div className="panel-body p-3">
                <form onSubmit={handleSubmit(submition)}>
                  <div className="form-group">
                    {<p className='error'>{errors.email?.message}</p>}
                    <div className="input-field">
                      <span className="far fa-user p-2"></span>
                      <input
                        type="email"
                        name='email'
                        placeholder="Enter your Email"
                        {...register("email", {
                          required: "This field is required",
                          pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,6}$/,
                            message: "Please enter a valid email"
                          }
                        })}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    {<p className='error'>{errors.password?.message}</p>}
                    <div className="input-field">
                      <span className="fas fa-lock p-2"></span>
                      <input
                        type="password"
                        name='password'
                        id='password'
                        placeholder="Enter your Password"
                        {...register("password", {
                          required: "This field is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters long"
                          }
                        })}
                      />
                      <div>
                        <span onClick={togglePass} id='showPass' className="far fa-eye-slash bg-white text-muted"></span>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-block mt-3" disabled={!isValid}>Login</button>
                  <Link to='/' className="btn back-home btn-block mt-3">Back Home</Link>
                  <div className="text-center pt-4 text-muted">
                    Don't have an account? <Link to="/signup" className='ToSignUp'>Sign up</Link>
                  </div>
                </form>
              </div>
              <div className="mx-3 my-2 py-2 bordert">
                <div className="text-center py-3">
                  <a href="https://wwww.facebook.com" title="Facebook" target="_blank" className="px-2">
                    <img src={facbook} alt="facebook" />
                  </a>
                  <a href="https://www.google.com" title="Google" target="_blank" className="px-2">
                    <img src={google} alt="google" />
                  </a>
                  <a href="https://www.twitter.com" title="twitter" target="_blank">
                    <img src={twitter} alt="twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default LogIn;
