import React, { useState } from 'react';

function TextLab() {
  // 상태 설정
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  // 이름 입력 변화 처리
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // 성별 선택 변화 처리
  const handleSelectChange = (event) => {
    setGender(event.target.value);
  };

  // 폼 제출 처리
  const handleSubmit = (event) => {
    event.preventDefault();
    // 제출 시 데이터를 콘솔에 출력하거나 다른 작업을 할 수 있습니다.
    alert(`이름: ${name}, 성별: ${gender}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          성별:
          <select value={gender} onChange={handleSelectChange}>
            <option value="">선택하세요</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
        </label>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default TextLab;
