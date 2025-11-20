'use client';

import { Github, Linkedin, Mail, Terminal, TrendingUp, Brain, Clapperboard, Trophy, Camera, Rocket, BookOpen, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30 relative overflow-hidden">
      
      {/* Watercolor Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl animate-blob opacity-70 mix-blend-multiply dark:mix-blend-overlay" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl animate-blob opacity-70 mix-blend-multiply dark:mix-blend-overlay" style={{ animationDelay: '2000ms' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl animate-blob opacity-70 mix-blend-multiply dark:mix-blend-overlay" style={{ animationDelay: '4000ms' }} />
      </div>

      <main className="max-w-5xl mx-auto px-6 py-20 md:py-32 relative z-10">
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 animate-fade-in">
          <div className="space-y-6 flex-1 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                Edgar Zhu
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Exploring the intersection of <span className="font-semibold text-emerald-600 dark:text-emerald-400">Computer Science</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">Economics</span>.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
                <span className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800">Business Minor</span>
                <span className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800">Data Science</span>
                <span className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800">AI Startup</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
              <SocialLink href="https://github.com/Edgarzhu7" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="mailto:your.email@example.com" icon={<Mail className="w-5 h-5" />} label="Email" />
            </div>
          </div>

          <div className="relative shrink-0 group">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
              {/* Avatar Placeholder - Replace with your actual image in public/profile.jpg */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-slate-400">
                <span className="text-sm font-medium">Add profile.jpg</span>
              </div>
              <Image 
                src="/profile.jpg" 
                alt="Edgar Zhu" 
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg animate-bounce duration-[3000ms]">
              <span className="text-2xl">👋</span>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="mt-24 md:mt-32 space-y-8">
          <SectionTitle icon={<Terminal className="w-6 h-6 text-emerald-500" />} title="Background" />
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed bg-white/50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
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

        {/* Research Section */}
        <section className="mt-24 space-y-8">
          <SectionTitle icon={<BookOpen className="w-6 h-6 text-indigo-500" />} title="Research" />
          <div className="grid gap-6">
            <ProjectCard 
              title="AI-Driven Market Analysis"
              category="Economics & Machine Learning"
              description="Investigating the impact of sentiment analysis on high-frequency trading algorithms. Utilizing NLP models to process financial news and predict short-term stock movements."
              link="#"
            />
            <ProjectCard 
              title="Computational Game Theory"
              category="Computer Science"
              description="Developing simulation models to understand cooperative behavior in decentralized networks. Analyzing equilibrium states in multi-agent systems."
              link="#"
            />
          </div>
        </section>

        {/* Side Projects */}
        <section className="mt-24 space-y-8">
          <SectionTitle icon={<Rocket className="w-6 h-6 text-rose-500" />} title="Side Projects" />
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Portfolio Analytics Dashboard"
              category="Full Stack Web App"
              description="A real-time dashboard for tracking personal investment portfolios, integrating with stock market APIs and providing visual analytics."
              link="#"
            />
            <ProjectCard 
              title="Campus Event Aggregator"
              category="Mobile App"
              description="A centralized platform for university students to discover and manage campus events, built with React Native."
              link="#"
            />
          </div>
        </section>

        {/* Photography Portfolio */}
        <section className="mt-24 space-y-8">
          <SectionTitle icon={<Camera className="w-6 h-6 text-amber-500" />} title="Photography" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Placeholders for photography */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square relative group overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800 hover:shadow-lg transition-all cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-500">
                  <Camera className="w-8 h-8 opacity-30" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/50 to-transparent">
                  <p className="text-white text-xs font-medium text-center">Photo {i}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">
            Capturing moments through the lens. View full gallery on <Link href="#" className="underline hover:text-slate-800 dark:hover:text-slate-200">Instagram</Link> or <Link href="#" className="underline hover:text-slate-800 dark:hover:text-slate-200">Flickr</Link>.
          </p>
        </section>

        {/* Interests Grid */}
        <section className="mt-24 space-y-8">
          <SectionTitle icon={<Brain className="w-6 h-6 text-blue-500" />} title="Interests" />
          <div className="grid md:grid-cols-2 gap-6">
            <InterestCard 
              icon={<Brain className="w-8 h-8 text-purple-500" />}
              title="AI & Data Science"
              description="Deep diving into machine learning models and data analytics to uncover insights."
            />
            <InterestCard 
              icon={<TrendingUp className="w-8 h-8 text-emerald-500" />}
              title="Entrepreneurship"
              description="Building scalable solutions and understanding economic mechanics."
            />
            <InterestCard 
              icon={<Clapperboard className="w-8 h-8 text-red-500" />}
              title="Movies"
              description="Appreciating cinematic storytelling and visual arts."
            />
            <InterestCard 
              icon={<Trophy className="w-8 h-8 text-amber-500" />}
              title="Football"
              description="Strategizing on and off the field. The beautiful game teaches teamwork."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 pb-10">
          <p>© {new Date().getFullYear()} Edgar Zhu. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-800 dark:text-slate-200">
      <div className="p-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
        {icon}
      </div>
      {title}
    </h2>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href}
      className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md text-slate-600 dark:text-slate-400 hover:scale-110"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}

function ProjectCard({ title, category, description, link }: { title: string; category: string; description: string; link: string }) {
  return (
    <Link href={link} className="block group">
      <div className="p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:border-emerald-200 dark:hover:border-emerald-900/50 backdrop-blur-sm">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{title}</h3>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{category}</span>
          </div>
          <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}

function InterestCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all shadow-sm hover:shadow-md backdrop-blur-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
