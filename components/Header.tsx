import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { user } = useUser();
  console.log(user)
  return (
    <div className='bg-gray-800 text-white flex justify-between items-center py-5 px-5'>
        <div>
            <Link href='/'>
            LIVESCRIB 
            </Link>
        </div>
        <div className='flex justify-evenly hidden lg:flex gap-6'>
        <Link href='/'>
        Home
        </Link>
        <Link href='/'>
        Pricing
        </Link>
        <Link href='/'>
        Solutions
        </Link>
        </div>
        <div className=' flex gap-5'>
            <div className='flex items-center'>

            <span>
            {
              user ? user.name : 'User'
            } 
            </span>
            </div>
            <div>
            <Link href={ user ? '/api/auth/logout' : '/api/auth/login'}>
            <button className='std-btn'>
               { 
                    user ? 'Logout' : 'Login'
               }
            </button>
            </Link>

            {/* <button className='std-btn'>
                Login
            </button> */}
            </div>
        </div>
    </div>
  )
}

export default Header