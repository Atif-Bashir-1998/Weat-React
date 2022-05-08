import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex justify-between px-10 py-4 bg-gray-700 text-white'>
        <Link to='/about' className='underline italic'>About</Link>
        <a target='_blank' href='https://github.com/Atif-Bashir-1998/Weat-React' className='underline italic'>Source Code</a>
    </div>
  )
}

export default Footer