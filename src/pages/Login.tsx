import React from 'react'
import LoginContainer from '../components/LoginContainer'
import LoginForm from '../components/LoginForm'
import LoginContent from '../components/LoginContent'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Login() {
  return (
    <>
      <Header/>
      <LoginContainer>
       <LoginContent/>
       <LoginForm/>
      </LoginContainer>
      <Footer/>
    </>
  )
}

export default Login