import React from 'react'

const InputColor = ({ handleOnChange, value, text }) => {
  return (
    <div>
        <label className='flex items-center gap-5 ml-1'>
            {text}
            <span className='border-2 border-black p-1 px-2 mr-2'>{value}</span>
        </label>
        <input className='h-10 p-1 border-2 border-blue-800 rounded-lg mt-2' type="color" onChange={handleOnChange} />
    </div>
  )
}

export default InputColor