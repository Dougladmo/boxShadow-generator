import React from 'react'
import Form from './components/Form'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div id='header' className='w-full bg-indigo-800'>
        <h1 id='title' className='text-white text-center text-3xl py-5'>Box-Shadow Generator</h1>
      </div>
      <div id='main' className='w-full flex justify-center items-center'>
        <Form/>
      </div>
      <div id='footer' className='w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default App