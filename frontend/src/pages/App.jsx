import '../css/App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import Contact from "./Contact/Contact";
import Header from "../components/Header/Header";
import About from "./About/About";
import SignIn from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Footer from "../components/Footer/Footer";
import QandA from "./QandA/QandA"
import NotFound from "./NotFound/NotFound";


function App() {
  return (

    <>
      <script>
        useEffect(() => {
        document.title = "Apex.io"
      }, []);
      </script>


      <Header />
      <div className={"content"}>
        <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"about"} element={<About />} />
            <Route path={"signin"} element={<SignIn />} />
            <Route path={"signup"} element={<SignUp />} />
            <Route path={"qanda"} element={<QandA />} />
            <Route path={"*"} element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;
