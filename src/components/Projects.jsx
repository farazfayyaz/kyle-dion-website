import React from 'react'
import sassyImg from '../images/sassyKyleDion.jpg'
import sugaImg from '../images/sugaKyleDion.jpg'
import paintingSoundsImg from '../images/paintingSoundsKyleDion.jpg'
import apple from '../icons/apple.png'
import spotify from '../icons/spotify.png'
import youtube from '../icons/youtube.png'

function Projects() {
  return (
    <div className='w-full px-16 my-28 flex flex-col items-center outline outline-4 outline-green-600'>
        <h1 className='flex justify-center'>Projects</h1>

        <div className='w-full my-5 flex gap-5'>

            <div className='flex flex-col py-6 gap-4 items-center rounded-2xl outline outline-1'>
                <img src={sassyImg} className='w-1/2 rounded-2xl shadow-lg shadow-blue-900'></img>
                <h2 className='text-3xl font-bold bg-transparent'>SASSY</h2>
                <span className='flex justify-center gap-8 p-6 outline outline-1'>
                    <button className='flex flex-col items-center gap-3'>
                        <img src={spotify} className='w-12 h-12'></img>
                        <p className='text-lg'>Spotify</p>
                    </button>
                    <button className='flex flex-col items-center gap-3'>
                        <img src={apple} className='w-12 h-12'></img>
                        <p className='text-lg'>Apple Music</p>
                    </button>
                    <button className='flex flex-col items-center gap-3'>
                        <img src={youtube} className='w-12 h-12'></img>
                        <p className='text-lg'>YouTube</p>
                    </button>
                </span>
            </div>

            <div className='flex flex-col py-6 gap-4 items-center rounded-2xl outline outline-1'>
                <img src={sugaImg} className='w-1/2 rounded-2xl shadow-lg shadow-blue-900'></img>
                <h2 className='text-3xl font-bold bg-transparent'>SUGA</h2>
                <span className='flex justify-center gap-8 p-6 outline outline-1'>
                    <button className='flex flex-col items-center gap-3'>
                        <img src={spotify} className='w-12 h-12'></img>
                        <p className='text-lg'>Spotify</p>
                    </button>
                    <button className='flex flex-col items-center gap-3'>
                        <img src={apple} className='w-12 h-12'></img>
                        <p className='text-lg'>Apple Music</p>
                    </button>
                    <button className='flex flex-col items-center gap-3'>
                        <img src={youtube} className='w-12 h-12'></img>
                        <p className='text-lg'>YouTube</p>
                    </button>
                </span>
            </div>

            <div className='flex flex-col py-6 gap-4 items-center rounded-2xl outline outline-1'>
                <img src={paintingSoundsImg} className='w-1/2 rounded-2xl shadow-lg shadow-blue-900'></img>
                <h2 className='text-3xl font-bold bg-transparent'>Painting Sounds</h2>
                <span className='flex justify-center gap-8 p-6 outline outline-1'>
                    <button className='flex flex-col items-center gap-3'>
                        <img src={spotify} className='w-12 h-12'></img>
                        <p className='text-lg'>Spotify</p>
                    </button>
                    <button className='flex flex-col items-center gap-3'>
                        <img src={apple} className='w-12 h-12'></img>
                        <p className='text-lg'>Apple Music</p>
                    </button>
                    <button className='flex flex-col items-center gap-3'>
                        <img src={youtube} className='w-12 h-12'></img>
                        <p className='text-lg'>YouTube</p>
                    </button>
                </span>
            </div>

        </div>
        
    </div>
  )
}

export default Projects