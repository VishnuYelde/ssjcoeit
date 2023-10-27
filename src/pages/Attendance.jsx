import React from 'react'
import {Link} from 'react-router-dom'

const Attendance = () => {
  return (
    <div className="mt-20 mb-[18rem] text-center">
        <h1 className="font-bold text-3xl">Sorry, this page is under development</h1>
        <p className="mt-5 text-lg">Please try again later</p>
        <Link to="/" className="bg-blue-500 text-white py-3 px-5 rounded mt-5 inline-flex hover:bg-blue-600 shadow-md">Back to HomePage</Link>
    </div>
  )
}

export default Attendance