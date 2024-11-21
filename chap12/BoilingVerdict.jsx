import React from 'react'

function BoilingVerdict(props) {
    if(props.celsius >= 100){
        return <p>물이 끓어요.</p>
    }
  return (
    <p>물이 끓지 않아요.</p>
  )
}

export default BoilingVerdict