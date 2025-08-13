import React from 'react'
/* {images}*/
import disney from '../../assets/images/disney.png'
import marvel from '../../assets/images/marvel.png'
import pixar from '../../assets/images/pixar.png'
import starwar from '../../assets/images/starwar.png'
import nationalG from '../../assets/images/nationalG.png'

/* {videos}*/

import disneyV from '../../assets/videos/disney.mp4'
import marvelV from '../../assets/videos/marvel.mp4'
import pixarV from '../../assets/videos/pixar.mp4'
import starwarV from '../../assets/videos/star-wars.mp4'
import nationalGV from '../../assets/videos/national-geographic.mp4'





const ProductionHouse = () => {

    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGV
        },

    ]

   


  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div  key={item.id}  className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
                 <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-1.5 px-3 rounded-4xl
            opacity-0 hover:opacity-70'/> 
                <img src={item.image} className='w-full z-[1] opacity-100' /> 
               
            </div>
        ))}
    </div>

     
  )
}

export default ProductionHouse


/*
<div
      className="
        flex md:grid 
        md:grid-cols-5 
        gap-3 md:gap-5 
        p-2 px-4 md:px-16 
        overflow-x-auto md:overflow-visible 
        no-scrollbar
      "
    >
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="
            min-w-[140px] md:min-w-0
            border-[2px] border-gray-600
            rounded-lg hover:scale-110 
            transition-all duration-300
            ease-in-out cursor-pointer 
            relative shadow-xl shadow-gray-800
            flex-shrink-0
          "
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="
              absolute z-0 top-0 left-0 w-full h-full 
              object-cover rounded-lg
              opacity-0 hover:opacity-70
              transition-opacity duration-300
            "
          />
          <img
            src={item.image}
            alt="Production Logo"
            className="w-full h-full z-[1] opacity-100 rounded-lg"
          />
        </div>
      ))}
    </div>


      const productionHouseList = [
    { id: 1, image: disney, video: disneyV },
    { id: 2, image: pixar, video: pixarV },
    { id: 3, image: marvel, video: marvelV },
    { id: 4, image: starwar, video: starwarV },
    { id: 5, image: nationalG, video: nationalGV },
  ];
*/ 