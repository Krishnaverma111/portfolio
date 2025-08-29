import React from 'react';

export default function Experience() {
  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-xl">
        <h1 className="text-center text-2xl font-bold mb-6">Experience</h1>

        {/* Sqilco */}
        <div className="border-2 border-gray-300 rounded-xl p-4 shadow-md mb-4">
          <h2 className="text-xl font-semibold">Sqilco</h2>
          <p className="text-sm text-gray-600 mb-2">2025 - Present</p>
          <p>
            Working on the <span className="font-semibold">MERN stack</span>, where I
            have completed multiple frontend development tasks and conducted training sessions,
            helping students and interns improve their skills.
          </p>
        </div>

        {/* V3i Technology */}
        <div className="border-2 border-gray-300 rounded-xl p-4 shadow-md mb-4">
          <h2 className="text-xl font-semibold">V3i Technology</h2>
          <p className="text-sm text-gray-600 mb-2">July 2023 - September 2024</p>
          <p>
            Worked as a developer with a focus on{" "}
            <span className="font-semibold">MVC .NET</span>, gaining valuable experience in
            application development and project execution.
          </p>
        </div>

        {/* Balaji Infotech */}
        <div className="border-2 border-gray-300 rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-semibold">Balaji Infotech, Kanpur</h2>
          <p className="text-sm text-gray-600 mb-2">January 2023 - June 2023</p>
          <p>
            Completed internship in software and web development, building a strong foundation
            in coding practices and real-world project handling.
          </p>
        </div>
      </div>
    </div>
  );
}
