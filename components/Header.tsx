import Link from 'next/link'
import React from 'react'

const Header = () => {
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
            User 
            </span>
            </div>
            <div>

            <button className='std-btn'>
                Login
            </button>
            </div>
        </div>
    </div>
  )
}

export default Header