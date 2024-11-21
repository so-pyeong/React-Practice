import React, { useState } from 'react'

function NameForm() {
    const [value, setValue] = useState('');
    const [valueTa, setValueTa] = useState('요청사항을 입력해주세요');

    const handleChange = (event) => {
        setValue(event.target.value.toUpperCase());
    }

    const handleSubmit = (event) => {
        alert(`사용자 이름: ${value}`);
        event.preventDefault();
    }
    
    const handleTaChange = (event) => {
        setValueTa(event.target.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                이름:
                <input type='text' value={value} onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>
                요청사항: 
                <textarea value={valueTa} onChange={handleTaChange}/>
                </label>
            </div>
            <button type='submit'>제출</button>
        </form>
    </div>
  )
}

export default NameForm