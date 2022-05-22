import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Login.css';
import axios from "axios";


function Login() {
  const [username, setUsername] = useState("");
  const [passwrd, setPasswrd] = useState("");

  const login = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/login",{username: username ,passwrd: passwrd}
    ).then((response)=> {
      console.log(response);
    });
  }

  return (
    <>
      <div className={'wrapper'}>
        <form className={'SignInForm'} onSubmit={login}>
          <div className={'center-wrapper'}>
            <div className={'header'}>
              <h3 className={"FormH3"}>Sign In Here</h3>
            </div>
              <label className={"label"}>Email or Username</label>
              <input className={"input"} type={"username"} placeholder={"Your Username"} onChange={(e) => {setUsername(e.target.value)}}/>
              <label className={"label"}>Password</label>
              <input className={"input"} type={"password"} placeholder={"Your Password"} onChange={(e) => {setPasswrd(e.target.value)}}/>
              <span>Don't have an account? </span>
              <Link className={'link'} to={'/SignUp'}>Sign Up</Link>
              <button className={"FormButton"}>Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;