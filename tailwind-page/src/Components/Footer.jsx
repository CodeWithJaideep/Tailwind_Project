import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 text-gray-400'>
        <li>
          <a href='#' >Facebook</a>
        </li>
        <li>
          <a href='#' >Instagram</a>
        </li>
        <li>
          <a href='#' >Tiwter</a>
        </li>
      </ul>

      <div className='flex gap-2'>
        <img src='./assets/Help-Avatar.svg' alt='footer-image' />
        <div>
          <p className='font-serif  font-thin'>Have any Questions ?</p>
          <a href='#' className='font-sans  font-medium'>Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer