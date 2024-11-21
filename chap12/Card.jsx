import React from 'react'

function Card({title, backgroundColor, children}) {
  return (
    <div style={{
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
        boxShadow: "0px 2px 4px grey",
        backgroundColor: backgroundColor || "white",
    }}>
        {title && <h1>{title}</h1>}
        {children}
    </div>
  )
}

export default Card