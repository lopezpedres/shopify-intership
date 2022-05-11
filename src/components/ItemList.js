
import { getItems } from '../utils/itemsHandler';
import Item from './Item'

const ItemsList = () => {
  const items = getItems()
  items.sort((a, b) => { return new Date(a.createdAt) - new Date (b.createdAt)});
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