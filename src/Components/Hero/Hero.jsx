import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import logo from "../../assets/images/krishna.png";
import PdfFile from "../../assets/pdf/krishna Resume.pdf"; 

export default function Hero() {


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PdfFile;
    link.download = 'Krishna.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 p-6 min-h-screen'>

    
      <div className='w-full md:w-1/2 flex flex-col items-start gap-6'>

        <TypeAnimation
          className='text-gray-500 text-xl sm:text-2xl'
          sequence={[
            1000,
            'Web Designer',
            1000,
            'Front-end Developer',
            1000,
            'Creative Coder',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />

        <h1 className='text-3xl sm:text-4xl font-bold'>Hey, I Am</h1>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-fuchsia-700'>KRISHNA VERMA</h1>

        <p className='text-base sm:text-lg text-white'>
          I am a front-end developer with 2.5 Years of experience.
        </p>

        <div className='flex items-center gap-4 flex-wrap'>
          <button
            className='border-2 px-4 py-2 rounded-xl shadow-lg shadow-fuchsia-700 transform transition-transform duration-500 hover:scale-110 cursor-pointer'
            onClick={handleDownload}
          >
            Download CV
          </button>

         <a href="https://github.com/Krishnaverma111?tab=repositories"> <FaGithub className='text-3xl sm:text-4xl cursor-pointer transition-transform hover:scale-110' /></a>
        <a href="https://www.linkedin.com/in/krishna-verma-5374aa257/">  <IoLogoLinkedin className='text-3xl sm:text-4xl cursor-pointer transition-transform hover:scale-110' /></a>
          <FaInstagram className='text-3xl sm:text-4xl cursor-pointer transition-transform hover:scale-110' />
        </div>
      </div>

    
      <div className='w-full md:w-1/2 flex justify-center'>
        <img className='w-64 sm:w-80 md:w-[400px] h-auto object-contain rounded-lg' src={logo} alt="Krishna Verma" />
      </div>
    </div>
  );
}