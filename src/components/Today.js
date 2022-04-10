import React from 'react'
import sunrise from './../images/sunrise.svg'
import sunset from './../images/sunset.svg'
import moonrise from './../images/moonrise.svg'
import moonset from './../images/moonset.svg'
import thermometer from './../images/thermometer.svg'

export default function Today() {
  return (
    <section className='bg-gray-100 w-10/12 lg:w-2/3 m-auto rounded-md shadow-md p-4 md:p-10'>
        <h1 className='text-lg md:text-xl text-gray-700'>Weather today in Attock City, Punjab, Pakistan</h1>
        <span className='flex items-center justify-between'>
            <div className='mt-5'>
                <h1 className='text-3xl md:text-5xl font-bold text-indigo-600'>24'</h1>
                <p className='font-bold'>Feels Like</p>
            </div>
            <div className='flex'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={sunrise} className='w-12 h-12 md:w-24 md:h-24' />
                    <p className='text-xs text-gray-600'>5:12am</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={sunset} className='w-12 h-12 md:w-24 md:h-24' />
                    <p className='text-xs text-gray-600'>6:20pm</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={moonrise} className='w-12 h-12 md:w-24 md:h-24' />
                    <p className='text-xs text-gray-600'>6:01pm</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={moonset} className='w-12 h-12 md:w-24 md:h-24' />
                    <p className='text-xs text-gray-600'>4:39am</p>
                </div>
            </div>
        </span>
        {/* table showing weather stats */}
        <div className='flex flex-col md:grid md:grid-cols-2 gap-1 justify-center mt-10'>
            <div className='flex items-center w-full border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-full border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-full border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-full border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-full border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-full border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-full border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-full border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
        </div>
    </section>
  )
}
