import React from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div id='header' className='w-full'>
        <Header />
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