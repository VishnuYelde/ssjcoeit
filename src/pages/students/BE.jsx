import React from 'react'
import SS from "/src/assets/studentslist.pdf"
import rtt from "/src/assets/TTSem5.jpg"
import TS from "/src/assets/students/TEIT_Syllabus_MU.pdf"

const BE = () => {
  return (
    <div className='container flex md:flex-row flex-col gap-10 justify-between mt-10 mb-20 md:mb-[13rem]' style={{padding: 20}}>
      <div className='flex flex-col gap-4'>
        <div className='flex font-semibold'>Student List</div>
        <a href={SS} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          2023-24
        </a>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex font-semibold'>Time Table</div>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 7 Regular 2023-24
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 7 Winter Exam 2023-24
        </a>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex font-semibold'>Syllabus</div>
        <a href={TS} target='_blank' className=' font-[400] text-blue-500 hover:underline'>
          SEM 7 & SEM 8
        </a>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex font-semibold'>Result</div>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 5 Result 2022-23
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 6 Result 2022-23
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 5 KT Result 2022-23
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 6 KT Result 2022-23
        </a>
      </div>
    </div>
  )
}

export default BE