import React, { useEffect, useState } from 'react'
import useTokenStorage from '../../utils/useDecrypt';
import UseCloudGet from '../../services/hooks/UseCloudGet';

function StationDrop({value,setValue}:{value:any,setValue:any}) {

  const [{ data_gc, loading_gc, error_gc }, getToCloud] = UseCloudGet();
  const { loadToken } = useTokenStorage();
  const [okData, setOkData] = useState([]);


  useEffect(() => {
    const token = loadToken();
    if (token) {
      getToCloud('station-detail/1', token);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data_gc.result) {
      setOkData(data_gc.result);
    }
  }, [data_gc, loading_gc, error_gc]);
  

  return (
   <div className=' w-[200px]'>
      <label className=' text-slate-200  '>Station No</label>
      <select value={value} onChange={(e)=>setValue(e.target.value)} name="languages" id="lang" className=' mt-4 h-[45px] rounded-md p-2 px-1 w-[100%]'>
        <option value="none">none</option>
        {
          okData?.map((obj:any, index) => (
            <option key={`ke_${index}`} value={obj._id}>{obj.name}</option>
          ))
        }
      </select>
  </div>
  )
}

export default StationDrop