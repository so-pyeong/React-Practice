import React from 'react'

function ListItems(props) {
    const {items} = props;

    const listTtems = items.map((item)=><li key={item.id}>{item.name}</li>)

  return (
    <div>
        <ul>{listTtems}</ul>
    </div>
  )
}

export default ListItems