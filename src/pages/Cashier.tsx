import React, { useEffect, useState } from 'react'
import HeadCap from '../components/HeadCap';
import StationDrop from '../components/Theme/StationDrop';
import Input from '../components/Theme/Input';
import Button from '../components/Theme/Button';
import UsePost from '../services/hooks/UsePost';
import useTokenStorage from '../utils/useDecrypt';
import { FcInfo } from "react-icons/fc";


function Cashier() {
  const [cCode, setCCode] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [ComPassword, setComPassword] = useState('');
    const [valid,setValid] = useState(false);
    const [success,setSuccess] = useState(false);
    const [stationId, setStationId] = useState('none');
    const [stationNo, setStationNo] = useState('');
  
    
    
    
    const [{ data, loading, error }, fetchIt] = UsePost();
    const { loadToken } = useTokenStorage();
    
    const handleClick = () => {
      if (cCode === '' || name === '' || phone === '' || password === '' || ComPassword === '') {
               console.log("kdk")
                setValid(true);
            } else {
                setValid(false);
                const token = loadToken();
                if (token) {
                 const managerObj = {
                name: cCode,
                email: name,
                phone: phone,
                password: password,
                comparePassword: ComPassword,
                stationNo: stationNo,
                stationId: stationId,
            };
           fetchIt('user/register', managerObj, token); 
                }
            }
    };
        
  useEffect(() => {

        if(data.con){
        setCCode('');
        setName('');
        setPhone('');
        setPassword('');
        setComPassword('');     
        setSuccess(true);  
        setStationNo('');



        }
    },[ data, loading, error]);
    

  useEffect(() => {
    const interval = setInterval(() => {
        setSuccess(false);
    }, 2000); // Update the values every second

    return () => {
      clearInterval(interval);
    };
    }, [success]);
    
  return (
      <div className=' bg-primary-color h-[100svh] '>
          <HeadCap title='Cashier' />
          <div className='container mx-auto  h-[80%] flex flex-col justify-center items-center'>
             <h3 className=' text-[4vh] text-slate-200 font-extralight'>Add A Cashier</h3>
         {
            valid && <p className=' font-bold text-red-600  uppercase flex items-center  gap-3 text-[3vh] mt-[10px] mb-[20px]'><FcInfo/> Information Needs!</p>
          }
         {
            success && <p className=' font-bold text-green-600  uppercase flex items-center  gap-3 text-[3vh] mt-[10px] mb-[20px]'><FcInfo/>Success!</p>
          }
              <div className='py-[50px] max-w-[500px] flex-wrap gap-5 flex justify-between'>
                  <StationDrop value={stationId} setValue={setStationId} />
                <div className='w-[200px]'>
                        <Input value={cCode} setVlaue={setCCode} label={true} title='Cashier Code'/>
                </div>
                <div className='w-[200px]'>
                        <Input value={name} setVlaue={setName} label={true} title='Name'/>
                </div>
                <div className='w-[200px]'>
                        <Input value={phone} setVlaue={setPhone} label={true} title='Phone'/>
                </div>
                <div className='w-[200px]'>
                        <Input value={password} setVlaue={setPassword} label={true} title='Password'/>
                </div>
                <div className='w-[200px]'>
                        <Input value={ComPassword} setVlaue={setComPassword} label={true} title='Compare Password'/>
                </div>
                <div className='w-[200px]'>
                        <Input value={stationNo} setVlaue={setStationNo} label={true} title='Station No'/>
                </div>
              </div>
                 <div className='flex gap-3'>
                  <button
                  className={`h-[50px] flex items-center justify-center cursor-pointer rounded  w-[200px] p-3 bg-green-600`}
                      onClick={handleClick}
                      // title='Register'
                      // color="bg-green-600"
                      // width='w-[200px]'
                      // height='h-[50px]'
                      // padding="p-3"
                  >Register</button>
              </div>
              </div>
    </div>
  )
}

export default Cashier