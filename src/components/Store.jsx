import React from 'react'

function Store() {
  return (
    <div className='w-full py-10 my-28 flex flex-col items-center outline outline-4 outline-purple-600'>
        
        <h1 className='w-full flex justify-center'>Store</h1>
        
        <div className='w-1/4 py-10 gap-6 flex flex-col items-center outline outline-1'>

            <h3 className='text-2xl'>Coming Soon</h3>

            <div className='flex flex-col gap-6 items-center'>
                <label for='email'>Sign Up For Email Alerts!</label>
                <input type='email' id='email' name='email' placeholder='youremail@email.com'
                className='outline outline-1 rounded'></input>
            </div>
        </div>
        
    </div>
  )
}

export default Store