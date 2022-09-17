import React from 'react'
import Item from './Item'
//import Item from`./Item`

const ItemList = ({data}) => {
  console.log({data})
    return (<>
     <div className='d-flex justify-content-around text-center row ' id='itemList'>
      {
        data.map(item => (
          <Item key={item.id} id={item.id} title={item.title} imagen={item.imagen} marca={item.marca} precio={item.precio}categoria={item.category}
          />
        ))}
    </div>
  </>)
}

export default ItemList