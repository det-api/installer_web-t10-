import React, { useEffect, useState } from 'react'
import HeadCap from '../components/HeadCap'
import StationDrop from '../components/Theme/StationDrop'
import NozzleDrop from '../components/Theme/NozzleDrop'
import Button from '../components/Theme/Button'
import TankDrop from '../components/Theme/TankDrop'
import FuelType from '../components/Theme/FuelType'
import Input from '../components/Theme/Input'
import TanksTable from '../components/Tables/Tanks.tables'
import { FcInfo } from "react-icons/fc";
import UseGet from '../services/hooks/UseGet'
import UseDelete from '../services/hooks/UseDelete'
import UsePost from '../services/hooks/UsePost'
import useTokenStorage from '../utils/useDecrypt'
import Loading from '../components/Theme/Loading'


const Tank = ()=> {
  const [capacity, setCapacity] = useState('');
  const [stationId, setStationId] = useState('');
  const [opening, setOpening] = useState('');
  const [fuelType, setFuelType] = useState('none');
  const [tankNo, setTankNo] = useState('none');
  const [nozzle1, setNozzle1] = useState('none');
  const [nozzle2, setNozzle2] = useState('none');
  const [nozzle3, setNozzle3] = useState('none');
  const [nozzle4, setNozzle4] = useState('none');
  const [nozzle5, setNozzle5] = useState('none');
  const [nozzle6, setNozzle6] = useState('none');
  const [nozzle7, setNozzle7] = useState('none');
  const [nozzle8, setNozzle8] = useState('none');
  const [nozzle9, setNozzle9] = useState('none');
  const [nozzle10, setNozzle10] = useState('none');
  const [valid, setValid] = useState(false);
  const [token, setToken] = useState('');
  const [okData, setOkData] = useState([]);
  const [load, setLoad] = useState(false);
  const [nozzle, setNozzle] = useState<any>([]);
  const [include, setInclude] = useState(false);

  const [{ data_g, loading_g, error_g }, fetchItGet] = UseGet();
  const [{ data_d, loading_d, error_d }, deleteIt] = UseDelete();
  const [{ data, loading, error }, fetchIt] = UsePost();

  const { loadToken } = useTokenStorage();


  useEffect(() => {
    const token = loadToken();
    if (token) {
    setToken(token);
    }
    fetchItGet('fuel-balance/all', token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAdd = () => {
    if (capacity === '' || opening === '' || tankNo === 'none' || fuelType === "none" || nozzle1 === "none") {
      setValid(true);
    } else {
      setValid(false);


      if (nozzle.includes(nozzle1) || nozzle.includes(nozzle2) || nozzle.includes(nozzle3) || nozzle.includes(nozzle4) || nozzle.includes(nozzle5) || nozzle.includes(nozzle6) || nozzle.includes(nozzle7) || nozzle.includes(nozzle8) || nozzle.includes(nozzle9) || nozzle.includes(nozzle10)) {
        setInclude(true);
      } else {
        setInclude(false);
       const formData = new FormData();
          formData.append("capacity", capacity);
          formData.append("opening", opening);
          formData.append("tankNo", tankNo);
          formData.append("fuelType", fuelType);
          formData.append("nozzles", nozzle1);
          formData.append("nozzles", nozzle2);
          formData.append("stationId",stationId);
          
          
          nozzle3 !== 'none' && formData.append('nozzles',nozzle3);
          nozzle4 !== 'none' && formData.append('nozzles', nozzle4);
          nozzle5 !== 'none' && formData.append('nozzles', nozzle5);
          nozzle6 !== 'none' && formData.append('nozzles', nozzle6);
          nozzle7 !== 'none' && formData.append('nozzles', nozzle7);
          nozzle8 !== 'none' && formData.append('nozzles', nozzle8);
          nozzle9 !== 'none' && formData.append('nozzles', nozzle9);
          nozzle10 !== 'none' && formData.append('nozzles', nozzle10);
          // /fuel-balance
          fetchIt('fuel-balance',formData, token);


     }
         
    }
  };

  const handleReset = () => {
    deleteIt('fuel-balance',token);
  };

  

  useEffect(() => { 
    console.log("******");
    console.log(data_g, loading_g, error_g);
    console.log("******");


    setOkData(data_g);
 data_g.forEach((e: any) => {
  setNozzle((prevNozzles: any) => {
    const uniqueNozzles = e.nozzles.filter((newNozzle: string[]) => {
      // Check if the nozzle doesn't already exist in the previous nozzles array
      return !prevNozzles.some((prevNozzle: string[]) => {
        return JSON.stringify(prevNozzle) === JSON.stringify(newNozzle);
      });
    });
 
    // Push only the unique new nozzles that do not already exist
    return [...prevNozzles, ...uniqueNozzles];
  });
 });
    
    setLoad(loading_g);
  }, [data_g, loading_g, error_g]);

  useEffect(() => {
    console.log(nozzle)
  },[nozzle])
  
  useEffect(() => { 
    if (data?.con) {
      fetchItGet('fuel-balance/all', token);
      setCapacity('');
      setOpening('');
      setStationId('');
      setTankNo('none');
      setFuelType('none');
      setNozzle1('none');
      setNozzle2('none');
      setNozzle3('none');
      setNozzle4('none');
      setNozzle5('none');
      setNozzle6('none');
      setNozzle7('none');
      setNozzle8('none');
      setNozzle9('none');
      setNozzle10('none');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading, error]);

  useEffect(() => { 
    if (data_d?.con) {
      fetchItGet('fuel-balance/all', token);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data_d, loading_d, error_d]);
  
 
  return (
    <>
      {
        load && <Loading/>
      }
       <div className=' bg-primary-color min-h-[100svh] pb-[100px]'>
      <HeadCap title='Add Tank' />
      <div className='container mx-auto'>
      <div className='flex items-start pt-[30px]   justify-center gap-[100px]'>
         <div className='pt-[50px] pb-5 rounded-md bg-slate-700 p-5   w-[50%] flex-wrap gap-5 flex justify-between'>
        <div className='w-[200px]'>
          <Input value={capacity} label={true} setVlaue={setCapacity} title='Tank Capacity' />
        </div>
        <div className='w-[200px]'>
          <Input value={opening} label={true} setVlaue={setOpening} title='Opening' />
        </div>
          <StationDrop  value={stationId} setValue={setStationId} />
          <TankDrop value={tankNo} setValue={setTankNo} />
          <FuelType value={fuelType} setValue={setFuelType} />
           
          </div>
          <div className=' bg-slate-700 drop-shadow rounded-md p-5  w-[50%] pb-5 flex-wrap gap-5 flex justify-between'>
          <NozzleDrop title='1' value={nozzle1} setValue={setNozzle1} />
          <NozzleDrop title='2' value={nozzle2} setValue={setNozzle2}/>
          <NozzleDrop title='3' value={nozzle3} setValue={setNozzle3}/>
          <NozzleDrop title='4' value={nozzle4} setValue={setNozzle4}/>
          <NozzleDrop title='5' value={nozzle5} setValue={setNozzle5}/>
          <NozzleDrop title='6' value={nozzle6} setValue={setNozzle6}/>
          <NozzleDrop title='7' value={nozzle7} setValue={setNozzle7}/>
          <NozzleDrop title='8' value={nozzle8} setValue={setNozzle8}/>
          <NozzleDrop title='9' value={nozzle9} setValue={setNozzle9}/>
          <NozzleDrop title='10' value={nozzle10} setValue={setNozzle10}/>
          </div>
          </div>
          {
            include? <p className=' text-[24px] text-red-500 font-bold my-3'>One of the nozzles is already connected to the tank!</p>:""
          }
        
        {
            valid && <p className=' font-bold text-red-600  uppercase flex items-center  gap-3 text-[3vh] mt-[20px] mb-[20px]'><FcInfo/> Information Needs!</p>
          }
          <div className='flex gap-5'> 
          <Button
                      onClick={handleReset}
                      title='Reset'
                      color="bg-red-600"
                      width='w-[120px]'
                      height='h-[40px]'
                      padding="p-3"
            />
          <Button
                      onClick={handleAdd}
                      title='Add'
                      color="bg-green-600"
                      width='w-[120px]'
                      height='h-[40px]'
                      padding="p-3"
            />
        </div>
          <TanksTable okData={okData} />
      </div>
     
    </div>
    </>
  )
}

export default Tank