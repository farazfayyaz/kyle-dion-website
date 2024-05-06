import React from 'react'

function Contact() {
  return (
    <div className='w-full px-16 my-28 flex flex-col text-center outline outline-4 outline-pink-600'>
        <h1 className='flex justify-center'>Contact</h1>

        <div className='py-10 flex justify-center gap-16'>

            <div className='w-1/4 py-6 flex flex-col gap-4 rounded-2xl outline outline-1'>
                <h4 className='font-semibold text-lg bg-transparent'>Management</h4>
                <p className='bg-transparent'>Lauren Camp</p>
                <p className='bg-transparent'>Lauren@OnRecord.Com</p>
            </div>

            <div className='w-1/4 py-6 flex flex-col gap-4 rounded-2xl outline outline-1'>
                <h4 className='font-semibold text-lg bg-transparent'>Agent - Domestic</h4>
                <p className='bg-transparent'>Brandon Hughes</p>
                <p className='bg-transparent'>BHughes@RevelTalent.Co</p>
            </div>

            <div className='w-1/4 py-6 flex flex-col gap-4 rounded-2xl outline outline-1'>
                <h4 className='font-semibold text-lg bg-transparent'>Agent - International</h4>
                <p className='bg-transparent'>Noah Simon</p>
                <p className='bg-transparent'>Noah.Simon@UnitedTalent.Com</p>
            </div>

            <div className='w-1/4 py-6 flex flex-col gap-4 rounded-2xl outline outline-1'>
                <h4 className='font-semibold text-lg bg-transparent'>Record Label</h4>
                <p className='bg-transparent'>Position Music</p>
                <p className='bg-transparent'>Label@PositionMusic.Com</p>
            </div>
        </div>
    </div>
  )
}

export default Contact