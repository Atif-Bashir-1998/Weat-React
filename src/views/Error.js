import React from 'react'
import { Link } from 'react-router-dom'
import errorImage from './../images/404-bg.jpg'

export default function Error() {
  return (
    <div style={{ backgroundImage: `url(${errorImage})`, height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className='flex flex-col items-center justify-center gap-4 h-full bg-black bg-opacity-70'>
        <h1 className='text-purple-600 font-extrabold text-7xl text-center'>404 Page not found</h1>
        <Link to='/' className='px-6 py-3 text-3xl bg-purple-600 text-white rounded-md'>Home</Link>
      </div>
    </div>
  )
}
