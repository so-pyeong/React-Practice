import React, { useState } from 'react';

function TextLab2() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [fruit, setFruit] = useState('');
  const [submittedData, setSubmittedData] = useState('null');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({name, gender, age, fruit})
  };

  return (
    <div>
      <h3>사용자 정보 입력</h3>
      <form onSubmit={handleSubmit}>
        <div>
        <label>이름:</label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div>
        <label>성별:</label>
        <label>
          <input
            type='radio'
            value='남성'
            checked={gender === '남성'}
            onChange={(e)=> setGender(e.target.value)}
          />
          남성
        </label>
        <label>
          <input
            type='radio'
            value='여성'
            checked={gender === '여성'}
            onChange={(e)=> setGender(e.target.value)}
          />
          여성
          </label>
        </div>
        <div>
        <label>나이:</label>
          <input
            type="number"
            value={age}
            onChange={(e)=> setAge(e.target.value)}
          />
        </div>
        <div>
        <label>좋아하는 과일:</label>
          <select 
            value={fruit} onChange={(e)=>setFruit(e.target.value)}>
            <option value='apple'>사과</option>
            <option value='banana'>바나나</option>
            <option value='cherry'>체리</option>
            <option value='watermelon'>수박</option>
        </select>
        </div>
        <button type="submit">제출</button>
      </form>

      {submittedData && (
        <div>
          <h3>입력한 사용자 정보</h3>
          <p>이름: {submittedData.name}</p>
          <p>성별: {submittedData.gender}</p>
          <p>나이: {submittedData.age}</p>
          <p>좋아하는 과일: {submittedData.fruit}</p>
        </div>
      )}
    </div>
  );
}

export default TextLab2;
