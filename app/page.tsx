'use client';

import { Github, Linkedin, Mail, Terminal, TrendingUp, Brain, Clapperboard, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30">
      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              Edgar Zhu
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Exploring the intersection of <span className="font-semibold text-emerald-600 dark:text-emerald-400">Computer Science</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">Economics</span>.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Business Minor | Data Science & AI Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/Edgarzhu7" icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href="mailto:your.email@example.com" icon={<Mail className="w-5 h-5" />} label="Email" />
          </div>
        </section>

        {/* About / Background */}
        <section className="mt-24 space-y-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Terminal className="w-6 h-6 text-emerald-500" />
            Background
          </h2>
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I am a double major in Computer Science and Economics with a minor in Business. 
              My academic journey is driven by a fascination with complex systems—whether they are 
              computational algorithms or market dynamics.
            </p>
            <p className="mt-4">
              I focus on leveraging Data Science and Artificial Intelligence to solve real-world problems 
              and create value. My goal is to bridge the gap between technical innovation and strategic business execution.
            </p>
          </div>
        </section>

        {/* Interests Grid */}
        <section className="mt-24 space-y-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-500" />
            Interests & Passions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <InterestCard 
              icon={<Brain className="w-8 h-8 text-purple-500" />}
              title="AI & Data Science"
              description="Deep diving into machine learning models and data analytics to uncover insights and automate intelligence."
            />
            <InterestCard 
              icon={<TrendingUp className="w-8 h-8 text-emerald-500" />}
              title="Entrepreneurship"
              description="Building scalable solutions and understanding the economic mechanics behind successful startups."
            />
            <InterestCard 
              icon={<Clapperboard className="w-8 h-8 text-red-500" />}
              title="Movies"
              description="Appreciating cinematic storytelling and visual arts. A great film is like elegant code—efficient and moving."
            />
            <InterestCard 
              icon={<Trophy className="w-8 h-8 text-amber-500" />}
              title="Football"
              description="Strategizing on and off the field. The beautiful game teaches teamwork, tactics, and resilience."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Edgar Zhu. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href}
      className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}

function InterestCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
