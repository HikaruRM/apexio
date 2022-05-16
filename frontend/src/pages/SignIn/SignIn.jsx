import {Link} from "react-router-dom";
import "./SignIn.css"

function SignIn() {
  function onSubmit(event) {
    event.preventDefault()

    console.log('Attempted to submit')
  }


  return (
    <>
      <div>
        <form className={"SignInForm"} onSubmit={onSubmit}>
          <h3 className={"FormH3"}>Sign In Here</h3>
          <label className={"label"}>Email or Username</label>
          <input className={"input"} type={"text"} placeholder={"Your Email or Username"}/>
          <label className={"label"}>Password</label>
          <input className={"input"} type={"password"} placeholder={"Your Password"}/>
          <button className={"FormButton"}>Sign In</button>
        </form>
      </div>

    </>
  );
}

export default SignIn;
