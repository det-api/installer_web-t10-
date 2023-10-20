import React from 'react'
import FaceBook from '../access/images/facebook-176-svgrepo-com.svg'
import Web from '../access/images/web-svgrepo-com.svg';

function Footer() {
  return (
      <div className=' fixed  shadow-2xl bottom-0 shadow-black  bg-primary-color drop-shadow w-[100%]   h-[60px] flex items-center justify-center gap-5 '>
          <a href='https://www.facebook.com/snzdeg/'>
          <img src={FaceBook} className='w-[40px] cursor-pointer  ' alt='facebook' />
          </a>
        
          <a href='https://www.digitalengineeringtech.com/'>
           <img src={Web} className='w-[55px] cursor-pointer  ' alt='web' />
          </a>
    </div>
  )
}

export default Footer