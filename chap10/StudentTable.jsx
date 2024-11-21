import React from 'react'

function StudentTable() {

    const students = [
        {id: 1, name: "홍길동", email: "hong@sample.com", gender: "m"},
        {id: 2, name: "강감찬", email: "kang@sample.com", gender: "m"},
        {id: 3, name: "홍마리아", email: "maria@sample.com", gender: "f"},
    ]
    
    const studentRow = students.map((student)=>(
    <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.gender}</td>
        </tr>))

  return (
    <div>
        <h2>학생정보</h2>
        <table border='1'>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>성별</th>
                </tr>
            </thead>
            <tbody>
                {studentRow}
            </tbody>
        </table>
    </div>
  )
}

export default StudentTable