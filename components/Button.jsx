import React from "react";

//2.앨리먼트이름정의(대문자로시작한다.파일명과 동일해야한다.)
function Button(props){
    return (
        //한개의노드로리턴되어야한다.
        <div>
            <button className = {`bg-${props.color}`}>
                <b>{props.children}</b>
            </button>
        </div>
    )
}

//3.앨리먼트내보내기
export default Button;

