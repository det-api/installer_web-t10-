import React, { useEffect, useState } from 'react'
import HeadCap from '../components/HeadCap'
import DropDown from '../components/Theme/DropDown';
import Button from '../components/Theme/Button';
import NozzleDrop from '../components/Theme/NozzleDrop';
import FuelType from '../components/Theme/FuelType';
import DevicesTable from '../components/Tables/Devices.tables';
import useTokenStorage from '../utils/useDecrypt';
import UseGet from '../services/hooks/UseGet';
import Loading from '../components/Theme/Loading';
import { FcInfo } from "react-icons/fc";
import UsePost from '../services/hooks/UsePost';
import UseDelete from '../services/hooks/UseDelete';

function Devices() {
  const [token, setToken] = useState<string>('none');
  const [dispenserNo, setDispenserNo] = useState<string>('none');
  const [nozzleNo,setNozzleNo] = useState<string>('none');
  const [fuelType, setFuelType] = useState<string>('none');
  const [valid, setValid] = useState<boolean>(false);
  const [okData, setOkData] = useState([]);

  const { loadToken } = useTokenStorage();
  const [{ data_g, loading_g, error_g }, fetchItGet] = UseGet();
  const [{ data_d, loading_d, error_d }, deleteIt] = UseDelete();
  const [{ data, loading, error }, fetchIt] = UsePost();

  useEffect(() => { 
    const token = loadToken();
    if (token) {
      setToken(token);
    } 
    fetchItGet('device', token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data_g) {
      setOkData(data_g);

    }
  }, [data_g,loading_g,error_g]);


  const handleAdd = () => {
    if (nozzleNo === 'none' || dispenserNo === "none" || fuelType === "none") {
      setValid(true);
    } else {
      setValid(false);
      const user = {
      dep_no: dispenserNo,
      nozzle_no: nozzleNo,
      fuel_type: fuelType
      };
      fetchIt('device', user,token);
    }
  };

  useEffect(() => {
    if (data.con === true) {
      setDispenserNo('none');
      setNozzleNo('none');
      setFuelType('none');
      fetchItGet('device', token);

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading, error]);

  useEffect(() => {
    if (data_d?.con) {
      setOkData([]);
    }
  }, [data_d, loading_d, error_d]);
  
  const handleReset = () => { 
     deleteIt('device',token)
  };


  return (
    <>
      {
        loading && <Loading/>
      }
     <div className=' bg-primary-color min-h-[100svh] pb-[100px]'>
          <HeadCap title='Devices' />
          <div className='container mx-auto '>
          <div className='pt-[50px] flex-wrap gap-5 flex justify-between'>
             <DropDown value={dispenserNo} setValue={setDispenserNo}/>
             <NozzleDrop value={nozzleNo} setValue={setNozzleNo} />
             <FuelType value={fuelType} setValue={setFuelType}/>
          </div>
          {
            valid && <p className=' font-bold text-red-600  uppercase flex items-center  gap-3 text-[3vh] mt-[20px] mb-[20px]'><FcInfo/> Information Needs!</p>
          }
           <div className='flex gap-[50px] justify-between mt-[50px]'>
                 
                  <Button
                      onClick={handleAdd}
                      title='Add'
                      color="bg-green-600"
                      width='w-[120px]'
                      height='h-[40px]'
                      padding="p-3"
            />
             <Button
                      onClick={handleReset}
                      title='Reset'
                      color="bg-red-600"
                      width='w-[120px]'
                      height='h-[40px]'
                      padding="p-3"
                  />
              </div>
             <DevicesTable data={okData}/> 
         </div>
    </div>
    </>
  )
}

export default Devices