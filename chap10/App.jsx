import React from 'react'
import StudentTable2 from './StudentTable2'

const students = [
    {id: 1, name: "홍길동", email: "hong@sample.com", gender: "m"},
    {id: 2, name: "강감찬", email: "kang@sample.com", gender: "m"},
    {id: 3, name: "홍마리아", email: "maria@sample.com", gender: "f"},
]

function App() {
  return (
    <div>
        <h1>학생 정보 리스트</h1>
        <StudentTable2 students = {students}/>
    </div>
  )
}

export default App