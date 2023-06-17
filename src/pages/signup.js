import React from 'react'
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
import './signup.css'
// images
import facbook from '../images/facebook.jpeg'
import twitter from '../images/twitter.png'
import google from '../images/google.png'
// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp() {
  const { register, handleSubmit,  formState: { errors,isValid }  ,reset } = useForm({
    mode:"onChange",
  });

    const submition = (data) => {
      const url = "a";
      fetch(url, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            toast.success("successfully login !", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(()=>window.location.href = "/",500) 
        })
          .catch(err => {
            toast.error("Failed to login !", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
              console.log(err.message)   

          })
        reset()
  }


  return (
    <main className='registration-wrapper'>
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
                                {<p className='error'>{errors.username?.message}</p>}
                                <div className="input-field">
                                    <span className="far fa-user p-2"></span>
                                    <input type="text" name='userName' placeholder="User Name"
                                    {...register("userName",{required:"User Name is requied*",pattern:{value:/^[A-Za-z]+$/i ,message:"Enter Valid Name"}})}/>
                                </div>
                            </div>
                            <div className="form-group">
                                {<p className='error'>{errors.email?.message}</p>}
                                <div className="input-field">
                                    <span className="far fa-address-book p-2"></span>
                                    <input type="email" name='email' placeholder="Enter your Email"
                                    {...register("email",{required:"this is requied*",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,6}$/,message:"please enter  valid email"}})}/>
                                 </div>
                            </div>
                            <div className="form-group">
                                {<p className='error'>{errors.password?.message}</p>}

                                <div className="input-field">
                                    <span className="fas fa-lock p-2"></span>
                                    <input type="password" name='password' id='password' placeholder="Enter your Password" 
                                    {...register("password",{required:"this is requied*",minLength:{value:6,message:"password must be more than 5"}})}/> 
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block mt-3" disabled={!isValid} >Sign Up</button>
                            <Link to='/' className="btn back-home btn-block mt-3" >Back Home</Link>

                            <div className="text-center pt-4 text-muted">already have an account? 
                                <Link to="/login" className='ToSignUp'>Sign in</Link>
                             </div>
                        </form>
                    </div>
                    <div className="mx-3 my-2 py-2 bordert">
                        <div className="text-center py-3"> 
                            <a href="https://wwww.facebook.com" title="Facebook" target="_blank" className="px-2">
                                <img src={facbook}alt="facebook"/>
                            </a> 
                            <a href="https://www.google.com" title="Google" target="_blank" className="px-2">
                                <img src={google} alt="Google"/> 
                            </a>
                            <a href="https://www.twitter.com" title="twitter" target="_blank">
                                <img src={twitter}  alt="twitter" />
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ToastContainer />

</main>
  )
}

export default SignUp