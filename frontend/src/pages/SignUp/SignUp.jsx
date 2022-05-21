import {Link} from "react-router-dom";
import "./SignUp.css"
import React, {useState} from "react";
import axios from "axios";


function SignUp() {

  const [emailReg, setEmailReg] =useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordeReg] = useState("");

  const register = (event) =>{
    event.preventDefault()
    axios.post("http://localhost:3001/register", {
      email: emailReg,
      username: usernameReg,
      passwrd: passwordReg,
    }).then((response)=> {
      console.log(response);
    });
  };


  return (
    <>
      <div className={'wrapper'}>
        <form className={'SignUpForm'} onSubmit={register}>
          <div className={'center-wrapper'}>
            <div className={'header'}>
              <h3 className={"FormH3"}>Sign Up Here</h3>
            </div>
            <label className={"label"}>Email</label>
            <input className={"input"} type={"text"} placeholder={"Your email"} onChange={(e)=>{setEmailReg(e.target.value)}}/>
            <label className={"label"}>Username</label>
            <input className={"input"} type={"text"} placeholder={"Your Username"} onChange={(e)=>{setUsernameReg(e.target.value)}}/>
            <label className={"label"}>Password</label>
            <input className={"input"} type={"password"} placeholder={"Your Password"} onChange={(e)=>{setPasswordeReg(e.target.value)}}/>
            <span>Do you have Account? </span>
            <Link className={'link'} to={'/signin'}>Sign In</Link>
            <button className={"FormButton"}>Sign Up</button>
          </div>
        </form>
      </div>


    </>
  );
}

export default SignUp;

<form className={"SignUpForm"}>
  <h3 className={"FormH3"}>Sign Up Here</h3>
  <label className={"label"}>Email</label>
  <input className={"input"} type={"text"} placeholder={"Your email"}/>
  <label className={"label"}>Username</label>
  <input className={"input"} type={"text"} placeholder={"Your Username"}/>
  <label className={"label"}>Password</label>
  <input className={"input"} type={"password"} placeholder={"Your Password"}/>
  <button className={"FormButton"}>Sign Up</button>
</form>