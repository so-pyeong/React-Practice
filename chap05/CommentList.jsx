import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
    <div>
        <Comment name={"홍길동"} comment={"안녕하세요, 첫 프롭스 코드입니다"} />
        <Comment name={"소핑구"} comment={"리액트는 매주 수요일 수업입니다."} />
        <Comment name={"킹세종"} comment={"리액트 수업에서는 주로 JSX파일을 사용해요."} />
    </div>
    );
}

export default CommentList;
