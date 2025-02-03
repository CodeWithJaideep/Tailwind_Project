import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex '>
      <div className=' flex items-center justify-center lg:flex-1 order-2 lg:justify-end lg:pe-2.5'>
        <img src='./assets/Blue-Shape.svg' alt='blueShape' className=' -rotate-45 h-64 md:h-80 lg:h-[400px] ' />
        <img src='./assets/Pink-Shape.svg' alt='pinkShape' className='absolute -rotate-[30deg] h-64 md:h-80 lg:h-[400px]' />
        <img src='./assets/Purple-Shape.svg' alt='purpleShape' className='absolute -rotate-[15deg] h-64 md:h-80 lg:h-[400px]' />
        <img src='./assets/Hero-Model.png' alt='Hero' className='absolute h-60 md:h-80 lg:h-[400px]' />
      </div>
      <div className='lg:flex-1 order-1 lg:pt-8'>
        <h1 className='font-serif font-bold text-5xl leading-tight lg:text-6xl'>Host your website in less then 5 minutes.</h1>
        <p className='text-gray-400 lg:text-2xl'>with Hoster , get your website up andruning in no less then 5 minutes with the most competitive pricing packages available online </p>
        <form className=' flex flex-col gap-4 mt-2 md:flex-row'>
          <input
            type='email'
            placeholder='Enter e-mail address'
            className='bg-white shadow-white-100 px-4 py-3 rounded-md  placeholder:text-gray-400 lg:grow'
          />

          <button
            className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-3 rounded-md lg:w-40 grow-0'
          >
            Join Website</button>
        </form>
        <div className=' flex gap-2 pt-2'>
          <img src='./assets/Checkmark.svg' alt='checkmark' />
          <p className='text-gray-400 font-sans lg:text-xl'>No spam,ever.Unsubscribe anytime</p>
        </div>

      </div>
    </div>
  )
}

export default Body