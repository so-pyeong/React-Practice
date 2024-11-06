import React, { useState } from 'react'
//import Toolbar from './Toolbar'
import Toolbar2 from './Toolbar2'

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = () => {
        setIsLoggedIn(true)
    }
    const onClickLogout = () => {
        setIsLoggedIn(false)
    }

  return (
    <div>
        <Toolbar2
            isLoggedIn={isLoggedIn}
            onClickLogin={onClickLogin}
            onClickLogout={onClickLogout}
        />
        <div style={{padding: 16}}>소플과 함께하는 리액트 공부!-2024/11/06</div>
    </div>
  )
}

export default LandingPage