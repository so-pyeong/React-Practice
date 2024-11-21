import React from 'react'

function FancyBorder(props) {
  return (
    <div style={{border:'1px solid gray',
    padding:'8px',
    backgroundColor: props.color || 'cyan'}}>
    {props.children}
    </div>
  )
}

export default FancyBorder