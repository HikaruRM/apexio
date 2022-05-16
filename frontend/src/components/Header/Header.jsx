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
          <NavLink className={"header-button"} to={'/'}>Home</NavLink>
          <NavLink className={"header-button"} to={'/store'}>Store</NavLink>
          <NavLink className={"header-button"} to={'/qanda'}>Q&A</NavLink>
          <NavLink className={"header-button"} to={'/contact'}>Contact</NavLink>
          <NavLink className={"header-button"} to={'/about'}>About</NavLink>
        </nav>
        <nav>
          <button className={"button"} onClick={() => {navigate('/signin')}}>Sign In</button>
        </nav>

      </header>
    </>
  );
}

export default App;
