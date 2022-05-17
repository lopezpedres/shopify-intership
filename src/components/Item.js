import React, { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Item = ({ item }) => {
  const { dispatch } = useContext(ItemsContext)
  const deleteHandler = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId })
  }

  const sliderHandler = (activeIndex,itemId) => {
    if (activeIndex!==1) {

      deleteHandler(itemId)
    }
  }
  return (
    <li className='max-w-lg mx-auto '>
      <Swiper onSlideChange={({activeIndex}) => sliderHandler(activeIndex,item.id)} initialSlide={1} className='.mySwiper'>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide className=' container grid grid-cols-8 group mx-auto rounded-md shadow-2xl mb-10'>
          <div className='col-span-1 grid place-items-center group-hover:text-xl rounded-md  gradient font-bold text-white'>
            <button className='lg:hidden group-hover:block m-4 ' onClick={ () => deleteHandler(item.id) }>X</button>
          </div>
          <div className='col-span-7 p-4 rounded-md bg-white ml-auto '>
            <h1 className='text-lg md:text-xl font-rubik font-bold mb-4'>{ item.prompt }</h1>
            <p className='md:text-3xl text-xl font-rubik'>
              { item.output }
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </li>
  )
}

export default Item