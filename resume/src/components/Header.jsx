import React from 'react'
import log from '../assets/log.png'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-blue-200 h-screen flex justify-between '>
      <div className='flex flex-col  justify-center items-center space-y-40 '>
        <div className='flex flex-col text-7xl space-y-4 pl-0 absolute top-40'>
          <div>
            <h1>Build You Own </h1>
          </div>
          <div>
            <h1>Resume &</h1>
          </div>
          <div>
            <h1>Optimize with AI</h1>
          </div>
          
        </div>
        <div className=' pl-14 ml-5 text-2xl pt-16 mt-10 flex items-center justify-center relative top-30 left-16'>
          <h2 className='pl-10 ml-5'>Only 2% of resumes win. Yours will be one of them. Let´s build you a resume that works.</h2>
        </div>
        <div className='flex space-x-20 w-full justify-center text-2xl '>
          <NavLink to='/template' className='bg-blue-700 border-blue-800 border-4 hover:bg-blue-800  rounded-4xl px-8 p-4'>
            <button className='hover:bg-blue-800 text-white'>Create Resume</button>
          </NavLink>
          <div className='bg-blue-700  border-blue-800 hover:bg-blue-800 border-4 rounded-4xl px-8 p-4 text-white'>
            <a className='hover'>  <button>Upload Resume</button></a> 
          </div>
        </div>
      </div>
      <div className='justify-center  items-center pt-10 pr-20'>
        <img className='h-10/12 pr-12 ' src={log} alt="" />
      </div>
    </div>
  )
}

export default Header