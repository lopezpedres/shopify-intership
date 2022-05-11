import {createContext, useReducer} from 'react';
import itemsReducer from './itemsReducer';



const ItemsContext = createContext();
const ItemsProvider = ({children}) => {
    const [items, dispatch] = useReducer(itemsReducer, []);
    return (
        <ItemsContext.Provider value={{items, dispatch}}>
            {children}
        </ItemsContext.Provider>
    )
}

export {ItemsContext, ItemsProvider};