import './Main.css';
import '../../components/Slider/imageslider'
import Imageslider from "../../components/Slider/imageslider";
import {Sliderdata} from "../../components/Slider/sliderdata";

function Main() {
  return (
    <>
      <Imageslider slides={Sliderdata}/>

    </>
  );
}

export default Main;
