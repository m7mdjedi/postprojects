import React from 'react'
import { Content } from 'rsuite'
import { nameHanlder } from '../utils/projectUtils'

const Comment = ({comment}) => {
  
  
  return (
    <div className='p-5 flex gap-5 border-b-2 border-gray-500 bg-white ' >
      <div className="w-[90px] h-[90px] lg:w-[90px] lg:h-[90px] flex justify-center items-center rounded-full dark:bg-lime-600 bg-red-600 text-white text-2xl font-bold ">
         {nameHanlder(comment.name)}
        </div>
      <div className='flex flex-col  gap-5 items-center mb-5'> 
      
            <div> 
                <h3 className='text-2xl font-semibold'>{comment.name}</h3>
                <p className='text-gray-500'>{comment.email}</p>
            </div>
            <div className='text-xl mt-10'>
        {comment.content}
      </div>
      </div>
    
    </div>
  )
}

export default Comment
