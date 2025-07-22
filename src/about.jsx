import React, { useState } from 'react';
import profilePic from './assets/pfp.jpg';

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <section id="about" className="bg-black text-white px-6 sm:px-20 py-16">
      <div className="grid md:grid-cols-3 gap-10 items-start w-full">
        {/* Left: Profile Image */}
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Lexie"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="md:col-span-2 border-l border-gray-600 pl-10 space-y-6">
          <h2 className="text-5xl mb-10 font-marker">ABOUT ME</h2>
          <p className="text-gray-300">
            I'm a Computer Science student passionate about full-stack development and user-centered design.
            I combine creativity and technical skill to build intuitive web applications.
          </p>

          {/* Tab Bar */}
          <div className="flex gap-8 font-semibold text-lg border-b border-gray-600 pb-2">
            {["Experience", "Education", "Skills"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer transition-all ${
                  activeTab === tab
                    ? "text-white border-b-2 border-blue-400 pb-1"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-4">
            {activeTab === "Skills" && (
              <>
                <div>
                  <h4 className="text-blue-400 font-bold">Programming Languages</h4>
                  <p className="text-gray-300">
                    Python, Java, C, C++, C#, Swift, JavaScript, TypeScript, SQL
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-bold">Web Development & Frameworks</h4>
                  <p className="text-gray-300">
                    HTML, CSS, Django, React, React Native, Angular, JUnit, SnapKit
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-bold">Data Engineering, Cloud, & Tools</h4>
                  <p className="text-gray-300">
                    PySpark, Snowflake, AWS S3, Kafka, Git, Agile, Heroku, SQLite, Adobe, LaTeX
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-bold">Data Analysis & Machine Learning</h4>
                  <p className="text-gray-300">
                    K-Means, MDS, Logistic Regression, PCA, Power BI
                  </p>
                </div>
              </>
            )}

            {activeTab === "Experience" && (
              <div>
                <h4 className="text-blue-400 font-bold">Software Testing Intern</h4>
                <p className="text-gray-300">SnapBit LLC · Summer 2025</p>
                <h4 className="text-blue-400 font-bold mt-4">Student Marketing Intern</h4>
                <p className="text-gray-300">
                  UVA Center for Transportation Studies
                </p>
              </div>
            )}

            {activeTab === "Education" && (
              <div>
                <h4 className="text-blue-400 font-bold">University of Virginia</h4>
                <p className="text-gray-300">
                  B.A. in Computer Science, Minor in Data Science · 2023 – Present
                </p>
                <p className="text-sm text-blue-400">Dean’s List (2024)</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}