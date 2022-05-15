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
        </nav>
      </header>
    </>
  );
}

export default App;
