import React, { useState } from 'react'
import Card from './Card'

function App() {
    const [cards, setCards] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleAddCard =()=>{
        if(!title || !content){
            alert("제목과 내용을 입력해주세요.")
            return
        }
        const newCard = {
            title: title,
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            content: content,
        }

        setCards([...cards, newCard]);
        setTitle("");
        setContent("");
    }
//할일 삭제 함수
    const handleDeleteCard = (index)=>{
        setCards(cards.filter((_, i) => i !== index));
    }

  return (
    <div style={{padding: 16}}>
        <h1>할 일 추가하기</h1>
        <div style={{marginBottom: 16}}>
            <input
            type='text'
            placeholder='제목을 입력하세요'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            style={{
                marginRight: 8,
                padding: 8,
                border: "1px solid #ccc",
                borderRadius: 4,
            }} />

            <input
            type='text'
            placeholder='내용을 입력하세요'
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            style={{
                marginRight: 8,
                padding: 8,
                border: "1px solid #ccc",
                borderRadius: 4,
            }} />

            <button
            onClick={handleAddCard}
            style={{
                padding: 8,
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                }} >
                    할일 추가
            </button>
        </div>

        <div>
            {cards.map((card, index) => (
                <Card
                key={index}
                title={card.title}
                backgroundColor={card.backgroundColor}>
                    <p>{card.content}</p>
                    <button
                onClick={() => handleDeleteCard(index)}
                style={{
                    backgroundColor: '#ff4d4d',
                    color: 'white',
                    border: 'none',
                    borderRadius: 4,
                    padding: '4px 8px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                }}
                >
                삭제
                </button>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default App