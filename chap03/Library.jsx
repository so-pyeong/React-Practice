//리액트 컴포넌트 만드는 과정
//1. React 컴포넌트 불러오기(import)
import React from "react";
import Book from "./Book";

//2. 컴포넌트 함수 또는 클래스 정의 -> 파일이름(반드시 대문자로 파일이름 지정)과 동일하게 한다.
function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}></Book>
            <Book name="처음 만난 AWS" numOfPage={400}></Book>
            <Book name="처음 만난 리액트" numOfPage={500}></Book>
        </div>
    )
}


//3. 컴포넌트 내보내기
export default Library;