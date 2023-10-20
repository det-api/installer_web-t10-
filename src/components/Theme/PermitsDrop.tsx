/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import UseGet from '../../services/hooks/UseGet'
import useTokenStorage from '../../utils/useDecrypt';
import {PermitsProps} from '../../types/Permit.types';


const PermitsDrop:React.FC<PermitsProps> = ({value,setValue}) => {

  const [{ data_g, loading_g, error_g }, fetchItGet] = UseGet();
  const { loadToken } = useTokenStorage();
  const [okData, setOkData] = useState([]);

  useEffect(() => { 
    const token = loadToken();
    if (token) {
      fetchItGet('/permit',token);
    }
  }, []);

  useEffect(() => {
    setOkData(data_g);
    console.log(data_g)
  }, [data_g, loading_g, error_g]);
    
    

  return (
    <div className='w-[200px]'>
      <label  className='text-slate-200'>Permits</label>
      <select value={value} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setValue(e.target.value)} name="languages" id="lang" className='mt-4 h-[45px] rounded-md p-2 px-1 w-[100%]'>
        <option value="None">None</option>
        {
          okData?.map((e: any, index: any) => (
            <option value={e._id}>{e.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default PermitsDrop