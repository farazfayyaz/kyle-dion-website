import React from 'react'
import sassyImg from '../images/sassyKyleDion.jpg'
import sugaImg from '../images/sugaKyleDion.jpg'
import paintingSoundsImg from '../images/paintingSoundsKyleDion.jpg'
import apple from '../icons/apple.png'
import spotify from '../icons/spotify.png'
import youtube from '../icons/youtube.png'

function Projects() {
  return (
    <div className='w-full px-16 my-28 flex flex-col items-center'>
        <h1 className='flex justify-center'>Projects</h1>

        <div className='w-full my-5 flex gap-5'>

            <div className='flex flex-col py-6 gap-4 items-center rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-400'>
                <img src={sassyImg} className='w-1/2 rounded-2xl shadow-lg shadow-blue-900 hover:scale-110 transition ease-in-out delay-75 duration-300'></img>
                <h2 className='text-3xl font-bold bg-transparent'>SASSY</h2>
                <span className='flex justify-center gap-8 p-6 bg-transparent'>
                    <button className='flex flex-col items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300'>
                        <img src={spotify} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Spotify</p>
                    </button>
                    <button className='flex flex-col items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300'>
                        <img src={apple} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Apple Music</p>
                    </button>
                    <button className='flex flex-col items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300'>
                        <img src={youtube} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>YouTube</p>
                    </button>
                </span>
            </div>

            <div className='flex flex-col py-6 gap-4 items-center rounded-2xl bg-gradient-to-tr from-rose-800 to-red-600'>
                <img src={sugaImg} className='w-1/2 rounded-2xl shadow-lg shadow-rose-950 hover:scale-110 transition ease-in-out delay-75 duration-300'></img>
                <h2 className='text-3xl font-bold bg-transparent'>SUGA</h2>
                <span className='flex justify-center gap-8 p-6 bg-transparent'>
                    <button className='flex flex-col items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300'>
                        <img src={spotify} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Spotify</p>
                    </button>
                    <button className='flex flex-col items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300'>
                        <img src={apple} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Apple Music</p>
                    </button>
                    <button className='flex flex-col items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300'>
                        <img src={youtube} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>YouTube</p>
                    </button>
                </span>
            </div>

            <div className='flex flex-col py-6 gap-4 items-center rounded-2xl bg-gradient-to-tr from-rose-400 from-10% via-neutral-400 via-50% to-blue-300 to-90%'>
                <img src={paintingSoundsImg} className='w-1/2 rounded-2xl shadow-lg shadow-neutral-700 hover:scale-110 transition ease-in-out delay-75 duration-300'></img>
                <h2 className='text-3xl font-bold bg-transparent'>Painting Sounds</h2>
                <span className='flex justify-center gap-8 p-6 bg-transparent'>
                    <button className='flex flex-col items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300'>
                        <img src={spotify} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Spotify</p>
                    </button>
                    <button className='flex flex-col items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300'>
                        <img src={apple} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Apple Music</p>
                    </button>
                    <button className='flex flex-col items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300'>
                        <img src={youtube} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>YouTube</p>
                    </button>
                </span>
            </div>

        </div>
        
    </div>
  )
}

export default Projects