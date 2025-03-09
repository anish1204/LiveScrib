import Header from '@/components/Header'
import React from 'react'

const dashboard = () => {
  return (
    <>
    <Header/>
    <div className='h-screen flex bg-gray-900 text-white'>
        <div className='w-[25%] hidden lg:block mx-4 my-5 h-min-[40vh] h-[80vh] h-max-[auto] border-2 border-amber-50'>

        </div>
        <div className='w-[100%] lg:w-[75%] d-col justify-start pt-15 items-center mx-4 my-5 h-screen '>
            <p className='text-[5vw] mb-10 font-bold'>
                Welcome to LiveScrib
            </p>
           
            <div className='w-100 d-col items-center justify-center'>

            <input className='bg-white w-[60vw] md:w-[85%] placeholder:text-center px-4 placeholder:text-black border-2 rounded py-3' placeholder='Enter Room Id Here....'>
            </input>

            <button className='alt-btn mt-3'>
                Join
            </button> 
            </div>
            <p className='mt-10'>Or</p>
            <div>

            <button className='grn-btn mt-5'>
                Create a New Room
            </button> 
            </div>
              
        </div>
    </div>
    </>
  )
}

export default dashboard