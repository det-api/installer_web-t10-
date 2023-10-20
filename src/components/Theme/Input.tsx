import React from 'react'
import { InputProps } from '../../types/Input.types'

const Input:React.FC<InputProps> = ({value,setVlaue,title,label,type='string'})=> {
  return (
    <div className=''>
      {
        label && <>
        <label className=' text-slate-200  text-[16px] font-light' htmlFor={`html ${title}`}>{title}</label>
        <br/>
        </>
    } 
      
      <input type={type} className='border-[1px] border-[#e1e1e1] rounded mb-2 mt-5 p-2 w-[100%]' placeholder={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVlaue(e.target.value)} id={`html ${title}`} name="fav_language" value={value} />
  </div>
  )
}

export default Input