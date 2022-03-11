import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<nav className='bg-gray-600 text-white p-5 flex justify-between items-center'>
			<Link to="/" className='text-2xl'>Weat-React</Link>
			<div className='flex gap-5'>
				<Link to="/astronomy">Astronomy</Link>
				<Link to="/realtime">Realtime</Link>
				<Link to="/forecast">Forecast</Link>
				<Link to="/history">History</Link>
			</div>
		</nav>
	)
}
