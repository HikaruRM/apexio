import './Main.css';
import '../../components/Slider/imageslider'
import Imageslider from "../../components/Slider/imageslider";
import {Sliderdata} from "../../components/Slider/sliderdata";

function Main() {
  return <Imageslider slides={Sliderdata}/>;
  return (
    <>
      <h1 className={"title"}>Welcome to apex</h1>
      <h1 className={"sub-title"}>News</h1>
      <div className={"div-text"}>
        <h1 className={"div-title"}>Newest Products</h1>
        <p>Corsair K100 optical-mechanical keyboard - €269.99</p>


      </div>

    </>
  );
}

export default Main;
