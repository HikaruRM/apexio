import logo from '../logo.svg';
import '../css/App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import Second from "./Secondary/Second";
import Header from "../components/Header/Header";


function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"second"} element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
