import React from 'react'

const InputColor = ({ handleOnChange, value, text }) => {
  return (
    <div>
        <label className='flex items-center gap-5 ml-1'>
            {text}
            <span className='border-2 border-black p-1 px-2 mr-2'>{value}</span>
        </label>
        <input type="color" onChange={handleOnChange} />
    </div>
  )
}

export default InputColor