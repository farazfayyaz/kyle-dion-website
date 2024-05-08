import React from 'react'

function Shows() {
  return (
    <div className='w-full px-22 my-28 flex flex-col items-center text-center'>
        
        <div className='w-1/2 flex flex-col justify-center py-10'>
            <h1 id='shows'>Show Schedule</h1>
            <h3>If My Jeans Could Talk</h3>
            <h4>Pop-Up Tour</h4>
            <p>Support: Ruby Red and Ayanna</p>
        </div>

        <div className='flex justify-center gap-24 py-10'>

            <div className='grid grid-rows-2 gap-5 w-1/3 py-5 rounded-2xl bg-white'>
                <h2 className='bg-transparent text-blue-500'>Los Angeles @ Echoplex</h2>
                <span className='bg-transparent'>
                    <h3 className='text-xl bg-transparent text-blue-500 tracking-wide'>February 21</h3>
                    <button className='h-12 w-40 mt-4 rounded-full border-2 border-blue-500 hover:bg-red-600 transition ease-in-out delay-75 duration-300 cursor-not-allowed'>
                        <h4 className='text-xl text-blue-500 font-semibold tracking-wide bg-transparent hover:text-white transition ease-in-out delay-75 duration-300'>SOLD OUT</h4>
                    </button>
                </span>
            </div>

            <div className='grid grid-rows-2 gap-5 w-1/3 py-5 rounded-2xl bg-white'>
                <h2 className='bg-transparent text-blue-500'>New York @ Knitting Factory</h2>
                <span className='bg-transparent'>
                    <h3 className='text-xl bg-transparent text-blue-500 tracking-wide'>March 2</h3>
                    <button className='h-12 w-40 mt-4 rounded-full border-2 border-blue-500 hover:bg-red-600 transition ease-in-out delay-75 duration-300 cursor-not-allowed'>
                        <h4 className='text-xl text-blue-500 font-semibold tracking-wide bg-transparent hover:text-white transition ease-in-out delay-75 duration-300'>SOLD OUT</h4>
                    </button> 
                </span>
                
            </div>

            <div className='grid grid-rows-2 gap-5 w-1/3 py-5 rounded-2xl bg-white'>
                <h2 className='bg-transparent text-blue-500'>Paris @ Platform</h2>
                <span className='bg-transparent'>
                    <h3 className='text-xl bg-transparent text-blue-500 tracking-wide'>March 5</h3>
                    <button className='h-12 w-40 mt-4 rounded-full border-2 border-blue-500 hover:bg-red-600 transition ease-in-out delay-75 duration-300 cursor-not-allowed'>
                        <h4 className='text-xl text-blue-500 font-semibold tracking-wide bg-transparent hover:text-white transition ease-in-out delay-75 duration-300'>SOLD OUT</h4>
                    </button> 
                </span>
            </div>

        </div>
    </div>
  )
}

export default Shows