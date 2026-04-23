import { useState } from "react";
import ShinyText from "../ShinyText/ShinyText";
import "./DetailedPersonalInfo.css";

export default function DetailedPersonalInfo({ isOpen, onClose }) {
  if (!isOpen) return null;

  const personalData = {
    name: "Dhinesh B",
    title: "Full Stack Developer",
    photo: "./assets/Dhinesh.png",
    bio: "A passionate application and web developer dedicated to crafting modern, high-performance digital experiences through innovative and user-friendly solutions.",
    email: "dinesh7091566641@gmail.com",
    phone: "+91 7397576726",
    location: "India",
    instagram: "d_i_n_e_s_h_b__41",
    education: [
      {
        degree: "Bachelor of Technology",
        institution: "KIT and KIM Technical Campus",
        year: "2021 - 2025",
        field: "Computer Science and engineering",
      },
      {
        degree: "Higher Study",
        institution: "Sethu Irani Metriculation Higher Secondary School",
        year: "2019-2020",
        feild: "Computer Science ",
      },
    ],
    experience: [
      
    ],
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "Express.js",
      "Java"
    ],
    achievements: [
      "Completed 9+ successful projects",
      "1+ years of development experience",
      "GPA: 3.81/4.00",
      "Expert in Full Stack Development",
    ],
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="detailed-info-modal bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] rounded-3xl border border-violet-500/40 max-w-4xl w-full my-8 shadow-2xl top-30">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center hover:bg-violet-500/20 rounded-full transition-all"
        >
          ✕
        </button>

        {/* Header Section */}
        <div className="p-8 border-b border-violet-500/30">
          <div className="flex flex-col sm:flex-row gap-6  items-start sm:items-center">
            <img
              src={personalData.photo}
              alt={personalData.name}
              className="w-40 h-40 rounded-2xl border-2 border-violet-500/50 object-cover"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">
                <ShinyText
                  text={personalData.name}
                  disabled={false}
                  speed={3}
                />
              </h1>
              <p className="text-xl text-violet-400 mb-3">
                {personalData.title}
              </p>
              <p className="text-gray-300 mb-4">{personalData.bio}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-violet-400 hover:text-violet-300"
                >
                  📧 {personalData.email}
                </a>
                <span className="text-green-500">{personalData.phone}</span>
                <span className="text-gray-500">
                  📍 {personalData.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-violet-400">
              Education
            </h2>
            <div className="space-y-4">
              {personalData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50"
                >
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-violet-400">{edu.institution}</p>
                  <p className="text-sm text-gray-400">
                    {edu.year} • {edu.field}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-violet-400">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {personalData.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-violet-500/20 border border-violet-500/50 rounded-full text-violet-300 text-sm hover:bg-violet-500/30 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-violet-400">
              Achievements
            </h2>
            <div className="space-y-2">
              {personalData.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="text-violet-400 mt-1">✓</span>
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-violet-500/30 flex justify-between items-center">
          <a
            href={`https://instagram.com/${personalData.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 transition-colors"
          >
            Follow on Instagram →
          </a>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-violet-500/20 border border-violet-500/50 rounded-full text-violet-300 hover:bg-violet-500/30 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
