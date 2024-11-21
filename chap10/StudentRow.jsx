import React from 'react'

function StudentRow({student}) {
    //console.log('student.id', key)
  return (
    <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.gender}</td>
    </tr>
  )
}

export default StudentRow