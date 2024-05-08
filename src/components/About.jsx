import React from 'react'
import aboutImg from '../images/aboutKyleDion.jpg'

function About() {
  return (
    <div className='w-full my-20 flex flex-col gap-6'>
        <h1 className='text-center' id='about'>Kyle Dion</h1>

        <div className='w-full flex items-center justify-center gap-10'>
            <div className='h-1/3 w-1/4 my-8 items-center'>
                <img src={aboutImg} className='items-center self-center rounded-2xl shadow-lg shadow-blue-900'></img>
            </div>

            <div className='h-1/2 w-1/3 flex flex-col gap-8 items-center text-2xl leading-relaxed '>

                <p>
                    Kyle Dion is a prolific artist hailing from Florida that effortlessly captures the sounds of R&B, soul, pop 
                    and more throughout his music. With notable collaborations and a critically acclaimed album 'SUGA',
                    he showcases an impeccable falsetto and tells tales of love and lust.
                </p>

                <p>
                    From touring major markets to his latest EP 'If My Jeans Could Talk,' Dion's artistry continues to 
                    captivate audiences, cementing his status as a rising star in the music industry.
                </p>

            </div>
        </div>
    </div>
  )
}

export default About