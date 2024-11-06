import React, { useState } from 'react';

function Toolbar2(props) {
    const styles = {
        wrapper: {
            padding: 16,
            display: "flex",
            flexDirection: "row",
            borderBottom: "1px solid grey",
            alignItems: "center"
        },
        greeting: {
            marginRight: 8,
        },
        button: {
            padding: "5px 10px",
            cursor: "pointer",
        },
    }

    const { isLoggedIn, onClickLogin, onClickLogout } = props;
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const correctId = "admin";
    const correctPwd = "1234";

    const handleLogin = () => {
        if (id === correctId && pwd === correctPwd) {
            onClickLogin();
        } else {
            alert("아이디와 비밀번호가 일치하지 않습니다.");
            setId("");
            setPwd("");   
        }
    }

    const handleLogout = () => {
        setId("");
        setPwd("");
        onClickLogout();
    }

    return (
        <div style={styles.wrapper}>
            {/* 로그인 상태에 따라 다르게 표시 */}
            {isLoggedIn ? (
                <>
                    <span style={styles.greeting}>환영합니다, {id}님!</span>
                    <button style={styles.button} onClick={handleLogout}>로그아웃</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="아이디"
                    />
                    <input
                        type="password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        placeholder="비밀번호"
                    />
                    <button onClick={handleLogin}>로그인</button>
                </>
            )}
        </div>
    );
}

export default Toolbar2;
