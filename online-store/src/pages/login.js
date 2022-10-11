import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./login.css"

function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passShow, setPassShow] = useState(false)
    function handleSubmit(e){
        e.preventDefault()

    }

        
const togglePass=(e)=>{
    e.stopPropagation()
    let eye = document.getElementById("showPass")
    let passInput = document.getElementById("password")
    setPassShow(!passShow)
    if(passShow){
        eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye")
        passInput.setAttribute("type","text")
    }
    else{
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
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
                        <form onSubmit={handleSubmit}>
                            <div className="form-group py-2">
                                <div className="input-field">
                                    <span className="far fa-user p-2"></span>
                                    <input type="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                                 </div>
                            </div>
                            <div className="form-group py-1 pb-2">
                                <div className="input-field">
                                    <span className="fas fa-lock px-2"></span>
                                    <input type="password" id='password' placeholder="Enter your Password" 
                                    value={password} onChange={(e)=>setPassword(e.target.value)} required/> <div className="btn bg-white text-muted">
                                        <span  onClick ={togglePass} id='showPass' className="far fa-eye-slash"></span>
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