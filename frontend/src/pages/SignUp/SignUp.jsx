import {Link} from "react-router-dom";
import "./SignUp.css"
import React, {useState} from "react";
import axios from "axios";

function SignUp() {
  const [usernameReg, setUsernameReg] = useState();
  const [emailReg, setEmailReg] = useState();
  const [passwrdReg, setPasswrdReg] = useState();

  const register = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/register",{email: emailReg ,username: usernameReg ,passwrd: passwrdReg}
    ).then((response)=> {
      console.log(response);
    });
  }

  return (
    <>
      <div className={'wrapper'}>
        <form className={'SignUpForm'} onSubmit={register}>
          <div className={'center-wrapper'}>
            <div className={'header'}>
              <h3 className={"FormH3"}>Sign Up Here</h3>
            </div>
            <label className={"label"}>Email</label>
            <input className={"input"} type={"email"} placeholder={"Your email"} onChange={(e)=> {setEmailReg(e.target.value)}}/>
            <label className={"label"}>Username</label>
            <input className={"input"} type={"text"} placeholder={"Your Username"} onChange={(e)=> {setUsernameReg(e.target.value)}}/>
            <label className={"label"}>Password</label>
            <input className={"input"} type={"password"} placeholder={"Your Password"} onChange={(e)=> {setPasswrdReg(e.target.value)}}/>
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

