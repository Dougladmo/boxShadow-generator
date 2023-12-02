import React from 'react'

const InputRange = ({text, handleOnChange, value, min, max}) => {
  return (
    <div className='flex flex-col'>
          <label>
            {text}: {value}
          </label>
          <input className='w-36' type="range" name={value} id={value} min={min} max={max} onChange={handleOnChange} />
    </div>
  )
}

export default InputRange