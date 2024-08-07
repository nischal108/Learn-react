import React from 'react'

const Navbar = ({songs}) => {
  return (
    <div className='w-full h-3 py-8 flex items-center justify-between'>
        <h2 className='text-orange-500 text-xl font-bold'>Orange</h2>
        <div className=' bg-orange-400 rounded-md px-4 py-2 shadow-lg'>
            <span className='text-white'>Favourites</span>
            <span className='text-white ml-2 bg-orange-500 py-1 px-2 rounded-md'>{songs.filter(item=>item.favourite).length}</span>
        </div>
    </div>
  )
}

export default Navbar