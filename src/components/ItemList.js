
import { useCallback, useContext, useEffect, useRef } from 'react';
import { ItemsContext } from '../context/ItemsContext';
import { getItems } from '../utils/itemsHandler';
import Item from './Item'

const ItemsList = () => {
  const { items, dispatch } = useContext(ItemsContext);
  const getItemsInCache = useRef(()=>{});

   getItemsInCache.current = useCallback(() => {
    if (!items.lenght) {
      console.log("Looking for items is cache...")
      getItems(items,dispatch)
    }
    
  }, [items,dispatch])

// Check if there are items in cache and save them in the itemsContext state 
  useEffect(() => {
    getItemsInCache.current()
  }, [])

  //Set items in cache when page is loaded
  useEffect(() => {
      console.log("Adding  items to cache...")
      localStorage.setItem('items', JSON.stringify(items))
  }, [items])
  
  items.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt) });
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