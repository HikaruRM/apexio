import logo from '../logo.svg';
import '../css/App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import Second from "./Secondary/Second";
import Header from "../components/Header/Header";
import About from "./About/About";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";


function App() {
  return (
    <>


      <Header />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"second"} element={<Second />} />
        <Route path={"About"} element={<About />} />
        <Route path={"SignIn"} element={<SignIn />} />
        <Route path={"SignUp"} element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
