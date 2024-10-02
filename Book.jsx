//리액트 컴포넌트 만드는 과정
//1. React 컴포넌트 불러오기(import)
import React from "react";


//2. 컴포넌트 함수 또는 클래스 정의 -> 파일이름(반드시 대문자로 파일이름 지정)과 동일하게 한다.
function Book(props) {
    return (
        <div>
            <h1>이 책의 이름은 {props.name}입니다.</h1>
            <h3>{`이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다.`}</h3>
        </div>

        //템플릿문자열 console.log("반가워요." + name)
        //console.log(`반가워요 ${name}`)

    )
}


//3. 컴포넌트 내보내기
export default Book;