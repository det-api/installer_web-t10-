import React from 'react'

function DevicesTable({data}:{data:any}) {
  return (
   <table className=' w-[100%] text-white mt-[6%]'>
  <tr>
    <th className='w-[25%]'>No</th>
    <th className='w-[25%]'>Dispenser No</th>
    <th className='w-[25%]'>Nozzle No</th>
    <th className='w-[25%]'>Fuel Type</th>
  </tr>
  {
  data.map((e:any,index:any)=>(
  <tr key={`kdkd_${index}`}>
    <th className='w-[25%]'>{index}</th>
    <th className='w-[25%]'>{e.dep_no}</th>
    <th className='w-[25%]'>{e.nozzle_no}</th>
    <th className='w-[25%]'>{e.fuel_type}</th>
  </tr>
  )
  )      
  }
</table>
  )
}

export default DevicesTable