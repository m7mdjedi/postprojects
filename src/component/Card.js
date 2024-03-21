import React from 'react'

const Card = (props) => {
  return (
    <div className="p-4 border-gray-200 border-2 bg-white  rounded-xl flex flex-col justify-center"> 
        {props.children}

    </div>
  )
}

export default Card
