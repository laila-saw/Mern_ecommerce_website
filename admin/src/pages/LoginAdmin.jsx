import { Email, Lock, RemoveRedEye, VisibilityOffSharp } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/apiCalls'

const LoginAdmin = () => {
    const [showPwd,setShowPwd]=useState(false)
    const [adminLogin,setAdminLogin]=useState({
      email:"",
      password:""
    })
    const dispatch = useDispatch()
    function handleClick(e){
      e.preventDefault()
      login(dispatch,{email:adminLogin.email,password:adminLogin.password})
    }
    return(
      <div className="login">
        <div className="loginContainer">
        <Link to='/'>
              <h1 className="logo ">Saw<span>Admin.</span></h1>
            </Link>
            <form >
              <div className="feildsList">
                <div className="feildItem">
                  <div className="icon"><Email /> </div>
                  <input onChange={(e)=>setAdminLogin({...adminLogin,email:e.target.value})} type="email" placeholder='Enter your Email' />
                </div>
                <div className="feildItem">
                  <div className="icon"><Lock /> </div>
                  <input onChange={(e)=>setAdminLogin({...adminLogin,password:e.target.value})} type={showPwd ? "text" : "password"} placeholder='Enter your Password' />
                  {
                    showPwd 
                    ? <div onClick={()=>setShowPwd(false)} className="showPwd"><RemoveRedEye /> </div>
                    : <div onClick={()=>setShowPwd(true)} className="showPwd"><VisibilityOffSharp /> </div>
                  }
                  
                  
                </div>
              </div>
              <div className="flex">
                <div className="remember">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">
                  Remember me
                  </label>
                </div>
                <div className="forgotPwd">Forgot password ?</div>
              </div>
              <button onClick={handleClick} className=''>Login</button>
            </form>
        </div>
      </div>
    )
}

export default LoginAdmin