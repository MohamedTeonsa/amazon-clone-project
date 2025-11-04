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
         // Ajustement pour la réactivité: centrer les points horizontalement
         // left: '50%' pour centrer, puis 'translateX(-50%)' dans le transform
         left:'50%', 
         transform:'translate(-50%, -50%)', // Correction de la syntaxe du transform
         // Ajustement pour la réactivité: utiliser une largeur maximale ou relative
         // 210px est une bonne largeur pour les points, mais on s'assure qu'elle ne dépasse pas la largeur de l'écran
         maxWidth:"90%", // Ajout d'une largeur maximale pour les petits écrans
         width:"210px",
         margin: "0 auto" // Ajout pour s'assurer que le bloc est centré si la largeur est inférieure à 210px
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
          border: i === dotActive ? "1px  solid #f3a847" : "1px  solid white", // Correction: "px" remplacé par "1px"
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
            {/* Ajout de classes pour s'assurer que l'image est responsive */}
            <img className='w-full h-full object-cover' src={bannerImgOne} alt='bannerImgOne' />
          </div>
          <div>
            <img className='w-full h-full object-cover' src={bannerImgTwo} alt='bannerImgOne' />
          </div>
          <div>
            <img className='w-full h-full object-cover' src={bannerImgThree} alt='bannerImgOne' />
          </div>
          <div>
            <img className='w-full h-full object-cover' src={bannerImgFour} alt='bannerImgOne' />
          </div>
          <div>
            <img className='w-full h-full object-cover' src={bannerImgFive} alt='bannerImgOne' />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Banner