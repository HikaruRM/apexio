import '../css/App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import Second from "./Secondary/Second";
import Header from "../components/Header/Header";
import About from "./About/About";
import SignIn from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Footer from "../components/Footer/Footer";


function App() {
  return (
    <>


      <Header />
      <div className={"content"}>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"second"} element={<Second />} />
          <Route path={"about"} element={<About />} />
          <Route path={"signin"} element={<SignIn />} />
          <Route path={"signup"} element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
