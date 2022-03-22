import React from 'react'
import sunrise from './../images/sunrise.svg'
import sunset from './../images/sunset.svg'
import moonrise from './../images/moonrise.svg'
import moonset from './../images/moonset.svg'
import thermometer from './../images/thermometer.svg'

export default function Today() {
  return (
    <section className='bg-gray-100 w-2/3 m-auto rounded-md shadow-md p-10'>
        <h1 className='text-xl'>Weather today in Attock City, Punjab, Pakistan</h1>
        <span className='flex items-center justify-between'>
            <div>
                <h1 className='text-5xl font-bold'>24'</h1>
                <p className='font-bold'>Feels Like</p>
            </div>
            <div className='flex'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={sunrise} className='w-24 h-24' />
                    <p>5:12am</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={sunset} className='w-24 h-24' />
                    <p>6:20pm</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={moonrise} className='w-24 h-24' />
                    <p>6:01pm</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={moonset} className='w-24 h-24' />
                    <p>4:39am</p>
                </div>
            </div>
        </span>
        {/* table showing weather stats */}
        <div className='flex flex-wrap gap-1 justify-center mt-10'>
            <div className='flex items-center w-96 border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-96 border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-96 border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-96 border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-96 border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-96 border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-96 border-2 border-blue-300'>
                <img src={thermometer} className='w-12 h-12 bg-gray-300' />
                <div className='flex justify-between flex-grow px-4'>
                    <p>High/Low</p>
                    <p>--/18'</p>
                </div>
            </div>
            <div className='flex items-center w-96 border-2 border-blue-300'>
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
