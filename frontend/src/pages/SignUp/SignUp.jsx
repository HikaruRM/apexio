import {Link} from "react-router-dom";
import "./SignUp.css"

function SignUp() {
  return (
    <>
        <div>
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
        </div>


    </>
  );
}

export default SignUp;
