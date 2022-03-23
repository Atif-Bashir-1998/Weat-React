import React from 'react'
import clearNight from './../images/clear-night.svg'
import fogNight from './../images/hail.svg'
import hurricane from './../images/hurricane.svg'
import humidity from './../images/humidity.svg'

export default function HourlyForecast() {
  return (
    <section className='bg-gray-100 w-2/3 m-auto rounded-md shadow-md p-10'>
        <h1 className='text-xl'>Hourly Forecast</h1>
        <div className='flex gap-5 flex-wrap justify-center'>
            <article className='flex flex-col items-center w-full md:w-48 bg-gray-300 text-gray-700 border border-gray-300 px-4 py-8 rounded-md shadow-md'>
                <h1 className='text-2xl font-bold'>Now</h1>
                <p className='text-5xl font-bold text-indigo-600'>24'</p>
                <img src={clearNight} className='w-16 h-16 rounded-full bg-gray-700' />
                <span className='flex items-center'>
                    <img src={humidity} className='w-12 h-12' />
                    <p>1%</p>
                </span>
            </article>
            <article className='flex flex-col items-center w-full md:w-48 bg-gray-300 text-gray-700 border border-gray-300 px-4 py-8 rounded-md shadow-md' >
                <h1 className='text-2xl font-bold'>11pm</h1>
                <p className='text-5xl font-bold text-indigo-600'>24'</p>
                <img src={fogNight} className='w-16 h-16 rounded-full bg-gray-700' />
                <span className='flex items-center'>
                    <img src={humidity} className='w-12 h-12' />
                    <p>1%</p>
                </span>
            </article>
            <article className='flex flex-col items-center w-full md:w-48 bg-gray-300 text-gray-700 border border-gray-300 px-4 py-8 rounded-md shadow-md'>
                <h1 className='text-2xl font-bold'>12am</h1>
                <p className='text-5xl font-bold text-indigo-600'>24'</p>
                <img src={hurricane} className='w-16 h-16 bg-gray-700 rounded-full'/>
                <span className='flex items-center'>
                    <img src={humidity} className='w-12 h-12' />
                    <p>1%</p>
                </span>
            </article>
            <article className='flex flex-col items-center w-full md:w-48 bg-gray-300 text-gray-700 border border-gray-300 px-4 py-8 rounded-md shadow-md'>
                <h1 className='text-2xl font-bold'>1am</h1>
                <p className='text-5xl font-bold text-indigo-600'>24'</p>
                <img src={hurricane} className='w-16 h-16 bg-gray-700 rounded-full'/>
                <span className='flex items-center'>
                    <img src={humidity} className='w-12 h-12' />
                    <p>1%</p>
                </span>
            </article>
            <article className='flex flex-col items-center w-full md:w-48 bg-gray-300 text-gray-700 border border-gray-300 px-4 py-8 rounded-md shadow-md'>
                <h1 className='text-2xl font-bold'>2am</h1>
                <p className='text-5xl font-bold text-indigo-600'>13'</p>
                <img src={clearNight} className='w-16 h-16 bg-gray-700 rounded-full' />
                <span className='flex items-center'>
                    <img src={humidity} className='w-12 h-12' />
                    <p>10%</p>
                </span>
            </article>
        </div>
        <button className='btn px-8 py-3 bg-blue-800 text-gray-300 rounded-full hover:bg-blue-600 transition duration-100 mt-10'>Next 48 hours</button>
    </section>
  )
}
