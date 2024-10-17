import React from "react";
import Button from "./Button";

//2.앨리먼트이름정의(대문자로시작한다.파일명과 동일해야한다.)
function ConfirmDialog(props){
    return (
        //한개의노드로리턴되어야한다.
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요</p>
            <Button color='green'>확인</Button>
        </div>
    )
}

//3.앨리먼트내보내기
export default ConfirmDialog;

