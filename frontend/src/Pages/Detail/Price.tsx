import React from 'react'

const Price = ({data}: {data:number}) => {
  return (
    <div >
      <span className='text-xl font-semibold'>${data}</span>
      <span className='text-sm text-gray-600'>/gece</span>

    </div>
  )
}

export default Price
