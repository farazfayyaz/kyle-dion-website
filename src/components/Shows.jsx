import React from 'react'

function Shows() {
  return (
    <div className='w-full px-22 my-28 flex flex-col items-center text-center outline outline-4 outline-yellow-600'>
        
        <div className='w-1/2 flex flex-col justify-center py-10 outline outline-1'>
            <h1 >Show Schedule</h1>
            <h3>If My Jeans Could Talk</h3>
            <h4>Pop-Up Tour</h4>
            <p>Support: Ruby Red and Ayanna</p>
        </div>

        <div className='flex justify-center gap-24 py-10 outline outline-1'>

            <div className='grid grid-rows-2 gap-5 w-1/3 outline outline-1'>
                <h2>Los Angeles @ Echoplex</h2>
                <span>
                    <h3>February 21</h3>
                    <button>
                        <h4>SOLD OUT</h4>
                    </button>
                </span>
            </div>

            <div className='grid grid-rows-2 gap-5 w-1/3 outline outline-1'>
                <h2>New York @ Knitting Factory</h2>
                <span>
                    <h3>March 2</h3>
                    <button>
                        <h4>SOLD OUT</h4>
                    </button> 
                </span>
                
            </div>

            <div className='grid grid-rows-2 gap-5 w-1/3 outline outline-1'>
                <h2>Paris @ Platform</h2>
                <span>
                    <h3>March 5</h3>
                    <button>
                        <h4>SOLD OUT</h4>
                    </button> 
                </span>
            </div>

        </div>
    </div>
  )
}

export default Shows