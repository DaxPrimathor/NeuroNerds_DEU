import React from 'react'
import { FaHome, FaBell,FaSignOutAlt } from 'react-icons/fa'; // from Font Awesome

const Dashboard = () => {
  return (
    <div className='bg-black w-[100%] h-screen'>
       <br/>
        <div className="grid h-56 grid-cols-3 content-start gap-4 ... pl-25 pr-25"> 
          <div >
            <h1 className='text-cyan-500 text-3xl font-bold'>RoboSocial</h1>
          </div>  
          <div>
            <input type="text" placeholder='Search robots, posts' className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400 text-white' />
          </div>  
         
          <div className='place-content-around flex'>
            <FaBell className="text-cyan-400" />
            <FaSignOutAlt className="text-cyan-400" />
          </div>
        </div>
        <div className="grid h-56 grid-cols-4 content-start gap-2 ... pl-25 pr-95 "> 
          <button className="text-white border border-white px-2 py-2 rounded hover:bg-white hover:text-black transition"><FaHome className="text-white content-center" />Dashboard</button>
          <button className="text-white border border-white px-2 py-2 rounded hover:bg-white hover:text-black transition">Social Panel</button>
          <button className="text-white border border-white px-2 py-2 rounded hover:bg-white hover:text-black transition">Robot Networks</button>
          <button className="text-white border border-white px-2 py-2 rounded hover:bg-white hover:text-black transition">Analytics</button>
        </div>

         {/*4 column start*/}
        <div className="grid h-56 grid-cols-4 content-start gap-6 ... pl-25 pr-25">
            <div className='border border-cyan-500 rounded-md p-5'>
              <h3 className='text-white text-left'>Total Robots</h3>
              <label className='text-cyan-500 text-2xl  text-left'>15,247</label>
                <div className="w-full bg-gray-200 rounded-full h-2  overflow-hidden">
                <div className="bg-cyan-500 h-full transition-all duration-500" style={{ width: '60%' }}></div>
                </div>
            </div>
            <div className='border border-cyan-500 rounded-md p-5'>
              <h3 className='text-white text-left'>System Health</h3>
              <label className='text-cyan-500 text-2xl  text-left'>15,247</label>
              <div className="w-full bg-gray-200 rounded-full h-2  overflow-hidden">
                <div className="bg-cyan-500 h-full transition-all duration-500" style={{ width: '80%' }}></div>
                </div>
            </div>
            <div className='border border-cyan-500 rounded-md p-5'>
              <h3 className='text-white text-left'>Avg Battery</h3>
              <label className='text-cyan-500 text-2xl text-left'>15,247</label>
              <div className="w-full bg-gray-200 rounded-full h-2  overflow-hidden">
                <div className="bg-cyan-500 h-full transition-all duration-500" style={{ width: '90%' }}></div>
                </div>
            </div>
            <div className='border border-cyan-500 rounded-md p-5'>
              <h3 className='text-white text-left'>Interactions</h3>
              <label className='text-cyan-500 text-2xl  text-left'>15,247</label>
              <div className="w-full bg-gray-200 rounded-full h-2  overflow-hidden">
                <div className="bg-cyan-500 h-full transition-all duration-500" style={{ width: '40%' }}></div>
                </div>
            </div>
          </div>
           {/*4 column end*/}

           {/*2 column start*/}
            <div className="grid h-56 grid-cols-2 content-start gap-6 ... pl-25 pr-25">
            <div className='border border-cyan-500 rounded-md p-5'>
              <h3 className='text-white text-left'></h3>
              <label className='text-cyan-500 text-2xl  text-left'>15,247</label>
                <div className="w-full bg-gray-200 rounded-full h-2  overflow-hidden">
                <div className="bg-cyan-500 h-full transition-all duration-500" style={{ width: '60%' }}></div>
                </div>
            </div>

             <div className='border border-cyan-500 rounded-md p-5'>
              <h3 className='text-white text-left'></h3>
              <label className='text-cyan-500 text-2xl  text-left'>15,247</label>
                <div className="w-full bg-gray-200 rounded-full h-2  overflow-hidden">
                <div className="bg-cyan-500 h-full transition-all duration-500" style={{ width: '60%' }}></div>
                </div>
            </div>
           {/*2 column end*/}
            </div>
          {/*2 column start*/}
            <div className="grid h-56 grid-cols-2 content-start gap-6 ... pl-25 pr-25">
            <div className='border border-cyan-500 rounded-md p-5'>
              <h5 className='text-white text-left'></h5>
              <label className='text-cyan-500 text-2xl  text-left'>15,247</label>
                <div className="w-full bg-gray-200 rounded-full h-2  overflow-hidden">
                <div className="bg-cyan-500 h-full transition-all duration-500" style={{ width: '60%' }}></div>
                </div>
            </div>

             <div className='border border-cyan-500 rounded-md p-5'>
              <h5 className='text-white text-left'></h5>
              <label className='text-cyan-500 text-2xl  text-left'>15,247</label>
                <div className="w-full bg-gray-200 rounded-full h-2  overflow-hidden">
                <div className="bg-cyan-500 h-full transition-all duration-500" style={{ width: '60%' }}></div>
                </div>
            </div>
            
            </div>
            {/*2 column end*/}

        
      
    </div>
  )
}

export default Dashboard