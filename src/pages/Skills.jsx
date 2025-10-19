import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Express.js']
  },
  {
    title: 'Mobile Development',
    skills: ['React Native', 'Flutter', 'iOS Development', 'Android Development', 'Kotlin']
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Python', 'Java', 'Express.js', 'Django', 'Spring Boot', 'REST APIs', 'GraphQL']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions']
  },
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go', 'Rust', 'SQL']
  },  
  {
    title: 'Tools & Technologies',
    skills: ['VS Code', 'IntelliJ IDEA', 'Postman', 'Figma', 'MongoDB', 'PostgreSQL', 'Redis', 'Firebase']
  }
];

export default function Skills() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="text-slate-600 mt-2">Technologies I use to build projects.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="p-6 bg-white rounded-lg shadow border border-pink-200"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}