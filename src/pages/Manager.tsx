import React, { useEffect, useState } from 'react'
import HeadCap from '../components/HeadCap'
import StationDrop from '../components/Theme/StationDrop'
import Input from '../components/Theme/Input'
import Button from '../components/Theme/Button';
import { FcInfo } from "react-icons/fc";
import UsePost from '../services/hooks/UsePost';
import useTokenStorage from '../utils/useDecrypt';
import UseCloudPost from '../services/hooks/UseCloudPost';
import Loading from '../components/Theme/Loading';


function Manager() {
    const [cCode, setCCode] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [ComPassword, setComPassword] = useState('');
    const [valid, setValid] = useState(false);
    const [success,setSuccess] = useState(false);
    const [load, setLoad] = useState(false);
    const [stationNo, setStationNo] = useState('');
    const [stationId, setStationId] = useState('none');
  
        
    const [{ data, loading, error }, fetchIt] = UsePost();
    const [{ data_c_post, loading_c_post, error_c_post }, postToCloud] = UseCloudPost();
    const { loadToken } = useTokenStorage();
        

     
    const handleClick = () => {
            if (cCode === '' || name === '' || phone === '' || password === '' || ComPassword === '') {
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
           postToCloud('temp/new',{email:name,password:password},token) 
                }
            }
    };
        
   
  useEffect(() => {
    const interval = setInterval(() => {
        setSuccess(false);
    }, 2000); // Update the values every second

    return () => {
      clearInterval(interval);
    };
    }, [success]);
         
        
   useEffect(() => {
   setLoad(loading_c_post);
   console.log(error);
   if(data.con && data_c_post.con){
    setCCode('');
    setName('');
    setPhone('');
    setPassword('');
    setComPassword('');
    setStationNo(''); 
    setSuccess(true);
   };
   
   },[data, loading, error,error_c_post,data_c_post,loading_c_post]);
    
  return (
          <>
        {
                load && <Loading/>
        }
      <div className=' bg-primary-color h-[100svh] '>
          <HeadCap title='Manager' />
          <div className='container mx-auto  h-[80%] flex flex-col justify-center items-center'>
              <h3 className=' text-[4vh] mb-[20px] text-slate-200 font-extralight'>Add A Manager</h3>
         {
            valid && <p className=' font-bold text-red-600  uppercase flex items-center  gap-3 text-[3vh] mt-[10px] mb-[20px]'><FcInfo/> Information Needs!</p>
          }
         {
            success && <p className=' font-bold text-green-600  uppercase flex items-center  gap-3 text-[3vh] mt-[10px] mb-[20px]'><FcInfo/>Success!</p>
          }
              <div className='pb-[50px] max-w-[500px] flex-wrap gap-5 flex justify-between'>
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
                        <Input value={password} setVlaue={setPassword} label={true} title='Password More than 6'/>
                </div>
                <div className='w-[200px]'>
                        <Input value={ComPassword} setVlaue={setComPassword} label={true} title='Compare Password '/>
                </div>
                <div className='w-[200px]'>
                        <Input value={stationNo} setVlaue={setStationNo} label={true} title='Station No'/>
                </div>
              </div>
                 <div className='flex gap-3'>
                  <Button
                      onClick={handleClick}
                      title='Register'
                      color="bg-green-600"
                      width='w-[200px]'
                      height='h-[50px]'
                      padding="p-3"
                  />
              </div>
              </div>
    </div>
     </>
  )
}

export default Manager