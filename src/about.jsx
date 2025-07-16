import React from 'react'
import profilePic from "./assets/pfp.JPG"

export default function About() {
  return (
    <section id="about" className="bg-background text-white py-16 px-6">
      <h2 className="text-4xl font-bold mb-10 font-mono inline-block">About Me</h2>
      <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        
        {/* Bio + Info */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <p className="text-gray-300 mt-2">
              I'm a Computer Science student passionate about full-stack development and user-centered design.
              I combine creativity and technical skill to build intuitive web applications.
            </p>
          </div>

          {/* Education & Experience Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1e293b] p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-1">🎓 Education</h4>
              <p className="font-medium">B.A. in Computer Science</p>
              <p className="font-medium">Minor in Data Science</p>
              <p className="text-sm text-gray-400">University of Virginia</p>
              <p className="text-sm text-gray-400">2023 – Present</p>
              <p className="text-sm text-blue-400">Dean’s List (2024)</p>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-1">💼 Experience</h4>
              <p className="font-medium">Software Testing Intern</p>
              <p className="text-sm text-gray-400">SnapBit LLC · Summer 2025</p>
              <p className="font-medium mt-2">Student Marketing Intern</p>
              <p className="text-sm text-gray-400">UVA Center for Transportation Studies</p>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-[#1e293b] p-6 rounded-lg text-center">
          <img src={profilePic} alt="profile"className="w-60 h-60 object-cover rounded-full mx-auto mb-4 border-4 border-white"/>
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-2">3.8 GPA</span>
          <h3 className="text-2xl font-bold">Lexie Chen</h3>
          <p className="text-gray-400 text-sm mb-4">CS Student @ UVA</p>
          
          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">React.js</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">Node.js</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">NOSQL</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">AWS</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">Spring Boot</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">Docker</span>
            <span className="bg-[#334155] px-3 py-1 rounded-full text-sm">PostgreSQL</span>
          </div>

          {/* Resume Button */}
          <a
            href="/assets/LexieChen.pdf"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:opacity-90"
            download
          >
            ⬇️ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}