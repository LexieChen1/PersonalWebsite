import React from 'react'
import wecheck from "./assets/wecheck.png"
import still from "./assets/yoga.jpg"
import da from "./assets/da.png"; 


const projects = [
  {
    title: 'WeCheck',
    description: 'A web app to manage roommate bills & chores.',
    link: 'https://wecheck-app.vercel.app',
    image: wecheck,
  },
  {
    title: 'Still',
    description: 'An AI integrated mood identifier where people can express and learn about their feelings ',
    link: 'https://still-mood.vercel.app/',
    image: still, 
  },
  {
    title: 'Data Analysis for WTV Consulting',
    description: 'Created interactive dashboards to visualize patient trends and referrals for a health clinic.',
    link: 'https://public.tableau.com/app/profile/paige.lynch/viz/WTVDashboardHealthcareOperationalDataInitiative/WTVConsultingDashboard1',
    image: da, 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white px-4 py-5">
      <h2 className="text-5xl font-marker mb-9 text-center">PROJECTS</h2>

      <div className="grid md:grid-cols-3 gap-6 px-4 sm:px-10 w-full">
        {projects.map((proj) => (
          <a
            key={proj.title}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 rounded-md overflow-hidden hover:shadow-lg transition"
          >
            <img src={proj.image} alt={proj.title} className="w-full h-80 object-cover" />
            <div className="p-3">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-gray-300 mt-1 text-sm">{proj.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}