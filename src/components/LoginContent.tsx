import React, { useState } from 'react'
import useMousePosition from '../utils/useMousePosition'
import { motion } from 'framer-motion';

function LoginContent() {
  const [isHover, setIsHover] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHover ? 300 : 40;

  return (
    <div  className='w-[50%]'>
      <div className=' w-[100%] animate-bottom overflow-hidden h-[100%] main flex items-center justify-center'>
     
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2) }px`,
          WebkitMaskSize:`${size}px`
        }}
        transition={{
          type: 'tween',
          ease:'backOut'
        }}
        className='mask  w-[55%]  flex flex-col items-center justify-center h-[100%]'>
        <div  onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className='p-4'
        >
          <h3  className='mb-1 text-[6vh]   font-extrabold'>Your Friend, Your Partner</h3>
          <p className='text-[3vh]  '>For Simple, Secure And Smart Use DET Products</p>
       </div>
         </motion.div>
      <div className='body'>
        <h3  className='mb-1 text-[6vh] text-slate-300   font-extrabold'>Digital Engineering Tech</h3>
          <p className='text-[3vh] text-green-600 '>Use Smart Devices To Become Smart Life</p>
        </div>
     </ div>

    </div>
  )
}

export default LoginContent