import React from 'react'

function TanksTable({okData}:{okData:any[]}) {
  return (
   <table className=' w-[100%] text-white mt-[6%]'>
  <tr>
    <th className='w-[4%]'>No</th>
    <th className='w-[10%]'>Tank No</th>
    <th className='w-[20%]'>Fuel Type</th>
    <th className='w-[20%]'>Nozzles</th>    
    <th className='w-[19%]'>Capacity</th>
    <th className='w-[19%]'>Opening</th>
   
  </tr>
   {
    okData.map((e:any, index:any) => (
     <tr key={`key_${index}`}>
    <th className='w-[4%]'>{index}</th>
    <th className='w-[10%]'>{e.tankNo}</th>
    <th className='w-[20%]'>{e.fuelType}</th>
    <th className='w-[20%]'>{e.nozzles.map((nozzle:any) => nozzle.toString()).join(', ')}</th>
    <th className='w-[19%]'>{e.capacity}</th>
    <th className='w-[19%]'>{e.opening}</th>
  </tr> 
   ))   
   }
</table>
  )
}

export default TanksTable