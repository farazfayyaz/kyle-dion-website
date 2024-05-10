import React from 'react'

function Contact() {
  return (
    <div className='w-full px-16 my-28 flex flex-col text-center'>
        <h1 className='flex justify-center' id='contact'>Contact</h1>

        <div className='py-10 flex justify-center gap-16 max-md:flex-col items-center'>

            <div className='w-1/4 py-6 flex flex-col gap-4 rounded-2xl border-2 hover:bg-white transition ease-in-out delay-75 duration-300 hover:text-blue-500 hover:scale-110 max-md:w-full'>
                <h4 className='font-semibold text-lg bg-transparent text-inherit'>Management</h4>
                <p className='bg-transparent text-inherit'>Lauren Camp</p>
                <p className='bg-transparent text-inherit'>Lauren@OnRecord.Com</p>
            </div>

            <div className='w-1/4 py-6 flex flex-col gap-4 rounded-2xl border-2 hover:bg-white transition ease-in-out delay-75 duration-300 hover:text-blue-500 hover:scale-110 max-md:w-full'>
                <h4 className='font-semibold text-lg bg-transparent text-inherit'>Agent - Domestic</h4>
                <p className='bg-transparent text-inherit'>Brandon Hughes</p>
                <p className='bg-transparent text-inherit'>BHughes@RevelTalent.Co</p>
            </div>

            <div className='w-1/4 py-6 flex flex-col gap-4 rounded-2xl border-2 hover:bg-white transition ease-in-out delay-75 duration-300 hover:text-blue-500 hover:scale-110 max-md:w-full'>
                <h4 className='font-semibold text-lg bg-transparent text-inherit'>Agent - International</h4>
                <p className='bg-transparent text-inherit'>Noah Simon</p>
                <p className='bg-transparent text-inherit'>Noah.Simon@UnitedTalent.Com</p>
            </div>

            <div className='w-1/4 py-6 flex flex-col gap-4 rounded-2xl border-2 hover:bg-white transition ease-in-out delay-75 duration-300 hover:text-blue-500 hover:scale-110 max-md:w-full'>
                <h4 className='font-semibold text-lg bg-transparent text-inherit'>Record Label</h4>
                <p className='bg-transparent text-inherit'>Position Music</p>
                <p className='bg-transparent text-inherit'>Label@PositionMusic.Com</p>
            </div>
        </div>
    </div>
  )
}

export default Contact