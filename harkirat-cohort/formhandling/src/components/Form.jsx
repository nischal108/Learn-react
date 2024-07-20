import React from 'react';
import{useForm} from 'react-hook-form'; 

function Form({handleFormSubmit}) {

    const{register, handleSubmit, reset} =  useForm()

    const afterSubmit = (data)=>{
        handleFormSubmit(data);
        reset()
    }
  return (
    <div className='mt-8 flex justify-center'>
        <form className='flex gap-4' onSubmit={handleSubmit((data)=>(afterSubmit(data)) )}>
            <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none shadow-md' placeholder='name' type="text" />
            <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none shadow-md' placeholder='email' type="email" />
            <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none shadow-md' placeholder='image Url' type="text" />
            <button type="submit" className='px-3 text-white font-semibold py-1 rounded-md bg-blue-600 hover:bg-blue-800 '>Submit</button>
        </form>
    </div>
  )
}

export default Form