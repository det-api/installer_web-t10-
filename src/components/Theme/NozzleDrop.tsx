import React from 'react'
import { NozzleProps } from '../../types/Nozzle.types'

const NozzleDrop:React.FC<NozzleProps> = ({full,setValue,value,title="No"}) =>{
  return (
   <div className={`${full? "w-full ":"w-[200px]"}`}>
      <label className=' text-slate-200  '>No.{title}</label>
      <select value={value} onChange={(e)=>setValue(e.target.value)} name="languages" id="lang" className=' mt-4 h-[45px] rounded-md p-2 px-1 w-[100%]'>
        <option value="none">None</option>
        <option className=' bg-red-400 text-red-300 ' value="01">Nozzle 01</option>
        <option value="02">Nozzle 02</option>
        <option value="03">Nozzle 03</option>
        <option value="04">Nozzle 04</option>
        <option value="05">Nozzle 05</option>
        <option value="06">Nozzle 06</option>
        <option value="07">Nozzle 07</option>
        <option value="08">Nozzle 08</option>
        <option value="09">Nozzle 09</option>
        <option value="10">Nozzle 10</option>
        <option value="11">Nozzle 11</option>
        <option value="12">Nozzle 12</option>
        <option value="13">Nozzle 13</option>
        <option value="14">Nozzle 14</option>
        <option value="15">Nozzle 15</option>
        <option value="16">Nozzle 16</option>
        <option value="17">Nozzle 17</option>
        <option value="18">Nozzle 18</option>
        <option value="19">Nozzle 19</option>
        <option value="20">Nozzle 20</option>
        <option value="21">Nozzle 21</option>
        <option value="22">Nozzle 22</option>
        <option value="23">Nozzle 23</option>
        <option value="24">Nozzle 24</option>
        <option value="25">Nozzle 25</option>
        <option value="26">Nozzle 26</option>
        <option value="27">Nozzle 27</option>
        <option value="28">Nozzle 28</option>
        <option value="29">Nozzle 29</option>
        <option value="30">Nozzle 30</option>
        <option value="31">Nozzle 31</option>
        <option value="32">Nozzle 32</option>
      </select>
  </div>
  )
}

export default NozzleDrop