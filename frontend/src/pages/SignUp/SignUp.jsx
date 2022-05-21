import {Link} from "react-router-dom";
import "./SignUp.css"
import React from "react";

function SignUp() {
  return (
    <>
      <div className={'wrapper'}>
        <form className={'SignUpForm'}>
          <div className={'center-wrapper'}>
            <div className={'header'}>
              <h3 className={"FormH3"}>Sign Up Here</h3>
            </div>
            <label className={"label"}>Email</label>
            <input className={"input"} type={"email"} placeholder={"Your email"}/>
            <label className={"label"}>Username</label>
            <input className={"input"} type={"text"} placeholder={"Your Username"}/>
            <label className={"label"}>Password</label>
            <input className={"input"} type={"password"} placeholder={"Your Password"}/>
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