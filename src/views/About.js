import React from 'react'

function About() {
  return (
    <div>
      <section className='flex flex-col justify-center items-center h-96 bg-gray-700 text-white'>
        <h1 className='text-3xl md:text-5xl'>What is Weat-React</h1>
        <h3>Simple weather app</h3>
      </section>
      
      <section className='flex flex-col gap-10 px-14 md:px-28 py-5'>
        <div>
          <h1 className='text-3xl underline mb-5'>Technologies used?</h1>
          <ul className='list-disc'>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>TailwindCSS</li>
            <li>Apexcharts</li>
            <li>React Router</li>
            <li>Weather API</li>
          </ul>
        </div>

        <div>
          <h1 className='text-3xl underline mb-5'>Features?</h1>
          <ul className='list-disc'>
            <li>API Integration (Weather API)</li>
            <li>Auto complete / suggestion (Weather API)</li>
            <li>Save up to 3 recent locations in history</li>
            <li>Temperature in Celsius and Fahrenheit</li>
            <li>Graphical and tabular form to show data</li>
          </ul>
        </div>

        <small>View source code on <a className='text-purple-600' href='https://github.com/Atif-Bashir-1998/Weat-React' target='_blank'>Github</a></small>
      </section>

    </div>
  )
}

export default About