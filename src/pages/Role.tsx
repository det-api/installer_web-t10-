import React, { useEffect, useState } from 'react'
import HeadCap from '../components/HeadCap'
import useTokenStorage from '../utils/useDecrypt';
import UseGet from '../services/hooks/UseGet';
import UseDelete from '../services/hooks/UseDelete';
import { AiOutlineArrowRight } from 'react-icons/ai';
import PermitsDrop from '../components/Theme/PermitsDrop';
import RolesDrop from '../components/Theme/RolesDrop';
import UsePatch from '../services/hooks/UsePatch';

function Role() {
  const [users, setUsers] = useState([]);
  const { loadToken } = useTokenStorage();
  const [active, setActive] = useState(0);
  const [userObj, setUserObj] = useState<any>([]);
  const [permitId, setPermitId] = useState('');
  const [roleId, setRoleId] = useState('');
  const [token, setToken] = useState('');


  const [{ data_g, loading_g, error_g }, fetchItGet] = UseGet();
  const [{ data_d, loading_d, error_d }] = UseDelete();
  const [{data_pch,loading_pch,error_pch},patchIt] = UsePatch();





  useEffect(() => {
    const token = loadToken();
    

    if (token) {
      setToken(token);
      fetchItGet('/user/admin',token);
    };
    // fetchItGet('user/admin',loadToken);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

    if (data_g.length !== 0) {
      setUserObj(data_g[active])
      setUsers(data_g);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data_g, loading_g, error_g]);

  useEffect(() => {
    console.log(error_pch);
    
    if (data_pch.con) {
      fetchItGet('/user/admin',token);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data_pch, loading_pch, error_pch]);

  useEffect(() => {
    console.log(data_d, loading_d, error_d);
  }, [data_d, loading_d, error_d]);

  const handleClick = (e: any, index: any) => { 
    setActive(index);
    setUserObj(e);
  };

  

  const handleRoleAdd = (obj:any) => {
    if (obj) {
      let data = new FormData();
      
      data.append('userId', obj._id);
      data.append('roleId',roleId);

      patchIt('user/add/role',data,token);
    }
  };

  const handlePermitAdd = (obj: any) => {
    if (obj) {
      let data = new FormData();
      data.append('userId', obj._id);
      data.append('permitId', permitId);

      patchIt('user/add/permit', data, token);
    }
  };

  const handleRoleDelete = (obj: any) => {
    if (obj) {
      let data = new FormData();


      data.append('userId', userObj._id);
      data.append('roleId', obj._id);
      patchIt('user/remove/role', data, token);
    }
  };

  const handlePermitDelete = (obj: any) => {
    if (obj) {
      let data = new FormData();
      data.append('userId', userObj._id);
      data.append('permitId', obj._id);
      patchIt('user/remove/permit', data, token);
    }
  }

  

  return (
    <div className=' bg-primary-color min-h-[100svh]'>
      <HeadCap title='Role' />
      <div className='container mx-auto p-5'>
      <div className='flex gap-4'>
      <div className=' w-[50%] bg-slate-700 p-3 rounded-md'>
          {
        users.map((e:any, index) => (
          <div onClick={()=>handleClick(e,index)} className={` hover:pb-3 my-3 group duration-500 flex justify-between items-center p-2 rounded cursor-pointer  w-full ${active === index ? 'bg-green-600':'bg-white'}`} key={`key_${index}`}>
          <div>
            <p>Name : <span className=' font-bold'>{e?.email}</span></p>
            <p>Station Id :<span className='font-bold'> {e?.stationId}</span></p>
            <p>Station No : <span className='font-bold'>{e?.stationNo}</span></p>
            </div>
            <AiOutlineArrowRight className=' duration-300 group-hover:mr-6' size={30}/>
          </div>
        ))
      } 
      </div>
      <div className='w-[50%] relative rounded-lg p-3 '>
       <div className=' sticky top-[10%] bg-gray-500 p-3 rounded-md  w-full'>
        <p>Cashier Code:  <span className=' font-bold text-2xl'>{userObj.name}</span></p>
              <p className='mt-3'>Phone:  <span className=' font-bold'>{userObj.phone}</span></p>
        <div className='mt-6'>
                <p className=' font-bold'>Roles</p>
                <RolesDrop value={roleId} setValue={setRoleId}/>
          <div className=' mt-2'>
          
            <button onClick={()=>handleRoleAdd(userObj)} className='p-2 w-[100px] mr-2 rounded bg-green-400 relative mt-3'>Add</button>
          </div>
          <div className='flex gap-2 mt-5'>
                  {
                     userObj?.roles?.map((e:any,index:any)=>(
              <button onClick={()=>handleRoleDelete(e)}  id={e._id}  key={`key_${index}`} className=' p-2 rounded bg-green-400 relative'>
              <p>{e.name}l</p>
              <div className=' h-[25px] w-[25px] flex items-center justify-center rounded-full absolute top-[-10px] bg-red-500 right-[-5px]'><p>x</p></div>
            </button>
              ))
             }
          
          </div>
        </div>
        <div className=' mt-6'>
          <p className='font-bold'>Permits</p>
           <div className=' mt-2'>
            <PermitsDrop value={permitId} setValue={setPermitId}/>
            <button className='p-2 w-[100px] rounded bg-green-400 relative mt-3' onClick={()=>handlePermitAdd(userObj)}>Add</button>
          </div>
          <div className='flex gap-2 mt-4'>
              {
              userObj?.permits?.map((e:any,index:any)=>(
              <button key={`key_${index}`} onClick={()=>handlePermitDelete(e)} className=' p-2 rounded bg-green-400 relative'>
              <p>{e.name}</p>
              <div className=' h-[25px] w-[25px] flex items-center justify-center rounded-full absolute top-[-10px] bg-red-500 right-[-5px]'><p>x</p></div>
            </button>
              ))
            }
          </div>
        </div>
        </div>     
      </div>
     </div>
     </div>
    </div>
  )
}

export default Role