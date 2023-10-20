import React from 'react'
import Lottie from "lottie-react";
import Earth from '../access/images/animation_lm7gaia1.json';

function HomeBanner() {
  return (
      <div className='h-[100svh] flex flex-col justify-center items-center'>
           {/* <h3 className='   text-[5vh] font-extrabold text-green-600'>DET INSTALLER</h3> */}
          <div className="w-[70%]">
               <Lottie  animationData={Earth} loop={true} />
         </div>
    </div>
  )
}

export default HomeBanner