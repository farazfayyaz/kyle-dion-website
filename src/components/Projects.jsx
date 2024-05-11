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
        <h1 className='flex justify-center' id='projects'>Projects</h1>

        <div className='w-full my-5 flex gap-5 max-md:flex-col max-lg:flex-col'>

            <div className='flex flex-col py-6 gap-4 items-center rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-400'>
                <img src={sassyImg} className='w-1/2 rounded-2xl shadow-lg shadow-blue-900 hover:scale-110 transition ease-in-out delay-75 duration-300'></img>
                <h2 className='text-3xl font-bold bg-transparent'>SASSY</h2>
                <span className='flex justify-center gap-8 p-6 bg-transparent'>
                    <a href='https://open.spotify.com/album/2FBmbNR9eJ6BY4QIWBRI38'
                    className='flex flex-col bg-inherit items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300 cursor-pointer'>
                        <img src={spotify} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Spotify</p>
                    </a>
                    <a href='https://music.apple.com/us/album/sassy-deluxe/1632623186'
                    className='flex flex-col bg-inherit items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300 cursor-pointer'>
                        <img src={apple} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Apple Music</p>
                    </a>
                    <a href='https://www.youtube.com/playlist?list=OLAK5uy_nc2iIo1srVgEE8dQ_xxC7oxBWXD9ROavM'
                    className='flex flex-col bg-inherit items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300 cursor-pointer'>
                        <img src={youtube} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>YouTube</p>
                    </a>
                </span>
            </div>

            <div className='flex flex-col py-6 gap-4 items-center rounded-2xl bg-gradient-to-tr from-rose-800 to-red-600'>
                <img src={sugaImg} className='w-1/2 rounded-2xl shadow-lg shadow-rose-950 hover:scale-110 transition ease-in-out delay-75 duration-300'></img>
                <h2 className='text-3xl font-bold bg-transparent'>SUGA</h2>
                <span className='flex justify-center gap-8 p-6 bg-transparent'>
                    <a href='https://open.spotify.com/album/7uJlMQQqUJ8s17FRoMuPrq'
                    className='flex flex-col bg-inherit items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300 cursor-pointer'>
                        <img src={spotify} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Spotify</p>
                    </a>
                    <a href='https://music.apple.com/us/album/suga-deluxe/1498192546'
                    className='flex flex-col bg-inherit items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300 cursor-pointer'>
                        <img src={apple} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Apple Music</p>
                    </a>
                    <a href='https://www.youtube.com/playlist?list=OLAK5uy_kOYVbUf7CPESuQQbeO72XRML3dFCAIxrY'
                    className='flex flex-col bg-inherit items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300 cursor-pointer'>
                        <img src={youtube} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>YouTube</p>
                    </a>
                </span>
            </div>

            <div className='flex flex-col py-6 gap-4 items-center rounded-2xl bg-gradient-to-tr from-rose-400 from-10% via-neutral-400 via-50% to-blue-300 to-90%'>
                <img src={paintingSoundsImg} className='w-1/2 rounded-2xl shadow-lg shadow-neutral-700 hover:scale-110 transition ease-in-out delay-75 duration-300'></img>
                <h2 className='text-3xl font-bold bg-transparent'>Painting Sounds</h2>
                <span className='flex justify-center gap-8 p-6 bg-transparent'>
                    <a href='https://open.spotify.com/album/1VBRFMy0dLTFhc4iEm5y82'
                    className='flex flex-col bg-inherit items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300 cursor-pointer'>
                        <img src={spotify} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Spotify</p>
                    </a>
                    <a href='https://music.apple.com/us/album/painting-sounds/1742169055'
                    className='flex flex-col bg-inherit items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300 cursor-pointer'>
                        <img src={apple} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>Apple Music</p>
                    </a>
                    <a href='https://www.youtube.com/playlist?list=OLAK5uy_mMvcq3N0A-1cPEby31akyQ1JOAF-xSUmE'
                    className='flex flex-col bg-inherit items-center gap-3 hover:scale-110 transition ease-in-out delay-75 duration-300 cursor-pointer'>
                        <img src={youtube} className='w-12 h-12 bg-inherit'></img>
                        <p className='text-lg bg-inherit'>YouTube</p>
                    </a>
                </span>
            </div>

        </div>
        
    </div>
  )
}

export default Projects