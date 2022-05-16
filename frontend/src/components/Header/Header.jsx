import './Header.css';
import {NavLink, useNavigate} from "react-router-dom";


function App() {
  const navigate = useNavigate()

  return (
    <>
      <header className={"page-header"}>
        <NavLink to={"/"}>
          <img src={"/text.svg"} alt={"Logo for website"}/>
        </NavLink>
        <nav>
          <NavLink to={"/second"}>Second</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <button className={"button"} onClick={() => {navigate('/signin')}}>Sign In</button>
        </nav>
      </header>
    </>
  );
}

export default App;
