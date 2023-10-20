import React, { useEffect } from 'react'
import HomeBanner from '../components/HomeBanner'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import useTokenStorage from '../utils/useDecrypt'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { loadToken } = useTokenStorage();
  const navigate = useNavigate();

  
  useEffect(() => {
    const token = loadToken();

    if (!token) {
      navigate('/'); 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
      <div className=' bg-primary-color'>
          <Header />
        <Navigation/>
          <HomeBanner />
        <Footer/>
    </div>
  )
}

export default Home