import React from 'react'
import { HeadCapProps } from '../types/HeadCap';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const  HeadCap:React.FC<HeadCapProps> = ({title}) => {
  return (
      <div className=' h-[65px] bg-primary-color  relative  w-[100%] flex justify-center items-center  shadow-lg'>
          <Link className='absolute left-[20px]' to='/home '>
           <HiOutlineArrowNarrowLeft className=' text-slate-300 cursor-pointer  ' size={30} />
          </Link>
          <p className='text-slate-200 text-[3vh] font-extralight'>
              <Link to='/home '>Home</Link>  /  {title}
          </p>
    </div>
  )
}

export default HeadCap