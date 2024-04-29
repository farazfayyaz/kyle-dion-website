import React from 'react'

function Contact() {
  return (
    <div className='w-full px-16 my-28 flex flex-col text-center outline outline-4 outline-pink-600'>
        <h1 className='flex justify-center'>Contact</h1>

        <div className='flex justify-center gap-16'>
            <div>
                <h4>Management</h4>
                <p>Lauren Camp</p>
                <p>Lauren@OnRecord.Com</p>
            </div>

            <div>
                <h4>Agent - Domestic</h4>
                <p>Brandon Hughes</p>
                <p>BHughes@RevelTalent.Co</p>
            </div>

            <div>
                <h4>Agent - International</h4>
                <p>Noah Simon</p>
                <p>Noah.Simon@UnitedTalent.Com</p>
            </div>

            <div>
                <h4>Record Label</h4>
                <p>Position Music</p>
                <p>Label@PositionMusic.Com</p>
            </div>
        </div>
    </div>
  )
}

export default Contact