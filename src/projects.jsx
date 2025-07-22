import React from 'react'
import wecheck from "./assets/wecheck.png"
import still from "./assets/yoga.jpg"
import da from "./assets/da.png"; 
import credit from "./assets/credit.jpg"
import cloud from "./assets/cloud.png"

const projects = [
  {
    title: 'WeCheck',
    description: 'This is a collaborative web application designed to simplify roommate living by managing shared bills, tracking chores, and promoting accountability through an intuitive interface and real-time updates.',
    link: 'https://wecheck-app.vercel.app',
    image: wecheck,
  },
  {
    title: 'Still',
    description: 'This is a full-stack AI-powered web application that helps users identify, express, and better understand their emotions through mood logging and intelligent feedback. Integrates NLP-based analysis to promote emotional awareness and personal well-being.',
    link: 'https://still-mood.vercel.app/',
    image: still, 
  },
  {
    title: 'Data Analysis for WTV Consulting',
    description: 'Developed interactive dashboards with a team of fourto analyze patient volume, referral patterns, and clinical trends, enabling data-driven decision-making for healthcare operations.',
    link: 'https://public.tableau.com/app/profile/paige.lynch/viz/WTVDashboardHealthcareOperationalDataInitiative/WTVConsultingDashboard1',
    image: da, 
  },
  {
    title: 'Credit Score Simulator',
    description: 'This web app Helps users simulate how different financial behaviors affect their credit score.',
    link: 'https://wecheck-app.vercel.app',
    image: credit,
  },
  {
    title: 'HybridCloudHub',
    description: 'This web app simulates a real-world enterprise hybrid IT environment by integrating an on-premises Active Directory with AWS Managed Microsoft AD. It enables federated identity, secure file sharing, and remote access via Amazon WorkSpaces',
    link: 'https://wecheck-app.vercel.app',
    image: cloud,
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