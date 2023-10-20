import React, { useEffect, useState } from 'react'
import TitleOne from './Theme/TitleOne'
import Input from './Theme/Input'
import Button from './Theme/Button';
import useLogin from '../services/hooks/UseLogin';
import Loading from './Theme/Loading';
import { useNavigate } from "react-router-dom";
import useTokenStorage from '../utils/useDecrypt';

function LoginForm() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [need, setNeed] = useState(false);
  const [uError, setUError] = useState(false);
  const navigate = useNavigate();


  const [{ data, loading, error }, fetchData] = useLogin();
  const {saveToken} = useTokenStorage();

  const handleClick = () => { 
    if (user.email.length === 0 || user.password.length === 0) {
      setNeed(true);
    } else {
      setNeed(false);
      fetchData('user/login', user);
    }
  };

  useEffect(() => {
    if (error) {
      setUError(true);
    } else {
      setUError(false);
    }

    if (data.token) {
      console.log(data.token);
      saveToken(data.token);
      navigate("/home");
      setUser({ email: '', password: '' });

    }

  }, [data, loading, error,saveToken,navigate]);
  



  return ( 
    <>
      {
      loading && <Loading/>
      }
     <div className='w-[50%] animate-top'>
     <div className='  bg-[#ffffff] rounded-md  w-[430px] drop-shadow shadow-black  border-[#b3b3b3]  p-5'>
        <TitleOne title='credentials' />
        {
          need && <p className=' text-red-500'>Credentials are need!</p>
        }
        {
          uError && <p className=' text-red-500 font-bold'>Something Went Wrong!</p>
        }
        <form className='mb-2'>
          <Input title='Email' value={user.email} setVlaue={(e) => setUser((prev) => ({ ...prev, email: e }))} label={false} />
          <Input type="password" title='Password' value={user.password} setVlaue={(e) => setUser((prev) => ({ ...prev, password: e }))} label={false} />
        </form>
        <Button
          onClick={handleClick}
          height='h-[40px]'
          width='w-[150px]'
          color=' text-gray-200'
          padding=''
          title='Access' />
    </div>
   </div>
    </>
  )
}

export default LoginForm