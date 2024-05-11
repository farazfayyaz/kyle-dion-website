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

            <div className='flex flex-col py-6 gap-4 items-center outline outline-1'>
                <img src={sassyImg} className='w-1/2 rounded-2xl'></img>
                <h2 className='text-3xl font-bold'>SASSY</h2>
                <span className='flex justify-center gap-5 outline outline-1'>
                    <button><img src={spotify} className='w-8 h-8'></img></button>
                    <button><img src={apple} className='w-8 h-8'></img></button>
                    <button><img src={youtube} className='w-8 h-8'></img></button>
                </span>
            </div>

            <div className='flex flex-col py-6 gap-4 items-center outline outline-1'>
                <img src={sugaImg} className='w-1/2 rounded-2xl'></img>
                <h2 className='text-3xl font-bold'>SUGA</h2>
                <span className='flex justify-center gap-5 outline outline-1'>
                    <button>Spotify</button>
                    <button>Apple</button>
                    <button>youtube</button>
                </span>
            </div>

            <div className='flex flex-col py-6 gap-4 items-center outline outline-1'>
                <img src={paintingSoundsImg} className='w-1/2 rounded-2xl'></img>
                <h2 className='text-3xl font-bold'>Painting Sounds</h2>
                <span className='flex justify-center gap-5 outline outline-1'>
                    <button>Spotify</button>
                    <button>Apple</button>
                    <button>YouTube</button>
                </span>
            </div>

        </div>
        
    </div>
  )
}

export default Projects