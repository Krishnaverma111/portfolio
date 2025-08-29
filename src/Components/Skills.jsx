import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiPostman } from "react-icons/si";
import { Link, Element } from 'react-scroll';



const skills = [
  { icon: <FaHtml5 className="text-4xl text-amber-600" />, name: 'HTML' },
  { icon: <FaCss3Alt className="text-4xl text-blue-700" />, name: 'CSS' },
  { icon: <IoLogoJavascript className="text-4xl text-yellow-500" />, name: 'JavaScript' },
  { icon: <FaReact className="text-4xl text-blue-500" />, name: 'React' },
  { icon: <FaNodeJs className="text-4xl text-green-600" />, name: 'Node.js' },
  { icon: <SiPostman className="text-4xl text-orange-500" />, name: 'Postman' },
];

export default function Skills() {
  return (
    <Element name='skill'>

      <div className="flex justify-center px-10 py-6">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl font-bold text-center">Skills</h1>
        <p className="text-lg text-center">I have worked on various frontend projects. Check them out!</p>

        <div className="grid grid-cols-2 gap-4 bg-gray-800 p-4 rounded-lg">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              {skill.icon}
              <span className="text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Element>
  );
}
