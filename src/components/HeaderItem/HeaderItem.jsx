import React from 'react'

function HeaderItem ({name,Icon}) {
  return (
    <div 
    className='text-white flex items-center px-2 
    text-[15px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mb-2'
   
    >
      <Icon className="text-xl"/>
      <h2 className='ml-1'>{name}</h2>
    </div>

    
  )
}

export default HeaderItem
