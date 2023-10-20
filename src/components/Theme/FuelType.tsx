import React from 'react'
import { DropDownProps } from '../../types/DropDown.types'

const FuelType:React.FC<DropDownProps> = ({setValue,value})=> {
  return (
    <div className=' w-[200px]' >
      <label className=' text-slate-200 '>Fuel Type</label>
      <select value={value} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setValue(e.target.value)} name="languages" id="lang" className=' mt-4 h-[45px] rounded-md p-2 px-1 w-[100%]'>
        <option value="none">None</option>
        <option value="001-Octane Ron(92)">001-Octane Ron(92)</option>
        <option value="002-Octane Ron(95)">002-Octane Ron(95)</option>
        <option value="004-Diesel">004-Diesel</option>
        <option value="005-Diesel">005-Diesel</option>
      </select>
  </div>
  )
}

export default FuelType