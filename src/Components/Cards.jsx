import React from 'react'

const Cards = () => {
  return (
    // cards
    <div className=' max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-3  gap-6  text-white'>
        <div className='relative rounded-xl '>
            <div className='absolute '>
            <h6>Sun's Out, BOGO's Out</h6>
            <p>Through 8/26</p>
            </div>
            <img  className="rounded-xl w-full max-h-[180px] md:max-h-[200px] object-cover" src="https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <button className=' absolute bottom-0 bg-white text-black'>Order now</button>
        </div>
        <div className='relative rounded-xl'>
            <div className='absolute'>
            <h6>New Restaurants</h6>
            <p>Added Daily</p>
            </div>
            <button className='absolute bottom-0 bg-white text-black'>Order now</button>
            <img className="rounded-xl w-full max-h-[180px] md:max-h-[200px] object-cover" src="https://images.pexels.com/photos/1956974/pexels-photo-1956974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
        <div className='relative rounded-xl'>
            <div className='absolute'>
            <h6>We Deliver Desserts Too</h6>
            <p>Tasty Treats</p>
            </div>
            <button className='absolute bottom-0 bg-white text-black'>Order now</button>
            <img className="rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
        </div>
    </div>
  )
}

export default Cards