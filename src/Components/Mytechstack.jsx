import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";

export default function Mytechstack() {
  return (
    <div className=' flex justify-center'>
        <div className=' flex gap-4 items-center'>
            <h1>My Teach Stack </h1>

            <FaHtml5 className=' text-5xl text-orange-700'/>
            <FaCss3Alt  className=' text-5xl text-blue-700'/>
            <IoLogoJavascript className=' text-5xl text-yellow-700'/>
            <FaReact className=' text-5xl text-blue-700'/>
            <FaNodeJs className=' text-5xl text-green-700'/>
        </div>
    </div>
  )
}
