import React from 'react'
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
import './signup.css'
// images
import facbook from '../images/facebook.jpeg'
import twitter from '../images/twitter.png'
import google from '../images/google.png'


function SignUp() {
  const { register, handleSubmit,  formState: { errors,isValid }   } = useForm({
    mode:"onChange",
  });

  const submition= (data)=>{
    // e.preventDefault()
    console.log(data);    
}


  return (
    <main className='registration-wrapper'>
    <div className="login-wrapper container">
        <div className="row">
            <div className="offset-md-2 col-lg-6 col-md-7 offset-lg-3 offset-md-3">
                <div className="panel border bg-white">
                    <div className="panel-heading">
                        <h3 className="pt-3 font-weight-bold">Sign Up</h3>
                    </div>
                    <div className="panel-body p-3">
                        <form onSubmit={handleSubmit(submition)}>
                            <div className="row">
                              <div className="form-group col-6">
                                  {<p className='error'>{errors.firstname?.message}</p>}
                                  <div className="input-field">
                                      <span className="far fa-user p-2"></span>
                                      <input type="text" name='firstname' placeholder="First Name"
                                      {...register("firstname",{required:"FirstName is requied*",pattern:{value:/^[A-Za-z]+$/i ,message:"Enter Valid Name"}})}/>
                                  </div>
                              </div>
                              <div className="form-group  col-6">
                                  {<p className='error'>{errors.lastname?.message}</p>}
                                  <div className="input-field">
                                      <span className="far fa-user p-2"></span>
                                      <input type="text" name='lastname' placeholder="Last Name"
                                      {...register("lastname",{required:"LastName is requied*",pattern:{value:/^[A-Za-z]+$/i ,message:"Enter Valid Name"}})}/>
                                  </div>
                              </div>
                            </div>
                            <div className="form-group">
                                {<p className='error'>{errors.age?.message}</p>}
                                <div className="input-field">
                                    <span className="far fa-user p-2"></span>
                                    <input type="number" name='age' placeholder="Enter Your Age"
                                    {...register("age",{required:"Age is requied*",valueAsNumber:true})} min="18" max="99"/>
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
                            <div className="form-group py-1">
                                {<p className='error'>{errors.password?.message}</p>}

                                <div className="input-field">
                                    <span className="fas fa-lock p-2"></span>
                                    <input type="password" name='password' id='password' placeholder="Enter your Password" 
                                    {...register("password",{required:"this is requied*",minLength:{value:6,message:"password must be more than 5"}})}/> 
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block mt-3" disabled={!isValid} >Sign Up</button>
                            <div className="text-center pt-4 text-muted">already have an account? 
                                <Link to="/login" className='ToSignUp'>logIn</Link>
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

</main>
  )
}

export default SignUp