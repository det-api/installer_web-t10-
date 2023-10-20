import React from 'react'
import { LoginContainerProps } from '../types/LoginContainer.types';

const LoginContainer:React.FC<LoginContainerProps> = ({children}) => {
  return ( 
      <div className=' bg-primary-color'>
          <div className='container   mx-auto'>
              <div className='bg-[#323842] animate-zoom rounded-full w-[250px] left-[-50px]  top-[-20px] h-[250px] absolute'></div>
              <div className='bg-[#323842]  animate-zoom rounded-full w-[100px] left-[180px]  top-[160px] h-[100px] absolute'></div>
              <div className='flex gap-[20px]     h-[100svh]  items-center justify-between '>
                  {children}
              </div>
          </div>
      </div>
  )
};

export default LoginContainer