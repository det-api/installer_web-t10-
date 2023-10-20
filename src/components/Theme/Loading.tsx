import React from 'react'
import Lottie from 'lottie-react';
import LoadingAni from '../../access/images/animation_lm9zy17c.json';

function Loading() {
  return (
      <div className='absolute top-0 right-0 left-0 bottom-0 z-50 flex items-center justify-center bg-[#333333da]'>  <Lottie className='w-[250px]'  animationData={LoadingAni} loop={true} /></div>
  )
}

export default Loading