import React from 'react'
import StudentRow from './StudentRow'
import './TableStyle.css'

function StudentTable2({ students } ) {
    //const { students } = props
    //students.map() 함수 이용하여 <StudentRow student={student} />호출
    const studentItems = students.map((student)=>
    (<StudentRow key={student.id} student={student}/>))
  return (
    <div>
        <table className='student-table'>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>성별</th>
                </tr>
            </thead>
            <tbody>
                {studentItems}
                {console.log(studentItems)}
            </tbody>
        </table>
    </div>
  )
}

export default StudentTable2