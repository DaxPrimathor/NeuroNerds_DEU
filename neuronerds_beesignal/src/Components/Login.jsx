import React, { useState } from 'react'

const Login = () => {

    const[isLoginMode,setIsLoginMode] = useState(true)
  return (
    <div className='w-[430px] bg-black p-8 rounded-2xl shadow-lg border-5 border-cyan-500'>
        {/* header */}
        <div className='flex justify-center mb-4 text-white'>
            <h2 className='text-3xl font-semibold text-center text-White'>{isLoginMode ? "Login" : "Sign Up"}</h2>
        </div>

        <div className='relative flex h-12 mb-6 border border-white rounded-full overflow-hidden'> 
            <button onClick={() => setIsLoginMode(true)}
                className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? 'text-black' : 'text-white'}`}
            > Login </button>
             <button onClick={() => setIsLoginMode(false)}
                className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? 'text-black' : 'text-white'}`}
            >Sign Up </button>
             {/* Sliding */}
            <div className={`absolute top-0 h-full  w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? 'left-0' : 'left-1/2'}`}>
            </div>
        </div>


       

        {/*Form Section */}
        <form className='space-y-4'>
            {
             !isLoginMode && (
                <input type="text" placeholder='Username' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 text-white' />
             )
              }

             {/*Same Fields */}
             <input type="email" placeholder='Email Address' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 text-white'/>
             

             {
             !isLoginMode && (
                <><input type="text" placeholder='Serial Number' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 text-white' />
                <input type="text" placeholder='Manufacture' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 text-white' /></>
             )
              }

               {/*Same Fields */}
             <input type="password" placeholder='Access Code' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 text-white'/>
              

              {
             !isLoginMode && (
               <input type="password" placeholder='Confirm Access Code' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 text-white'/>
             )
              }

              <button className='w-full p-3 bg-cyan-500 text-white rounded-full text-lg font-medium hover-opacity-90 transition'>
                {isLoginMode ? "Initialize Connection" : "Initialize Network Registration"}
              </button>

        </form>
    
    </div>
  )
}

export default Login