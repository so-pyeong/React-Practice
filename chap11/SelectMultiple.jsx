import React, { useState } from 'react'
//교재 29페이지 참고
function SelectMultiple() {
    const [values, setValues] = useState([])
    
    const handelChange = (e)=>{
        //배열명.map()
        const selectedOptions = [...e.target.selectedOptions].map(
            (option)=>(option.value))
        setValues(selectedOptions)
    }
    const handleSubmit = (e)=>{
        alert(`좋아하는 과일 : ${values}`)
        e.preventDefault()
    }

  return (
    <div>
        <h3>좋아하는 과일 선택</h3>
        <form onSubmit={handleSubmit}>
        좋아하는 과일 :
        <select multiple={true} value={values} onChange={handelChange}>
            <option value='apple'>사과</option>
            <option value='banana'>바나나</option>
            <option value='grape'>포도</option>
            <option value='watermelon'>수박</option>
        </select>
        <button type='submit'>제출</button>
        </form>
        <div>
        <h4>좋아하는 과일은</h4>
        <ul>
            {values.map((value)=>(<li key={value}>{value}</li>))}
        </ul>
        </div>
    </div>
  )
}

export default SelectMultiple