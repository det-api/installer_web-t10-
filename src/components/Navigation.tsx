import React, { useState } from 'react'
import Nav from './Nav';
import { AnimatePresence } from 'framer-motion';

function Navigation() {
    const [active, SetActive] = useState(false);
// 1877F2
  return (
      <>
       <div onClick={()=>SetActive(!active)} className='button_nav fixed z-40 cursor-pointer duration-300 flex items-center justify-center left-0 top-[60px] w-[80px] bg-green-600 h-[80px] rounded-full m-[20px]'>
          <div className={`burger_nav  ${active ? 'burger_active_nav' : ' '}`}></div>
          </div>
          <AnimatePresence mode='wait'>
        { 
              active &&  <Nav/>
        } 
         </AnimatePresence>
      </>
  )
}

export default Navigation