import React from "react"
import { useState } from "react";

export default function Box({ size, color, id, name }) {

  const style = {
    width: `100%`,
    height: `${size}px`,
    backgroundColor: `${color}`,
    color: 'white',
    borderRadius: '5px',
    marginBottom: '5px',
    cursor: 'pointer',
    fontWeight: 700
  }



  return (
    <>
      <p className="hide-on-desktop"><b style={{color: color, fontSize:'12px'}}>{name}</b></p>
      <div
        style={style}
        id={id}
        className={`flex justify-center items-center box `}>
        <p className="hide-on-mobile">
          {name}
        </p>
      </div>
    </>
  )
}
