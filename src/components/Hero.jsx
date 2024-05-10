import React from 'react'
import heroAlbumImg from '../images/ifMyJeansCouldTalkKyelDion.jpg'

function Hero() {
  return (
    <div className='w-full my-16'>

        <div className='flex items-center justify-center gap-6 max-md:flex-col-reverse'>
            <div className='flex flex-col h-1/2 w-1/4 gap-10 items-center text-center max-md:h-1/4 max-md:w-full'>
                <h1>'If My Jeans Could Talk' Out Now</h1>
                <p className='text-2xl'>Available On All Platforms.</p>
                <a
                href='https://presave.io/t/ifmyjeanscouldtalk?fbclid=PAAaarBwv032yZklRJGdB0dUc5MbYY1TJuETVqv57bRTtaWvRp-DIfkwweQfU_aem_AaYVeiQI9svpJTzLGEx8pHN1G6tUXqDM5L11s5XRPXmMIvSzD058FsiDL41r-7JZbAg'
                className='h-12 w-36 text-lg tracking-wide font-bold self-center rounded-full border-2 border-white hover:bg-amber-500 transition ease-in-out delay-75 duration-300'
                >
                    <button className='h-full w-full bg-transparent'>
                        Listen Now
                    </button>
                    
                </a>
            </div>

            <div className='h-1/2 w-1/3 my-8 rounded-2xl'>
                <img src={heroAlbumImg} className='rounded-2xl shadow-xl shadow-blue-900 '></img>
            </div>
            
        </div>
    </div>
  )
}

export default Hero