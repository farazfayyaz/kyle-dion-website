import React from 'react'

function Store() {
  return (
    <div className='w-full px-16 my-28 flex justify-center outline outline-4 outline-purple-600'>
        <div className='w-1/3 flex flex-col items-center'>
            <h1 className='w-full flex justify-center'>Store</h1>

            <h3>Coming Soon</h3>

            <div className='flex flex-col items-center outline outline-1'>
                <label for='email'>Sign Up For Email Alerts!</label>
                <input type='email' id='email' name='email'
                className='outline outline-1 rounded'></input>
            </div>
        </div>
        
    </div>
  )
}

export default Store