import React from 'react'

function Store() {
  return (
    <div className='w-full py-10 my-28 flex flex-col items-center'>
        
        <h1 className='w-full flex justify-center'>Store</h1>
        
        <div className='w-2/5 py-10 gap-6 bg-blue-600 flex flex-col items-center rounded-2xl'>

            <h3 className='text-3xl bg-transparent tracking-wide text-amber-500 font-semibold'>Coming Soon</h3>

            <div className='w-full bg-transparent flex flex-col gap-6 items-center'>
                <label for='email' className='bg-transparent'>Sign Up For Email Alerts!</label>
                <input type='email' id='email' name='email' placeholder='youremail@email.com'
                className='h-10 w-64 text-center bg-neutral-300 text-black ring-0 rounded-xl'></input>
                <button
                  className='h-12 w-52 tracking-wide rounded-full border-2 border-white hover:bg-amber-500 transition ease-in-out delay-75 duration-300'
                >Keep Me Updated</button>
            </div>
        </div>
        
    </div>
  )
}

export default Store