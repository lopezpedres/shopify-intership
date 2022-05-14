

const itemsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            return [...state.filter(item => item.id !== action.payload)];
        case 'SET_ITEMS':
            return [...state,...action.payload];
        default:
            return state
    }
}

export default itemsReducer