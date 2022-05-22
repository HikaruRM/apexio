import React, {useState} from 'react';
import {Sliderdata} from "./sliderdata";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import './ImageSlider.css'

const Imageslider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return(
    <section className={"slider"}>
      <FaArrowAltCircleLeft className={"left-arrow"} onClick={prevSlide}/>
      <FaArrowAltCircleRight className={"right-arrow"} onClick={nextSlide}/>
      {Sliderdata.map((slide, index) => {
        return(
         <div className={index === current ? 'slide active' : 'slide'} key ={index}>
           {index === current && ( <img src={slide.image} alt={"news"} className={"SliderImages"}/>)}

         </div>
        )

      })}
    </section>
  )

}

export default Imageslider;