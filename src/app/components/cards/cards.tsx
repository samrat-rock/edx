import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";

function Cards() {
  return (
    <>
      <section className='bg-white m-10 h-40 w-7xl flex items-center'>
        <div className='text-6xl pt-4 pl-20  '>
         <IoPersonCircleSharp/>
        </div>
        <div className='pt-10 pl-20'>
        <h3 className='text-4xl font-bold'>Hello, Simmons!</h3>
        
        </div>
      </section>
    </>
  )
}

export default Cards
