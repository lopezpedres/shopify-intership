import React, { useContext } from 'react'
import { ItemsContext } from '../context/ItemsContext';


export const getItems = () => {
    const { items, dispatch } = useContext(ItemsContext);
    if (!items) {
        const itemsInCache = localStorage.getItem('items')
        if (itemsInCache) {
            dispatch({ type: 'SET_ITEMS', payload: JSON.parse(itemsInCache) })
            return items
        } else {
            return null
        }
    } else {
        return items
    }


}

export const setItems =()=>{
    
}