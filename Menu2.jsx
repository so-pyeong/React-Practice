import React from "react";

function Menu2(props) {
    return (
        <div style={{
            border: '1px solid',
            borderRadius: '10px',
            backgroundColor: 'lightblue',
            padding: '20px',
            width: '400px',
            height: '150px',
            textAlign: 'center',
            margin: '20px 0'
        }}>
            <h1>{props.menu}</h1>
            <p><h2>{props.price}원</h2></p>
        </div>
    );
}

export default Menu2;
