import React from 'react'
import ListItems from './ListItems'

const fruits = [
    { id: 1, name:"apple" },
    { id: 2, name:"banana" },
    { id: 3, name:"cherry" }
]

const numbers = [
    { id: 1, name:"one" },
    { id: 2, name:"two" },
    { id: 3, name:"three"}
];

const students = [
    { id: 1, name: "Inje"},
    { id: 2, name: "Steve"},
    { id: 3, name: "Bill"},
    { id: 4, name: "Jeff"}
]

function ListRender() {
  return (
    <div>
        <h2>숫자</h2>
        <ListItems items={numbers}/>
        <h2>과일</h2>
        <ListItems items={fruits}/>
        <h2>학생명단</h2>
        <ListItems items={students}/>
    </div>
  )
}

export default ListRender