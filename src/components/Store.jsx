import React from 'react'

function Store() {
  return (
    <div className='flex justify-center outline outline-4 outline-purple-600'>
        <div className='flex-col text-center'>
            <h1 className='flex justify-center'>Store</h1>

            <h3>Coming Soon</h3>

            <div className='flex-col'>
                <label for='email'>Sign Up For Email Alerts!</label>
                <input type='email' id='email' name='email'
                className='outline outline-1 rounded'></input>
            </div>
        </div>
        
    </div>
  )
}

export default Store