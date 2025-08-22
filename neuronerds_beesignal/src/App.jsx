import React from 'react'
import Login from './Components/Login'

const App = () => {
  return (
    <div className='grid w-[100%] h-screen place-items-center bg-cover bg-center bg-repeat'
    style={{ backgroundImage: "url('/bg.png')" }}>
      <div>
      <p className='text-cyan-500 text-center text-2xl'>NeuroNerds</p>
      <p className='text-white text-center font-medium'>The Future Of Robot Social Connection</p>
      </div>
      
      <Login/>
      <div className='font-small text-center text-white'>NeuroNerds v0.0.1 - Connecting the future</div>
    </div>
  )
}

export default App