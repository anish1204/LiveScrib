import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='bg-gray-900 text-white block lg:flex justify-center items-center h-screen'>
        <div className='w-[100%] lg:w-[50%] text-[5vw] flex justify-center items-center font-bold px-5'>
            LiveScrib
        </div>
        <div className=' flex items-start justify-center w-[100%] lg:w-[50%] text-[5vw] '>
            <form className='border-2 border-white col-auto d-col items-center justify-between p-5 h-[50vh] w-[450px]'>
                <div className='flex flex-col items-center justify-center gap-5'>
                <p className='text-[35px] text-center'>
                    Login
                </p>
                    {/* <input type='text' placeholder='Username' className='border-2 border-white'/> */}
                    <p className='text:xl-[11px] text-[20px] text-center'>
                        Join here with your friends and start scribing your ideas & thoughts
                    </p>
                </div>
                    <button className=' w-[50%] h-[35px] std-btn'>
                        <p>Login</p>
                    </button>
                    <div className='flex justify-evenly gap-5'>
                        <Image alt='logo'  src="/images/facebook.png" width={50} height={50} />
                        <Image alt='logo'  src="/images/insta.jpg" width={50} height={50} />
                        <Image alt='logo'  src="/images/x.jpg" width={50} height={50} />
                    </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage