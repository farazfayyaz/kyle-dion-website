import React from 'react'
import heroAlbumImg from '../images/ifMyJeansCouldTalkKyelDion.jpg'

function Hero() {
  return (
    <div className='w-full my-16'>

        <div className='flex items-center justify-center gap-6'>
            <div className='flex flex-col h-1/2 w-1/4 gap-10 items-center text-center'>
                <h1 className='text-4xl font-bold'>'If My Jeans Could Talk' Out Now</h1>
                <p className='text-2xl'>Available On All Platforms.</p>
                <button 
                className='h-12 w-36 text-lg font-bold self-center rounded-full outline outline-2 hover:bg-amber-500 transition ease-in-out delay-75 duration-300'
                >
                    Listen Now
                </button>
            </div>

            <div className='h-1/2 w-1/3 my-8 rounded-2xl'>
                <img src={heroAlbumImg} className='rounded-2xl shadow-xl shadow-blue-900 '></img>
            </div>
            
        </div>
    </div>
  )
}

export default Hero