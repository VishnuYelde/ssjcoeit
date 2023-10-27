import React from 'react'
import collegeLogo from '../assets/clg_logo.png';
import itsaLogo from '../assets/ITSA_logo.png';
import newsGif from '../assets/header/news.gif';
import vivaDatesImg from "/src/assets/viva_dates_sem5.jpg"
import UT from "/src/assets/sem_5_exam.pdf";
import Marquee from "react-fast-marquee";


const Header = () => {
  return (
    <div className="pt-3">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center mb-4">

        {/*----------------- College LOGO ---------------- */}
        <div className="college_logo">
          <a href="https://shivajiraojondhalecoe.org.in/" target="_blank">
            <img src={collegeLogo} alt="College Logo" width="120" />
          </a>
        </div>

        {/*----------------- DEPT AND COLLEGE NAME ----------------*/}
        <div className="header_text text-center">
          <a href="/">
            <h1 className="font-bold text-sm md:text-[1.55rem] text-[#17375D] tracking-wide">Department Of Information Technology (IT)</h1>
            <h2 className="md:block text-xs md:text-[1.05rem] font-semibold mt-2">Shivajirao S. Jondhale College Of Engineering, Dombivli (SSJCOE)</h2>
            <h2 className="hidden md:block md:text-[0.9rem] font-medium tracking-wide text-gray-600">Developed By: Aditya Sharma, Vishnu Yelde and Prachiti Yadav</h2>
          </a>
        </div>

        {/*--------------------- ITSA LOGO -----------------------*/}
        <div className="itsa_logo">
          <a href="https://www.google.com" target="_blank">
            <img src={itsaLogo} alt="ITSA Logo" width="120" />
          </a>
        </div>
      </div>


      {/* -------------------------- Announcement Section ------------------------------ */}
      <div className="border-gray-300 border-[1px] p-[4px] text-blue-700">
        <Marquee behavior="" direction="left" id="marquee" pauseOnHover="true">
          <section className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={newsGif} alt="news gif animation" width="40" />
              <a href={vivaDatesImg} target='blank'>
                <p className="text-blue-600 hover:text-blue-700 hover:underline">Viva/Oral is starting from 27th October 2023</p>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img src={newsGif} alt="news gif animation" width="40" />
              <a href={UT} target='blank'>
                <p className="text-blue-600 hover:text-blue-700 hover:underline">Semester V Exams starts from 22nd November 2023</p>
              </a>
            </div>
          </section>
        </Marquee>
      </div>


    </div>
  )
}

export default Header