import React from 'react'

function ListItem2() {
//과일 요소를 담은 리스트 선언
//["apple","banana", "cherry"]
    const fruits = [
        { id: 1, name:"apple" },
        { id: 2, name:"banana" },
        { id: 3, name:"cherry" }
    ]
    
    const listItems = fruits.map((fruit)=>(<li key={fruit.id}>{fruit.name}</li>));

  return (
    <div>
        <ul>{listItems}</ul>
    </div>
  )
}

export default ListItem2