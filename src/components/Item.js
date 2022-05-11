import React from 'react'

const Item = ({ item }) => {
  return (
    <li>
      <div className='  gradient max-w-lg mx-auto rounded-md shadow-2xl'>
        <span className='absolute ml-7 font-bold text-white my-32'>
          <a href='#'>X</a>
        </span>
        <div className=' mb-16 p-4  max-w-md rounded-md bg-white ml-auto '>
          <h1 className='text-xl font-rubik font-bold'>{ item.prompt }</h1>
          <p className='text-3xl font-rubik'>
            { item.output }
          </p>
        </div>
      </div>
    </li>
  )
}

export default Item