import React from 'react'
import { Place } from '../../types'
import Availability from './Availability';

const Card = ({place}: {place:Place}) => {
  console.log(place);
  
  return (
    <div className='border rounded-md cursor-pointer p-4 gap-3 min-h-[300px] grid grid-cols-6'>
     
     <div className='col-span-2'>
        <img src={place.image_url} alt="room"  className='w-full h-full object-cover rounded-lg' />
     </div>

     <div className='col-span-4'>
       <div className='flex justify-between items-center'>
       <h1 className='text-xl font-semibold'>{place.name}</h1>
       <Availability status={place.availability} />
       </div>
        <div>
        <p>{place.location}</p>
        <p  className='flex gap-2'>{place.amenities.slice(0,2).map((i,key) =>(
           <span className='border p-2 rounded-md'
            key={key}>{i}</span>))}</p>
        </div>
     </div>
    </div>
  )
}

export default Card
