import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

export default function App(){
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="py-4 px-6 bg-white/60 backdrop-blur-sm shadow-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="text-2xl font-bold text-yellowwarm">Yuvarrunjithars</div>
            <nav className="space-x-4">
              <Link className="hover:underline" to="/">Home</Link>
              <Link className="hover:underline" to="/projects">Projects</Link>
              <Link className="hover:underline" to="/skills">Skills</Link>
              <Link className="hover:underline" to="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>

        <footer className="py-6 border-t mt-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">© {new Date().getFullYear()} Yuvarrunjithars</div>
            <div className="flex gap-4">
              <a href="https://www.github.com/2024yuva" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/yuvarrunjitha-r-s-05979a302/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}