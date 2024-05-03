import React from 'react'

function Store() {
  return (
    <div className='w-full py-10 my-28 flex flex-col items-center outline outline-4 outline-purple-600'>
        
        <h1 className='w-full flex justify-center'>Store</h1>
        
        <div className='w-2/5 py-10 gap-6 flex flex-col items-center rounded-2xl outline outline-1'>

            <h3 className='text-3xl tracking-wide'>Coming Soon</h3>

            <div className='flex flex-col gap-6 items-center'>
                <label for='email'>Sign Up For Email Alerts!</label>
                <input type='email' id='email' name='email' placeholder='youremail@email.com'
                className='h-10 w-64  outline outline-1 rounded'></input>
                <button
                  className='h-12 w-52 rounded-full outline outline-1'
                >Keep Me Updated</button>
            </div>
        </div>
        
    </div>
  )
}

export default Store