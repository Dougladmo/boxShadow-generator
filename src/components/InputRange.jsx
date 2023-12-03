import React from 'react'

const InputRange = ({text, handleOnChange, value, min, max}) => {
  return (
    <div className='flex flex-col mb-3 gap-5'>
          <label className='ml-1'>
            {text}
          </label>
          <div className='flex gap-5'>
            <input className='w-36' type="range" name={value} id={value} min={min} max={max} onChange={handleOnChange} />
            <p><span className='border-2 border-black p-1 px-3 mr-2'>{value}</span>px</p>
          </div>
    </div>
  )
}

export default InputRange