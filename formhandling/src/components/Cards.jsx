import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
  return (
    <div className=' w-full p-4 flex justify-center gap-4  flex-wrap max-h-96 overflow-auto'>
        {users.map((user, index)=>(
             <Card key={index} index={index} user={user} handleRemove={handleRemove}/>
        ))}

    </div>
  )
}

export default Cards