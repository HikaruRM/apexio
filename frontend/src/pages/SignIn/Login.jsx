import React from 'react';
import {Link} from "react-router-dom";
import './Login.css';


function Login() {
  return (
    <>
      <div className={'wrapper'}>
        <form className={'SignInForm'}>
          <div className={'center-wrapper'}>
            <div className={'header'}>
              <h3 className={"FormH3"}>Sign In</h3>
            </div>
              <label className={"label"}>Email or Username</label>
              <input className={"input"} type={"text"} placeholder={"Your Email or Username"}/>
              <label className={"label"}>Password</label>
              <input className={"input"} type={"password"} placeholder={"Your Password"}/>
              <button className={"FormButton"}>Sign In</button>
            <div>
              <span>Don't have an account? </span>
              <Link className={'link'} to={'/register'}>Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;