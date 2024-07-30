import { useQueryClient } from '@tanstack/react-query'
import React from 'react'

const Error = ({info, name}: {info:string, name:string}) => {
  // kurulum (tekrar dene butonuna basinca tekrar api istegi atilmasi icin )
 const queryClient = useQueryClient()

 // places sorgusunu tekrar calistiracak fonksiyonu yaziyoruz 
 // invalidateQueries daha önce useQuery ile tanımladığımız bir sorguyu tekrardan tetiklemek için kullandığımız fonksiyon
 const retry = ()=>{
  queryClient.invalidateQueries({queryKey:[name]})
 }

  return (
    <div>
    <div className='flex flex-col justify-center items-center gap-3 my-14 bg-red-500 rounded-md p-5 text-white font-semibold'>
      <span>Üzgünüz bir sorun oluştu</span>
      <span>{info}</span>
    </div>

    <div className='flex justify-center'>
    <button onClick={retry} className='border py-2 px-4 rounded-md hover:bg-gray-300'>Tekrar Dene</button>
    </div>

    </div>
  )
}

export default Error
