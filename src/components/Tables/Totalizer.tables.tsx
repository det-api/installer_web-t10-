import React, { useEffect } from 'react'
import Button from '../Theme/Button'

function TotalizerTable({okData,handleDelete}:{okData:any[],handleDelete:(id:string)=>void}) {


  useEffect(() => {
    console.log(okData)
  },[okData])

  return (
    <table className=' w-[100%] text-white mt-[6%]'>
  <tr>
    <th className='w-[20%]'>No</th>
    <th className='w-[20%]'>Nozzle No</th>
    <th className='w-[20%]'>Totalizer Amount</th>
    <th className='w-[20%]'>Totalizer Liter</th>
    <th className='w-[20%]'>Buttons</th>
  </tr>
  {
      okData.map((e: any, index: any) => (
      <tr>
    <th className='w-[20%]'>{index}</th>
    <th className='w-[20%]'>{e.nozzleNo}</th>
    <th className='w-[20%]'>{e.totalizer_amount}</th>
    <th className='w-[20%]'>{e.totalizer_liter}</th>
    <th className='w-[20%]'>
    <Button
                      onClick={()=>handleDelete(e._id)}
                      title='Reset'
                      color="bg-red-600"
                      width='w-[100%]'
                      height='h-[40px]'
                      padding="p-3"
            />
    </th>
  </tr>
    ))
  }
  
</table>
  )
}

export default TotalizerTable