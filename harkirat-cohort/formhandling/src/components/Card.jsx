import React from 'react'

function Card({user, index,handleRemove}) {
    const {image, name, email}= user;
  return (
        <div className='w-48 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
        <div className="image w-16 h-16 rounded-full overflow-hidden bg-zinc-200">
            <img className='w-full h-full object-cover object-center' src={image} alt="" />
        </div>
        <h1 className='mt-1 text-xl font-semibold'>{name}</h1>
        <h3 className='opacity-50 text-xs font-semibold'>{email}</h3>
        <p className=' mt-2 text-sm leading-1 tracking-tight text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam eaque explicabo aliquid?</p>
        <button onClick={()=>handleRemove(index)} className='px-3 py-1 bg-red-600 text-sm rounded-md text-white mt-4 hover:bg-red-700 '>Remove It</button>
    </div>
  ) 
}

export default Card