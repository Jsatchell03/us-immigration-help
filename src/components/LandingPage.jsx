import { useState } from 'react'
import { useNavigate } from "react-router";
import '../App.css'
import fullLogo from "../assets/Full_Logo.jpg"

function LandingPage() {
  let navigate = useNavigate()
  return (
    <>
      <div className="flex justify-center" id="main-logo">
        <img className="h-lg w-lg object-center" src={fullLogo}/>
      </div>
      <h1 className="text-3xl font-bold text-center">
          Your step-by-step guide through the immigration process
      </h1>
      <div id='start-btn' className='flex justify-center py-10'>
        <button className="bg-blue2 hover:bg-blue3 text-white font-bold py-2 px-4 rounded h-lg w-lg"onClick={() => navigate("/questionnaire")}>
        Get Started
      </button>
      </div>
      <h2 className='text-2xl font-bold text-center'>How it works</h2>
      <div id="icons">
        
      </div>
      <h2 className='text-2xl font-bold text-center'>Safe, simple, accurate</h2>
      <ul>
        <li>Your data stays secure and confidential</li>
        <li>Built with official government resources</li>
        <li>Simple guidance anyone can follow</li>
      </ul>
    </>
  )
}

export default LandingPage
