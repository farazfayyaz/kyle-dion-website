import React from 'react'

function Shows() {
  return (
    <div className='w-full px-16 my-28 flex flex-col text-center outline outline-4 outline-yellow-600'>
        
        <div className='flex-col'>
            <h1 >Show Schedule</h1>
            <h3>If My Jeans Could Talk</h3>
            <h4>Pop-Up Tour</h4>
            <p>Support: Ruby Red and Ayanna</p>
        </div>

        <div className='flex justify-center gap-20'>
            <div>
                <h2>Los Angeles @ Echoplex</h2>
                <h3>February 21</h3>
                <h4>SOLD OUT</h4>
            </div>

            <div>
                <h2>New York @ Knitting Factory</h2>
                <h3>March 2</h3>
                <h4>SOLD OUT</h4>
            </div>

            <div>
                <h2>Paris @ Platform</h2>
                <h3>March 5</h3>
                <h4>SOLD OUT</h4>
            </div>
        </div>
    </div>
  )
}

export default Shows