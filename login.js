import React, { useState } from "react";
import './style.css';
import pic from './immg1.png';
import Home from "./home";
const valid_user = {
  userName: "Priyank",
  password: "priyank123"
};
export default function Login() {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState();

  function onChangeUsername(e) {
    const value = e && e.target.value;
    setUsername(value);
  }

  function onChangePassword(e) {
    const value = e && e.target.value; 
    setPassword(value);
  }

  function loginHandle() {
    const login_success =
      userName === valid_user.userName && password === valid_user.password;
    if (login_success) {
      setSuccess(true);
    }
  }
  return (
    <>
      {!success ? (
        <div>
          <div className = 'image'>
                 <img src={pic} alt="mypic" />
          </div>
          <div className='user'>
            <div>User Name</div>
            <input className='username'
              type="text"
              placeholder="Enter username"
              name="user"
              onChange={onChangeUsername}
              required
            ></input>
          </div>
          <div className='pass'>
            <div>Password</div>
            <input className='password'
              type="password"
              placeholder="Enter Password"
              name="psw"
              onChange={onChangePassword}
              required
            ></input>
          </div>
          <div className='btn'>
            <button className="bttn" onClick={loginHandle}>Login</button>
          </div>
        </div>
      ) : (
        <Home userName = {userName}/>
      )}
    </>
  );
}