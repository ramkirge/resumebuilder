import React from 'react'
import logo1 from '../assets/logo1.jpg'
import { FiUploadCloud } from "react-icons/fi";
import air from '../assets/air.png'


function Main() {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <div className='flex h-screen bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% w-full'>
            <div className='h-1/4 w-1/2 p-10'>
                <img className='h-160 ' src={logo1} alt="" />
            </div> 
            <div className='flex flex-col items-center justify-center relative right-0 w-1/2 text-black space-y-8 '>
                <div className='font-bold'>
                    <h1 className='text-4xl'>Custom Resume Maker</h1>
                    
                </div>
                <div className='text-2xl p- text-center'><h2>You can change the font styles, colors, and layout of your resume to stand out from the competition.</h2></div>
                <div className='bg-blue-700  top-20 w-fit  left-2/5 text-2xl   border-blue-800 hover:bg-blue-800 border-4 rounded-2xl px-8 p-4 text-white'>
                     <a className='hover'>  <button className='cursor-pointer'>Customize Resume Now</button></a> 
                </div>
                
            </div>   
        </div>
        <div className='h-screen w-full'>
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 w-full">
        {/* Left Panel - Mockup style, fully centered using flex */}
        <div className="relative bg-white rounded-3xl shadow-xl flex items-center justify-center p-10">
          {/* Decorative background blobs */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-300 opacity-30 rounded-full blur-2xl z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-300 opacity-30 rounded-full blur-2xl z-0"></div>

          {/* Centered content */}
          <div className="z-10 flex flex-col items-center text-center w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Import Your Resume</h2>
            <p className="text-gray-600 mb-6">
              If you have already created a resume, save time by importing your resume directly into our tool.
            </p>

            {/* Upload Box (mockup look) */}
            <div className="w-full border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 mb-4">
              <div className="text-blue-500 text-4xl mb-2">☁️</div>
              <p className="text-blue-700 font-medium">Drag and drop a file here</p>
              <div className="mt-3 w-28 mx-auto px-4 py-2 bg-blue-200 rounded text-sm text-gray-600 cursor-default">
                Browse
              </div>
            </div>

            <div className="my-2 text-sm text-gray-500">OR</div>

            {/* Static buttons */}
            <div className="flex justify-center gap-4 mb-4">
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm cursor-default">
                Google Drive
              </div>
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm cursor-default">
                Dropbox
              </div>
            </div>

            <p className="text-xs text-gray-400">
              Files we can read: DOC, DOCX, PDF, HTML, RTF, TXT
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col justify-center text-center items-center">
          <h1 className="text-4xl font-bold text-black mb-4">Import Your Resume</h1>
          <h2 className="text-gray-600 mb-6 text-2xl font-bold max-w-md mx-auto lg:mx-0">
            Create your resume from scratch, or you can start by uploading your own resume.
          </h2>
          <div className='bg-blue-700  top-20 w-fit  left-2/5 text-2xl   border-blue-800 hover:bg-blue-800 border-4 rounded-2xl px-8 p-4 text-white'>
                     <a className='hover'>  <button className='cursor-pointer'>Import Resume</button></a> 
                </div>
        </div>
      </div>
    </section>
        </div>
        <div className='flex h-screen bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% w-full'>
            <div className='h-1/4 w-1/2 p-26'>
                <img className='h-120  ' src={air} alt="" />
            </div> 
            <div className='flex flex-col items-center justify-center relative right-0 w-1/2 text-black space-y-8 '>
                <div className='font-bold'>
                    <h1 className='text-4xl'>Optimize Resume with AI</h1>
                    
                </div>
                <div className='text-2xl p- text-center'><h2>Don't let a weak resume hold you back. Our AI-powered review ensures your resume is optimized for ATS,
                     recruiter-friendly, and tailored for your dream job—helping you land interviews faster

                        </h2></div>
                <div className='bg-blue-700  top-20 w-fit  left-2/5 text-2xl   border-blue-800 hover:bg-blue-800 border-4 rounded-2xl px-8 p-4 text-white'>
                     <a className='hover'>  <button className='cursor-pointer'>Optimize Resume Now</button></a> 
                </div>
                
            </div>   
        </div>
    </div>
  )
}

export default Main