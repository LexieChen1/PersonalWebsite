import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <section id="about" className="bg-black text-white px-6 sm:px-20 py-16">
      <div className="grid md:grid-cols-3 gap-10 items-start w-full">
        {/* Left: Profile Image */}
        <div className="flex justify-center">
          <img
            src= "/pfp.jpg"
            alt="Lexie"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="md:col-span-2 border-l border-gray-600 pl-10 space-y-6">
          <h2 className="text-5xl mb-10 font-marker">ABOUT ME</h2>
          <p className="text-gray-300">
            Hi there! My name is Lexie - 陈欣雯. I'm a third year Computer Science student at the University of Virginia, graduating in May 2027. I'm passionate about full-stack development and user-centered design.
            I'm also drawn to the intersection of business and tech, and I'm exploring roles like product and project management in the tech space.
          </p>
          <p className="text-gray-300">
            I'm currently seeking internship opportunities in software development or data analysis.         
          </p>
          <p className="text-gray-300">
            Outside of tech, you can find me experimenting with new recipes, going out with friends, capturing moments through photography, meditating, journaling, or enjoying a good movie.
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
                    Python, Java, C++, Swift, JavaScript, TypeScript, SQL
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-bold">Web Development & Frameworks</h4>
                  <p className="text-gray-300">
                   HTML, CSS, React, React Native, Angular, Node.js, Spring Boot, Django, Express, Tailwind CSS, JUnit, SnapKit
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-bold">Data Engineering, Cloud, & Tools</h4>
                  <p className="text-gray-300">
                    PostgreSQL, MongoDB, AWS S3, Kafka, Git, Docker, Firebase, SQLite, Adobe Suite, LaTeX
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-bold">Data Analysis & Machine Learning</h4>
                  <p className="text-gray-300">
                    K-Means, MDS, Logistic Regression, Power BI
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
                  B.A. in Computer Science, Minor in Data Science 2023 – Present
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