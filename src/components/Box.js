import React from "react"

export default function Box({size, color, id, name}) {

  const style = {
    width:`100%`, 
    height:`${size}px`, 
    backgroundColor:`${color}`,
    color: 'white',
    borderRadius: '5px',
    marginBottom: '5px',
    cursor: 'pointer',
    fontWeight: 700
  }



    return (
      <div style={style} id={id} className="flex justify-center items-center"><p>{name}</p></div>
    )
  }
  