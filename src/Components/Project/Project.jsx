import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, Element } from 'react-scroll';


const projects = [
  {
    title: "Project #1",
    description: "UI for frontend development using React.",
    image: "/src/assets/images/sqilco.jpg", 
    github: "#",
    site: "https://sqilco.com/internships"
  },
 
];

export default function Project() {
  return (
    <Element name='project'>
        <div className='flex flex-col items-center py-10'>
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-6 mb-10`}
        >
          <img
            className='h-[300px] w-[400px] object-cover rounded-lg shadow-md'
            src={project.image}
            alt={project.title}
          />
          <div className='text-center md:text-left'>
            <h3 className='text-xl font-semibold text-gray-100 mb-2'>{project.title}</h3>
            <p className='text-gray-300 mb-4'>{project.description}</p>
            <div className='flex justify-center md:justify-start gap-4'>
              <a  href={project.site}
                className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>
               
              
                View Site
              </a>
              <a
                href={project.github}
                className='px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition'
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </Element>
  
  );
}
