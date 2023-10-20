import React from 'react'
import { menuSlide, slide } from '../access/animation/anime';
import {motion} from 'framer-motion';
import CurveSvg from './Theme/CurveSvg';
import { Link } from 'react-router-dom';
import useTokenStorage from '../utils/useDecrypt';

function Nav() {

  const {clearToken} = useTokenStorage();


interface NavItem {
  href: string;
  title: string;
}

    const navItems: NavItem[] = [
    { href: '/devices', title: 'Devices' },
    { href: '/tank', title: 'Tank' },
    { href: '/totalizer', title: 'Totalizer' },
    { href: '/manager', title: 'Manager' },
    { href: '/cashier', title: 'Cashier' },
    { href: '/role', title: 'Role' },
    { href: '/', title: 'Log Out' },
    ];
  
  const handleLogout = () => {
    clearToken();
  };

  return (
      <motion.div
          variants={menuSlide}
          animate="enter"
          exit='exit'
          initial="initial"
          className='fixed z-20  bg-blue-700 select-none h-[100svh] left-0 top-[60px]'>
          <div className=' px-[90px] py-[40px] justify-between flex '>
              <div>
                  <div className='flex text-white flex-col text-[5vh] gap-[12px] mt-[80px]'>
                      <p className=' text-[18px] mb-4 border-b-[1px] border-slate-400'>Add</p>
        {navItems.map((item,index) => ( 
            <motion.div
             custom={index}
             variants={slide}
             initial="initial"
             animate="enter"
             exit='exit'
             key={item.href} className="nav-item">
          <Link className='hover:underline duration-300' onClick={item.href === '/' ? handleLogout : () => {}}  to={item.href}>{item.title}</Link>
        </motion.div>
      ))}
                  </div>
              </div>
          </div>
          <CurveSvg/>
    </motion.div>
  )
}

export default Nav