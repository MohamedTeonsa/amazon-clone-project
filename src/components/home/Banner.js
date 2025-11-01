import React, { useState } from 'react'
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree, bannerImgFour, bannerImgFive } from '../../assets/index';

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: dots => (
      <div
        style={{
         position:'absolute',
         top:'70%',
         left:'45%',
         transform:'translate(-50% -50%)',
         width:"210px"
        }}
      >
        <ul style={{
          width:"100%",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between"
         }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          height:"30px",
          color: "white",
          border: i === dotActive ? "1px  solid #f3a847" : "px  solid white",
          borderRadius:'50%',
          display:'flex',
          alignItems:'center',
          justifyContent:"center",
          background:  i === dotActive ? "#131921" : "#232F3E",
          padding:"8px 0",
          cursor:"pointer",

          
        }}
      >
        {i + 1}
      </div>
    ),
    
    
  };
  return (
    <div className='w-full'>
      <div className='w-full h-full relative'>
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt='bannerImgOne' />
          </div>
          <div>
            <img src={bannerImgTwo} alt='bannerImgOne' />
          </div>
          <div>
            <img src={bannerImgThree} alt='bannerImgOne' />
          </div>
          <div>
            <img src={bannerImgFour} alt='bannerImgOne' />
          </div>
          <div>
            <img src={bannerImgFive} alt='bannerImgOne' />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Banner