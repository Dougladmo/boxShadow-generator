import React from 'react'

const SubmitButton = ({text}) => {
  return (
    <button className='h-14 w-24 text-white bg-blue-800 rounded-xl border-2 border-blue-800 hover:bg-transparent hover:text-blue-800 transition duration-300'>
        {text}
    </button>
  )
}

export default SubmitButton