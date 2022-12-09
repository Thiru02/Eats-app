import React from 'react'
import {items} from './Source'

const Menu = () => {
  return (
    <div>
    <div className="max-w-[1640px] mx-auto justify text-center justify-between items-center p-top-0 ">
        <div>
            Top Rated Menu Items
        </div>
        <div className="mx-auto flex justify-between content-left md:text-xs text-[10px] p-4">
            <div className='grid justify-items-start'>
                <div>Filter Type</div>
                <div className='grid gap-2 md:grid-cols-8 sm:grid-cols-2 text-orange-500 '>
                    <button className=' border-orange-500 hover:bg-orange-400 hover:text-white'>All</button>
                    <button className=' border-orange-500 hover:bg-orange-400 hover:text-white'>Burgers</button>
                    <button className=' border-orange-500 hover:bg-orange-400 hover:text-white'>Pizza</button>
                    <button className=' border-orange-500 hover:bg-orange-400 hover:text-white'>Salads</button>
                    <button className=' border-orange-500 hover:bg-orange-400 hover:text-white'>Chicken</button>
                </div>
            </div>
            <div className='grid justify-items-start'>
                <div>Filter Price</div>
                <div className='grid gap-2 md:grid-cols-4 sm:grid-cols-2  text-orange-500 '>
                    <button className=' border-orange-500 hover:bg-orange-400 hover:text-white'>$</button>
                    <button className=' border-orange-500 hover:bg-orange-400 hover:text-white'>$$</button>
                    <button className=' border-orange-500 hover:bg-orange-400 hover:text-white'>$$$</button>
                    <button className=' border-orange-500 hover:bg-orange-400 hover:text-white'>$$$$</button>                </div>
            </div>
        </div>
        <div className='grid py-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {items.map((item)=>
            <div className='mx-2 my-4 border border-black  mt-0 hover:scale-105 hover:cursor-pointer'>
                <img className='max-h-[160px] w-full object-cover' src={item.link } alt="/"/>
                <div className='flex justify justify-between px-4 items-center font-bold'>
                    <p>{item.name}</p>
                    <button className='m-1 p-0.5 '>{item.price}</button>
                </div>
            </div>
            )}
        </div>
        </div>
        </div>
        
  )
}

export default Menu