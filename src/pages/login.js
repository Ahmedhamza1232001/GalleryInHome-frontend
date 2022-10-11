import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
import "./login.css"

function LogIn() {
    const { register, handleSubmit,  formState: { errors }   } = useForm();
    const [passShow, setPassShow] = useState(false)
    const submition= (data)=>{
        // e.preventDefault()
        console.log(typeof(data.email));    
    }

// function to show and hide password
const togglePass=(e)=>{
    // select the input and the icon
    let passInput = document.getElementById("password")
    let eye = document.getElementById("showPass")
    // toggle the state value 
    setPassShow(!passShow)
    // set a condition if state is true or otherwise  
    if(passShow){
        // if state is true then remove the icon eye-slash class and add the eye class    
        eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye")
        // and switch the input from password to text 
        passInput.setAttribute("type","text")
    }
    else{
        // if state is false then remove the icon eye class and add the eye-slash class     
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
        // and switch the input from text to password 
        passInput.setAttribute("type","password")

    }
}   

  return (
    <main>
    <div className="container">
        <div className="row">
            <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
                <div className="panel border bg-white">
                    <div className="panel-heading">
                        <h3 className="pt-3 font-weight-bold">Login</h3>
                    </div>
                    <div className="panel-body p-3">
                        <form onSubmit={handleSubmit(submition)}>
                            <div className="form-group py-2">
                                {<p className='error'>{errors.email?.message}</p>}
                                <div className="input-field">
                                    <span className="far fa-user p-2"></span>
                                    <input type="email" name='email' placeholder="Enter your Email"
                                    {...register("email",{required:"this is requied*",pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,6}$/,message:"please enter  valid email"}})}/>
                                 </div>

                            </div>
                            <div className="form-group py-1 pb-2">
                                {<p className='error'>{errors.password?.message}</p>}

                                <div className="input-field">
                                    <span className="fas fa-lock p-2"></span>
                                    <input type="password" name='password' id='password' placeholder="Enter your Password" 
                                    {...register("password",{required:"this is requied*",minLength:{value:6,message:"password must be more than 5"}})}/> 
                                    <div>
                                        <span onClick ={togglePass} id='showPass' className="far fa-eye-slash bg-white text-muted"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-inline">
                                <input type="checkbox" name="remember" id="remember"/>
                                <label htmlFor="remember" className="text-muted">Remember me</label>
                            </div>
                            <button className="btn btn-primary btn-block mt-3">Login</button>
                            <div className="text-center pt-4 text-muted">Don't have an account? 
                                <Link to="/signup" className='ToSignUp'>Sign up</Link>
                             </div>
                        </form>
                    </div>
                    <div className="mx-3 my-2 py-2 bordert">
                        <div className="text-center py-3"> 
                            <a href="https://wwww.facebook.com" target="_blank" className="px-2">
                                <img src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg"alt=""/>
                            </a> 
                            <a href="https://www.google.com" target="_blank" className="px-2">
                                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt=""/> 
                            </a>
                            <a href="https://www.github.com" target="_blank" className="px-2">
                                <img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" alt=""/>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}

export default LogIn