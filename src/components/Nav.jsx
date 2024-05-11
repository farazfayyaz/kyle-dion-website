import React from 'react'

function Nav() {
  return (
    <header className='w-full h-18'>
            <nav>
                <ul className='m-12 flex justify-center gap-9 text-center text-2xl font-bold'>
                    <li><a className='hover:text-red-500 transition ease-in-out delay-75 duration-300 cursor-pointer'>Home</a></li>
                    <li><a className='hover:text-red-500 transition ease-in-out delay-75 duration-300 cursor-pointer'>About</a></li>
                    <li><a className='hover:text-red-500 transition ease-in-out delay-75 duration-300 cursor-pointer'>Projects</a></li>
                    <li><a className='hover:text-red-500 transition ease-in-out delay-75 duration-300 cursor-pointer'>Shows</a></li>
                    <li><a className='hover:text-red-500 transition ease-in-out delay-75 duration-300 cursor-pointer'>Store</a></li>
                    <li><a className='hover:text-red-500 transition ease-in-out delay-75 duration-300 cursor-pointer'>Contact</a></li>
                </ul>
            </nav>
    </header>
  )
}

export default Nav