import React, { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext';
import Item from './Item'

const ItemsList = () => {
  const { items, dispatch } = useContext(ItemsContext);
  console.log(items)
  return (
    <div className='m-16'>
      <ul>
        { items &&
          items.map(item => (
            <Item key={ item.id } item={ item } />
          )) }
      </ul>
    </div>
  )
}

export default ItemsList