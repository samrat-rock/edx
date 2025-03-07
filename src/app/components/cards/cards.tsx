import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";

function Cards() {
  return (
    <>
      <section className=' lg:pl-20 '>
        <div className='bg-white m-10 lg:h-40 lg:w-7xl lg:flex rounded-xl text-center lg:text-left'>
        <div className='text-6xl pt-5  pl-24  '>
         <IoPersonCircleSharp/>
        </div>
        <div className='lg:py-10 lg:pl-20  px-8'>
        <h3 className='lg:text-4xl text-2xl font-bold'>Hello, Simmons!</h3>
        <p>Welcome to your dashboard! your one-step hub for courses, progress tracking, and connections. let&apos;s <br/>
           start your journey to knowledge and success!
        </p>
        
        </div>
        </div>
       
      </section>
    </>
  )
}

export default Cards
