import React, {useRef, useState} from 'react'

function UseRef02() {
    const countRef = useRef(0)
    const [cnt, setCnt] = useState(0)
    var count = 0
    console.log("컴포넌트 호출 재렌더링...");

    const increase = ()=>{
        //useRef 훅 함수는 컴포넌트 상태값을 저장하지만, 상태값이 바뀌어도 렌더링이 되지 않는다.
        countRef.current = countRef.current + 1;
        console.log(`countRef: ${countRef.current}`)
        //useRef 상태값이 10의 배수일 경우 useState 상태값을 갱신시켜서 화면 출력
        if(!(countRef.current % 10)) setCnt(cnt+countRef.current)
    }

    const increaseCnt=()=>{
        setCnt(cnt+1)
        console.log(`cnt: ${cnt}`)
    }

  return (
    <div>
        <p>useRef 변수: {countRef.current}</p>
        <button onClick={increase}>클릭</button>
        <p>cntState 변수: {cnt}</p>
        <button onClick={increaseCnt}>CntUp</button>
    </div>
  )
}

export default UseRef02