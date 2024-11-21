import React from 'react'
import Dialog from './Dialog'

function WelcomeDialog() {
  return (
    <div>
        <Dialog color='#aaee33'
        title='어서오세요.'
        message='우리 사이트에 방문하신 것을 환영합니다.'/>
        
        <Dialog color='#aa3333'
        title='경고!'
        message='잡담하지 마세요.'/>
    </div>
  )
}

export default WelcomeDialog