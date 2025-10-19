import React from 'react'

export default function Contact(){
  return (
    <section className="py-16 bg-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-slate-600 mt-2">Feel free to reach out on LinkedIn.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="font-semibold">Email</div>
            <a className="text-sm text-slate-600" href="mailto:your-email@example.com">yuvarrunjithars@gmail.com</a>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="font-semibold">Phone</div>
            <a className="text-sm text-slate-600" href="tel:+1234567890">+91 9566066345</a>
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="font-semibold">Profiles</div>
            <div className="mt-2 flex gap-3">
              <a href="https://www.github.com/2024yuva" target="_blank" rel="noreferrer" className="underline">GitHub</a>
              <a href="https://www.linkedin.com/in/yuvarrunjitha-r-s-05979a302/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}