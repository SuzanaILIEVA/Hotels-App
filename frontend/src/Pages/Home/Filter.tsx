import React from 'react'
import {cityOpt, sortOpt} from "../../constants"
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
  const [params, setParams] = useSearchParams()

  const handleChange = (name:string , value: string) => {
    params.set(name, value)

    setParams(params)
  }

  return (
    <form className='lg:mt-28 flex flex-col gap-4 lg:gap-10'>
      <div className='flex flex-col gap-2'>
        <label className='font-bold'> Nereye?</label>

        <select onChange={(e) => handleChange("location" , e.target.value)} className='border py-1 rounded-md px-4' >
          <option value="" >Seçiniz</option>
          {cityOpt.map((i,key) => (
            <option key={key} value={i.value}>{i.label}</option>
          ))}
        </select>
      </div>

      <div className='flex flex-col gap-2'>
        <label className='font-bold'> Konaklama yeri adına göre ara</label>

       <input
       onChange={(e) => handleChange("title" , e.target.value)}
       type="text"
       placeholder='ör: Seaside Villa' 
       className='border py-1 px-4 rounded-md'/>
      </div>

      <div className='flex flex-col gap-2'>
        <label className='font-bold'>Sıralama Ölçütü</label>

        <select 
        onChange={(e) => handleChange("order", e.target.value)}
        className='border py-1 rounded-md px-4' >
          <option value="" >Seçiniz</option>
          {sortOpt.map((i,key) => (
            <option value={i.value} key={key }>{i.label}</option>
          ))}
        </select>
      </div>

      <div className='flex justify-end mt-5'>
        <button onClick={()=>setParams({})} type='reset' className='bg-blue-500 text-white py-2 px-4 font-semibold rounded-md w-fit'>Filtreleri Temizle</button>
      </div>
      
     
    </form>
  )
}

export default Filter
