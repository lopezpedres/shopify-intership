import React, { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext'
//absolute ml-7 font-bold text-white my-32
const Item = ({ item }) => {
  const {dispatch} = useContext(ItemsContext)
  const deleteHandler = (itemId)=>{
    dispatch({type: 'REMOVE_ITEM', payload: itemId})
  }
  return (
    <li>
      <div className=' group md:gradient max-w-lg mx-auto rounded-md shadow-2xl'>
        <span className=' absolute  inline-block align-middle group-hover:text-xl font-bold text-white'>
          <button className='align-middle' onClick={()=>deleteHandler(item.id)}>X</button>
        </span>
        <div className=' mb-16 p-4  md:max-w-md rounded-md bg-white ml-auto '>
          <h1 className='text-lg md:text-xl font-rubik font-bold mb-4'>{ item.prompt }</h1>
          <p className='md:text-3xl text-xl font-rubik'>
            { item.output }
          </p>
        </div>
      </div>
    </li>
  )
}

export default Item