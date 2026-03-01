import React, { useState } from 'react'
import './LoginPopup'
import { RxCross2 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState('signup')
  const [token, setToken] = useState("")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    try {
      if (currState === "signup") {
        const response = await axios.post("http://localhost:3000/api/user/register", data)
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setShowLogin(false)
        }
        else {
          alert(response.data.message)
        }
      } else {
        const response = await axios.post("http://localhost:3000/api/user/login", data)
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setShowLogin(false)
        }
        else {
          alert(response.data.message)
        }
      }
    } catch (error) {
      console.log('Error creating user');
    }


  }
  return (
    <div className='login-container'>
      <form onSubmit={onLogin} className='login-form'>
        <div className="login-heading">
          <h2>{currState}</h2>
          <RxCross2 onClick={() => setShowLogin(false)} />
        </div>

        <div className="login-holderc">
          <label htmlFor="username">Name</label>
          <div className="login-input">
            <span className="material-symbols-outlined">
              person
            </span>


            <input name='name' onChange={onChangeHandler} value={data.name} type="name" className='form-input-login' placeholder='Enter Your Name' />
          </div>
          {currState === 'Login' ? <></>
            : <>
              <label htmlFor="email">Email</label>
              <div className="login-input">
                <MdEmail className='material-symbols-outlined' />
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" className='form-input-login' placeholder='Enter Your Email' />
              </div>
            </>

          }


          <label htmlFor="password">Password</label>
          <div className="login-input">
            <FaLock className='material-symbols-outlined' />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" className='form-input-login' placeholder='Enter Your Password' />
          </div>

          <button type='submit' >{currState === "signup" ? "Create account" : "Login"}</button>
          <div className="login-condition">
            <input type="checkbox" required />
            <p>By clicking here, I state that I have read and understood the terms and conditions</p>
          </div>
          {currState === 'Login' ? <p>Create new account ?<span className='span-below' onClick={() => setCurrState('Sign up')} >Click here</span ></p>
            : <p>Already have an account ?<span className='span-below' onClick={() => setCurrState('Login')} >Login here</span ></p>
          }

        </div>
      </form>
    </div>
  )
}

export default LoginPopup