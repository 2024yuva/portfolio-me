import React from 'react'
import { motion } from 'framer-motion'

const featured = [
  {
    title: 'AI Payment Reminder',
    desc: 'Agent that automates payment reminders and voice interaction workflow using n8n.',
    link: 'https://github.com/AI-Developing-Hunters/AI-Payment-Reminder-Agent'
  },
  {
    title: 'Netflix Clone',
    desc: 'A Netflix-like UI with auth and media browsing front-end.',
    link: 'https://github.com/2024yuva/Netflix-clone-'
  }
]

export default function Projects(){
  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellowsoft">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-slate-600 mt-2">Featured work and selected projects.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <motion.a key={i} href={p.link} target="_blank" rel="noreferrer" initial={{ y: 10, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{delay:0.1*i}} className="block p-6 bg-white rounded-xl shadow hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                </div>
                <div className="text-sm text-slate-400">View</div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8">
          <a href="https://www.github.com/2024yuva" target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded-full border border-transparent bg-gradient-to-r from-yellowwarm/30 via-yellowdeep/20 to-white/10 backdrop-blur-sm hover:from-yellowdeep/40 hover:via-yellowwarm/30 transition">Visit other projects</a>
        </div>
      </div>
    </section>
  )
}