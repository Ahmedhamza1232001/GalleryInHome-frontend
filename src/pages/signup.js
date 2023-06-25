import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import facbook from '../images/facebook.jpeg';
import twitter from '../images/twitter.png';
import google from '../images/google.png';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already authenticated
    const isAuthenticated = sessionStorage.getItem('userData');
    if (isAuthenticated) {
      navigate('/'); // Redirect to the profile page or another appropriate page
    }
  }, [navigate]);

  const submition = (data) => {
    console.log(data);
    const url = 'https://galleryinhome.azurewebsites.net/Auth/register'; // replace with your backend API endpoint for user registration
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          toast.success('Successfully registered!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          setTimeout(() => (window.location.href = '/'), 500);
        } else {
          toast.error('Failed to register!', {
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
      .catch((err) => console.log(err.message));
  };

  return (
    <main className="registration-wrapper">
      <div className="login-wrapper container">
        <div className="row">
          <div className="offset-md-2 col-lg-6 col-md-7 offset-lg-3 offset-md-3">
            <div className="panel border ">
              <div className="panel-heading">
                <h3 className="pt-3 font-weight-bold">Sign Up</h3>
              </div>
              <div className="panel-body p-3">
                <form onSubmit={handleSubmit(submition)}>
                  <div className="form-group">
                    {<p className="error">{errors.username?.message}</p>}
                    <div className="input-field">
                      <span className="far fa-user p-2"></span>
                      <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        {...register('userName', {
                          required: 'User Name is required*',
                          pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: 'Enter a valid name',
                          },
                        })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    {<p className="error">{errors.email?.message}</p>}
                    <div className="input-field">
                      <span className="far fa-address-book p-2"></span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        {...register('email', {
                          required: 'This field is required*',
                          pattern: {
                            value: /^[a-zA-Z]+[a-zA-Z0-9._-]*@[a-zA-Z.-]+[a-zA-Z]{2,6}$/,
                            message: 'Please enter a valid email',
                          },
                        })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    {<p className="error">{errors.password?.message}</p>}

                    <div className="input-field">
                      <span className="fas fa-lock p-2"></span>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your Password"
                        {...register('password', {
                          required: 'This field is required*',
                          minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters long',
                          }, validate: {
                            noSpaces: value => !/^\s+$/.test(value),
                          },
                        })}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary btn-block mt-3" disabled={!isValid}>
                    Sign Up
                  </button>
                  <Link to="/" className="btn back-home btn-block mt-3">
                    Back Home
                  </Link>

                  <div className="text-center pt-4 text-muted">
                    Already have an account? <Link to="/login">Sign in</Link>
                  </div>
                </form>
              </div>
 
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default SignUp;
