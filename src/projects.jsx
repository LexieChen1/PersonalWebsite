import React from 'react'
import wecheck from "./assets/wecheck.png"
import still from "./assets/yoga.jpg"
import da from "../public/da.png"


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
    <section id="projects" className="bg-background text-black py-16 px-6">
      <h2 className="text-4xl font-bold font-mono text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((proj) => (
          <a
            key={proj.title}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition"
          >
            <img src={proj.image} alt={proj.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-600 mt-2">{proj.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}