import React from 'react'

function Store() {
  return (
    <div className='w-full py-10 my-28 flex flex-col items-center'>
        
        <h1 className='w-full flex justify-center' id='store'>Store</h1>
        
        <div className='w-2/5 py-10 gap-6 bg-white flex flex-col items-center rounded-2xl max-md:w-3/4'>

            <h3 className='text-3xl bg-transparent tracking-wide text-blue-500 font-semibold'>Coming Soon</h3>

            <div className='w-full bg-transparent flex flex-col gap-6 items-center'>
                <label for='email' className='bg-transparent text-blue-500 font-medium'>Sign Up For Email Alerts!</label>
                <input type='email' id='email' name='email' placeholder='youremail@email.com'
                className='h-10 w-64 text-center bg-blue-300 text-black ring-0 rounded-xl'></input>
                <button
                  className='h-12 w-52 rounded-full border-2 border-blue-500 hover:bg-amber-500 transition ease-in-out delay-75 duration-300'
                >
                  <p className='bg-transparent text-blue-500 font-semibold tracking-wide'>Keep Me Updated</p>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Store