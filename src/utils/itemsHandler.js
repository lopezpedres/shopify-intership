
import { fetcher } from './fetcher';



export const getItems = ( items,dispatch) => {
    if (!items.lenght) {
        const itemsInCache = localStorage.getItem('items')
        if (itemsInCache) {
            console.log("Items found in cache:"+itemsInCache)
            dispatch({ type: 'SET_ITEMS', payload: JSON.parse(itemsInCache) })
            console.log("Items set in cache")
        }else{
            console.log("There are no items in cache")
            return null
        }
    } else {
        return items
    }


}

export const setItems = async (prompt) => {
    if (prompt) {
        const data = await fetcher(prompt)
        console.log(data)
        const newItem = {
            id: data.id,
            createdAt: new Date().toISOString(),
            prompt,
            model: data.model,
            object: data.object,
            output: data.choices[0].text,
            
        }
        return newItem
    }


}

let counter = 1
export const setPlacebo = async (prompt) => {
    if (prompt) {
        let newItem = {
            id: counter,
            createdAt: new Date().toISOString(),
            prompt:`This is a test ${counter}`,
            model: "This is a model test",
            object: "This is an object test",
            output: "This is an output test This is an output tesThis is an output test This is an output testt This is an output test This is an output test",
            
        }
        counter = counter+1
        return newItem
    }


}