import React, { useEffect, useState } from 'react'
import HeadCap from '../components/HeadCap'
import StationDrop from '../components/Theme/StationDrop'
import FuelType from '../components/Theme/FuelType'
import NozzleDrop from '../components/Theme/NozzleDrop'
import Input from '../components/Theme/Input'
import Button from '../components/Theme/Button'
import TotalizerTable from '../components/Tables/Totalizer.tables'
import { FcInfo } from "react-icons/fc";
import UseGet from '../services/hooks/UseGet'
import UseDelete from '../services/hooks/UseDelete'
import UsePost from '../services/hooks/UsePost'
import useTokenStorage from '../utils/useDecrypt'


function Totalizer() {

    const [totalizerAmount, setTotalizerAmount] = useState('');
    const [totalizerLiter, setTotalizerLiter] = useState('');
    const [fuelType,setFuelType] = useState('none');
    const [nozzleNo,setNozzleNo] = useState('none');
    const [stationId,setStationId] = useState('none');
    const [token,setToken] = useState('');
    const [load,setLoad] = useState(false);
    const [valid, setValid] = useState(false);
    const [okData, setOkData] = useState([]);
    
    
  
  const [{ data_g, loading_g, error_g }, fetchItGet] = UseGet();
  const [{ data_d, loading_d, error_d }, deleteIt] = UseDelete();
  const [{ data, loading, error }, fetchIt] = UsePost();

  const { loadToken } = useTokenStorage();
    
  useEffect(() => {
  const token = loadToken();
    if (token) {
      setToken(token);
      fetchItGet('detail-sale/pagi/1',token);
    }
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  
  const handleClick = () => {
    if (totalizerAmount === '' || totalizerLiter === '' || fuelType === 'none' || nozzleNo === '') {
      setValid(true);
    } else {
      setValid(false);
    const formData = new FormData();
      formData.append('stationDetailId','64ce8b0c26c645b891eed1e8');
      formData.append('vehicleType','Car');
      formData.append('fuelType',fuelType);
      formData.append('vocono','037/c1/test/36');
      formData.append('nozzleNo',nozzleNo);
      formData.append('saleLiter','0');
      formData.append('totalizer_amount',totalizerAmount);
      formData.append('totalizer_liter',totalizerLiter);
      formData.append('totalPrice','0');
      formData.append('casherCode','m1');
      formData.append('asyncAlready','2');
      formData.append('device','tablet');
      formData.append('carNo', 'car/1test');
      
      fetchIt('detail-sale/initial',formData, token);
    }
  
  }; 

  const handleDelete = (id: string) => {
    deleteIt(`detail-sale?_id=${id}`,token);
  };

  useEffect(() => { 
    setOkData(data_g);
    setLoad(loading_g);
  }, [data_g, loading_g, error_g]);

  useEffect(() => { 
    if (data?.con) {
      fetchItGet('detail-sale/pagi/1', token);
      setTotalizerAmount('none');
      setTotalizerLiter('none');
      setStationId('none');
      setFuelType('none');
      setNozzleNo('none');
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading, error]);

  useEffect(() => { 
    console.groupCollapsed(data_d);
    if (data_d?.con) {
    fetchItGet('detail-sale/pagi/1',token);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data_d, loading_d, error_d]);

  return (
      <div className=' bg-primary-color pb-[100px] min-h-[100svh]'>
          <HeadCap title='Totalizer' />
          <div className='container mx-auto'>
          <div className='pt-[50px] pb-5 flex-wrap gap-5 flex justify-between'>
             <div className='w-[200px]'>
                   <Input value={totalizerAmount} setVlaue={setTotalizerAmount} label={true} title='Totalizer Amount'/>
             </div>
             <div className='w-[200px]'>
                   <Input value={totalizerLiter} setVlaue={setTotalizerLiter} label={true} title='Totalizer Liter'/>
             </div>
             <StationDrop value={stationId} setValue={setStationId}/>
             <FuelType value={fuelType} setValue={setFuelType}/>
             <NozzleDrop value={nozzleNo} setValue={setNozzleNo}/>
        </div>
        {
            valid && <p className=' font-bold text-red-600  uppercase flex items-center  gap-3 text-[3vh] mt-[20px] mb-[20px]'><FcInfo/> Information Needs!</p>
          }
          <div>
              <Button
                      onClick={handleClick}
                      title='Add'
                      color="bg-green-600"
                      width='w-[120px]'
                      height='h-[40px]'
                      padding="p-3"
                  />
          </div>
        <TotalizerTable handleDelete={handleDelete} okData={okData} />
          </div>
    </div>
  )
}

export default Totalizer