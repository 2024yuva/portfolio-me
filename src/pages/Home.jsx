import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9E6]">
      {/* Hero Section */}
      <section id="home" className="text-center px-8 pt-24 pb-20 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-[#B8838C] mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
  Yuvarrunjitha R S
</h1>
        <p className="text-xl text-[#555] mb-8">
          Student Developer | AI Enthusiast | Building Ideas That Shine
        </p>

        {/* Skill Tags - Three in a row */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <span className="px-5 py-2 bg-[#E8D5FF] text-[#6B4B99] rounded-full text-sm font-medium flex items-center gap-2">
            <span className="text-base">💻</span> Engineering
          </span>
          <span className="px-5 py-2 bg-[#FFD5E5] text-[#B85678] rounded-full text-sm font-medium flex items-center gap-2">
            <span className="text-base">🎙️</span> AI-ML
          </span>
          <span className="px-5 py-2 bg-[#D5F0FF] text-[#5694B8] rounded-full text-sm font-medium flex items-center gap-2">
            <span className="text-base">✨</span> Vibe Coding
          </span>
        </div>

        {/* CTA Button */}
        <Link to="/projects">
          <button className="bg-[#FF69B4] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#FF1493] transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2">
            Explore My Work
            <ArrowRight size={20} />
          </button>
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-bold text-[#2C3E50] mb-6">
              Hey there! 👋
            </h2>
            <div className="text-[#555] space-y-5 text-lg leading-relaxed">
              <p>
                Just a <span className="font-semibold">Sophomore</span> student developer who loves turning ideas into reality. 
                When I'm not coding, you'll find me exploring new technologies, working on 
                exciting projects, or sharing my journey with the tech community.
              </p>
              <p>
                My motto's always been learn, explore, do it. I love diving into new challenges
                and pushing the boundaries of what's possible with code and AI.
              </p>
              <p>
                <span style={{ 
                  fontFamily: "'Cormorant Garamond', serif", 
                  fontStyle: 'italic', 
                  fontWeight: 300, 
                  color: '#B8838C', 
                  fontSize: '1.1em' 
                }}>
                  Debugging my code and my life simultaneously—both are a work in progress and that's okay 🫶
                </span>
              </p>
            </div>

            {/* Secondary CTA */}
            <Link to="/contact">
              <button className="mt-8 border-2 border-[#2C3E50] text-[#2C3E50] px-6 py-3 rounded-full font-semibold hover:bg-[#2C3E50] hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                Let's Connect
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#FFD5E5]/30 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-[#FFE4E9] flex items-center justify-center mb-6">
                
                <img style={{ borderRadius: '50%' }}
        src="/src/image/go.jpeg" 
        alt="Yuvarrunjitha" 
        className="w-full h-full object-cover"
      />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">
                Always Exploring
              </h3>
              <p className="text-[#555] text-sm">
                Creating impactful projects and sharing my journey with the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}