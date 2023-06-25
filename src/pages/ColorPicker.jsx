import React, { useEffect, useState } from 'react'
import { SketchPicker } from 'react-color'

const ColorPicker = () => {
  const [currentColor,setCurrentColor] = useState("#fff");
  const handleChange = (color)=>{
    console.log(color.hex)
    setCurrentColor(color.hex)
  }
  const appStyle = {
    backgroundColor: currentColor,
    height:"100vh",
    width:"100%",
    textAlign:"center",
    
  }
  return (
    <div className='' style={appStyle}>
      <h1 className='font-bold text-3xl'>Color Picker App</h1>
      <SketchPicker
        className='absolute top-[30%] left-[50%] '
        color={currentColor}
        onChangeComplete={handleChange}
      />
      <input  className='' type="text" value={currentColor} />
    </div>
  )
}

export default ColorPicker