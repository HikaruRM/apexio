import './Header.css';
import {NavLink} from "react-router-dom";


function App() {
  return (
    <>
      <header className={"page-header"}>
        <NavLink to={"/"}>
          <img src={"/text.svg"} alt={"Logo for website"}/>
        </NavLink>
        <nav>
          <NavLink to={"/second"}>Second</NavLink>
          <NavLink to={"/About"}>About</NavLink>
          <NavLink to={"/SignIn"}>
            <button className={"button"}>Sign In</button>
          </NavLink>
          <NavLink to={"/SignUp"}>
            <button className={"button"}>Sign Up</button>
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default App;
