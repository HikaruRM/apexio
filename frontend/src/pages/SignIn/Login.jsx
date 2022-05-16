import React from 'react';
import {Link} from "react-router-dom";
import './Login.css';


function Login() {
  return (
    <>
      <div className={'wrapper'}>
        <form className={'login-form'}>
          <div className={'center-wrapper'}>
            <div className={'header'}>
              <h2>Sign In</h2>
            </div>
            {/*<TextInput name={'username'} label={'Username or email'} error={errors.username} defaultValue={encryptedLocalStorage.getItem('username')} />*/}
            {/*<TextInput type={'password'} name={'password'} label={'Password'} error={errors.password} />*/}
            {/*<BigButton disabled={!loginEnabled}>Sign In</BigButton>*/}
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