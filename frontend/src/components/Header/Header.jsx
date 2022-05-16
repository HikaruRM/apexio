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
          <button className={"header-button"} onClick={() => {navigate('/')}}>Home</button>
          <button className={"header-button"} onClick={() => {navigate('/store')}}>Store</button>
          <button className={"header-button"} onClick={() => {navigate('/qanda')}}>Q&A</button>
          <button className={"header-button"} onClick={() => {navigate('/contact')}}>Contact</button>
        </nav>
        <nav>
          <button className={"button"} onClick={() => {navigate('/signin')}}>Sign In</button>
        </nav>

      </header>
    </>
  );
}

export default App;
