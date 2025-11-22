'use client';

import { Github, Linkedin, Mail, ArrowUpRight, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PhotoGallery } from './components/PhotoGallery';
import { FadeIn } from './components/FadeIn';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    
    // Apply initial theme
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative font-sans selection:bg-accent selection:text-white overflow-x-hidden">

      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Light mode background */}
         <div className={`absolute inset-0 bg-[url('/light_background.png')] bg-cover bg-center opacity-90 ${isDark ? 'hidden' : ''}`}></div>
         {/* Dark mode background */}
         <div className={`absolute inset-0 bg-[url('/dark_background.png')] bg-cover bg-center opacity-90 ${isDark ? '' : 'hidden'}`}></div>
         <div className={`absolute inset-0 ${isDark ? 'bg-background/30' : 'bg-background/0'}`}></div>
      </div>

      {/* Minimal Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${scrolled ? 'bg-background/90 backdrop-blur-md py-4 border-b border-border/50' : 'py-8 bg-transparent'}`}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between">
           <Link href="/" className="font-cormorant text-2xl italic font-medium tracking-tight z-50 relative hover:opacity-70 transition-opacity flex items-center gap-2">
             <div className="w-2 h-2 bg-accent rounded-full shadow-sm" />
             Edgar Zhu
           </Link>

           <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-muted-foreground">
             <Link href="#research" className="hover:text-foreground transition-colors">Research</Link>
             <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
             <Link href="#photography" className="hover:text-foreground transition-colors">Photography</Link>
           </nav>

           <div className="flex items-center gap-4">
             <button 
               onClick={toggleTheme}
               className="p-2 text-muted-foreground hover:text-accent transition-colors rounded-full hover:bg-muted/50"
               aria-label="Toggle theme"
             >
               {isDark ? <Sun strokeWidth={1.5} className="w-5 h-5" /> : <Moon strokeWidth={1.5} className="w-5 h-5" />}
             </button>
             <SocialLink href="https://github.com/Edgarzhu7" icon={<Github strokeWidth={1.5} className="w-5 h-5" />} />
             <SocialLink href="https://www.linkedin.com/in/edgar-zhu-145091279/" icon={<Linkedin strokeWidth={1.5} className="w-5 h-5" />} />
           </div>
        </div>
      </header>

      <main className="relative z-10">
        
        {/* Cinematic Hero & Intro Combined */}
        <section className="min-h-screen flex items-center px-6 md:px-12 max-w-screen-xl mx-auto pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            
            {/* Left Column: Headline */}
            <div className="space-y-8">
              <h1 className="font-cormorant font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground animate-fade-up">
                <span className="block opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>Syntax.</span>
                <span className="block opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>Systems.</span>
                <span className="block italic text-accent opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>Soul.</span>
              </h1>
              
              <div className="space-y-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                <div className="space-y-3 max-w-md">
                  <p className="flex items-center gap-4 text-xl md:text-2xl text-muted-foreground font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                    Building human-centered AI
                  </p>
                  <p className="flex items-center gap-4 text-xl md:text-2xl text-muted-foreground font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                    Analyzing complex economic systems
                  </p>
                  <p className="flex items-center gap-4 text-xl md:text-2xl text-muted-foreground font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                    Creating scalable startups
                  </p>
                </div>

                {/* Skills/Domains */}
                <div className="flex items-center gap-6 pt-2 text-foreground/60 font-mono text-sm">
                  <span>CS</span>
                  <span>•</span>
                  <span>Economics</span>
                  <span>•</span>
                  <span>Business</span>
                </div>

                <div className="flex flex-wrap gap-6 pt-2">
                  <Link href="mailto:dejiazhu@umich.edu" className="group flex items-center gap-2 text-sm font-medium bg-foreground text-background px-6 py-3 rounded-full hover:bg-accent transition-colors shadow-lg">
                    <Mail className="w-4 h-4" />
                    Get in touch 
                  </Link>
                  <Link href="#research" className="group flex items-center gap-2 text-sm font-medium border border-border px-6 py-3 rounded-full hover:bg-muted transition-colors backdrop-blur-sm">
                     View Research
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Avatar */}
            <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: '1.0s' }}>
              <div className={`${isDark ? 'bg-black/20 backdrop-blur-md' : ''} p-8 md:p-10 rounded-2xl ${isDark ? 'border border-white/20 shadow-sm' : 'border border-border/30'}`}>
                <div className="flex flex-col gap-6">
                  {/* Header with Avatar */}
                  <div className="flex items-center gap-6 border-b border-foreground/10 pb-6">
                    <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-full border border-border shadow-sm">
                       <Image 
                         src="/profile.jpg"
                         alt="Edgar Zhu"
                         fill
                         className="object-cover hover:scale-105 transition-transform duration-500"
                       />
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-1">About Me</span>
                      <h2 className="font-cormorant italic text-2xl text-foreground">Edgar Zhu</h2>
                    </div>
                  </div>

                  {/* Bio Text */}
                  <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                     <p>
                       I'm a senior at the <span className={`${isDark ? 'text-[#FFCB05]' : 'text-[#00274C]'} font-medium`}>University of Michigan</span> (Go Blue! 〽️), originally from Shenzhen, China.
                     </p>
                     <p>
                       My passion lies in building <span className="italic text-foreground">efficient, human-centered AI systems</span> that solve real-world problems. I've previously interned at <span className="font-medium text-foreground">Tencent</span> twice.
                     </p>
                     <p>
                       Currently, I'm building <a href="https://www.vizasound.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-accent/50 decoration-1 underline-offset-4 hover:text-accent transition-colors font-medium">Vizasound</a>, an AI startup integrating multi-modal generative models.
                     </p>
                     
                     <p className="text-sm font-mono text-muted-foreground/60 pt-2">
                       Soccer &nbsp;•&nbsp; Films &nbsp;•&nbsp; Traveling
                     </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-24 md:py-32 bg-muted/30">
           <div className="max-w-screen-xl mx-auto px-6 md:px-12">
             <FadeIn>
             <div className="flex items-baseline justify-between mb-16 border-b border-border pb-6">
                <h2 className="font-serif text-5xl md:text-6xl italic text-foreground">Research</h2>
                <span className="hidden md:block font-mono text-xs uppercase tracking-widest text-muted-foreground">Selected Works</span>
             </div>
             </FadeIn>
             
             <div className="space-y-0 divide-y divide-border/60">
                <ResearchItem 
                  title="Decoding Smartphone Prices: The Evolving Value of Features"
                  category="Economics & ML"
                  year="Dec 2024"
                  role="Independent Researcher"
                  description="Trained LASSO models to predict smartphone prices and computed Hedonic Jevons Indices, revealing heterogeneous trends in hardware feature importance. Automated data collection via Keepa API and custom Amazon crawlers."
                  link="https://github.com/Edgarzhu7/Decoding-Smartphone-Prices"
                />
                <ResearchItem 
                  title="Predicting Social Media's Impact on Mental Health"
                  category="Machine Learning"
                  year="Feb 2025"
                  role="Research Lead"
                  description="Led end-to-end ML research predicting addiction levels from behavioral data. Benchmarked six models (LSTM, FCNet, SVM, etc.), achieving 91% accuracy with LSTM using PyTorch."
                  link="https://github.com/Edgarzhu7/Predicting-social-medias-impact"
                />
                <ResearchItem 
                   title="Modeling Momentum in Soccer Using Markov Chains"
                   category="Sports Analytics"
                   year="Jan 2025"
                   role="Research Lead"
                   description="Constructed Markov Chain transition matrices from 142 professional matches to model state-to-state dynamics. Analyzed how shot events and possession resets impact goal transitions."
                   link="https://github.com/Edgarzhu7?tab=repositories"
                />
                <ResearchItem 
                   title="The Price of Faith: Economic Conditions and Religious Adherence"
                   category="Development Economics"
                   year="May 2024"
                   role="Research Assistant"
                   description="Published to NBER Working Group. Analyzed survey data from 80,000+ respondents across 45 African countries to estimate the price elasticity of religious adherence using Stata and Python."
                   link="https://www.nber.org/papers/w33482"
                />
             </div>
           </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 max-w-screen-xl mx-auto px-6 md:px-12">
           <FadeIn>
           <div className="flex items-baseline justify-between mb-16 border-b border-border pb-6">
              <h2 className="font-serif text-5xl md:text-6xl italic text-foreground">Projects</h2>
              <span className="hidden md:block font-mono text-xs uppercase tracking-widest text-muted-foreground">Venture & Code</span>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <ProjectCard 
                 title="Vizasound"
                 subtitle="Founder • Generative AI"
                 desc="AI startup integrating multi-modal generative models to produce custom songs and videos."
                 tags={["Founder", "Generative AI", "Startup"]}
                 link="https://www.vizasound.com/"
                 number="01"
              />
              <ProjectCard 
                 title="SmartCut"
                 subtitle="Engineering • Python/React"
                 desc="AI-powered video editing tool that automatically detects silence segments and provides interactive cutting workflow."
                 tags={["React", "Python", "OpenAI Whisper"]}
                 link="https://smartcut-frontend.onrender.com/"
                 number="02"
              />
           </div>
           </FadeIn>
        </section>

        {/* Photography */}
        <section id="photography" className="py-24 pb-32 bg-background text-foreground">
           <div className="max-w-screen-xl mx-auto px-6 md:px-12">
              <FadeIn>
              <div className="mb-16 flex justify-between items-end border-b border-border pb-6">
                 <h2 className="font-serif text-5xl md:text-6xl italic text-foreground">Photography</h2>
                 <p className="text-muted-foreground text-sm max-w-xs text-right hidden md:block">Capturing moments across the globe.</p>
              </div>
              <PhotoGallery /> 
              </FadeIn>
           </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 border-t border-border bg-background text-muted-foreground">
           <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="font-serif italic text-lg text-foreground">Edgar Zhu</span>
              <div className="flex gap-8 text-sm font-medium tracking-wide">
                 <a href="#" className="hover:text-accent transition-colors">Twitter</a>
                 <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
                 <a href="#" className="hover:text-accent transition-colors">GitHub</a>
              </div>
              <span className="text-xs font-mono opacity-50">&copy; {new Date().getFullYear()} Edgar Zhu.</span>
           </div>
        </footer>

      </main>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="p-2 text-muted-foreground hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
      {icon}
    </Link>
  );
}

function ResearchItem({ title, category, year, role, description, link }: { title: string; category: string; year: string; role: string; description: string; link?: string }) {
  return (
    <FadeIn>
    <Link href={link || "#"} className="group block py-10 cursor-pointer hover:bg-muted/40 transition-colors -mx-6 px-6 md:-mx-12 md:px-12 rounded-lg">
       <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
          <div className="md:col-span-2 flex flex-col gap-1">
             <span className="font-mono text-xs text-muted-foreground/60">{year}</span>
             <span className="text-xs font-medium text-accent">{role}</span>
          </div>
          <div className="md:col-span-5">
             <h3 className="text-2xl font-serif font-medium group-hover:text-accent transition-colors duration-300">{title}</h3>
             <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-2 block">{category}</span>
          </div>
          <div className="md:col-span-4 text-muted-foreground font-light leading-relaxed text-sm md:text-base">
             {description}
          </div>
          <div className="md:col-span-1 flex justify-end">
             <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-accent transition-colors" />
          </div>
       </div>
    </Link>
    </FadeIn>
  )
}

function ProjectCard({ title, subtitle, desc, tags, link, number }: { title: string; subtitle: string; desc: string; tags: string[]; link?: string; number: string }) {
  return (
    <Link href={link || "#"} target="_blank" className="group block space-y-6 p-8 border border-border hover:border-accent/50 rounded-lg transition-all duration-500 hover:bg-muted/30 hover:shadow-lg hover:shadow-accent/5">
       <div className="flex justify-between items-start">
          <span className="font-mono text-xs text-muted-foreground/50">{number}</span>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-accent transition-colors" />
       </div>
       <div className="space-y-3">
          <h3 className="font-serif text-4xl italic group-hover:text-accent transition-colors">{title}</h3>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{subtitle}</p>
       </div>
       <p className="text-muted-foreground font-light leading-relaxed h-12">
         {desc}
       </p>
       <div className="flex flex-wrap gap-2 pt-4">
          {tags.map(tag => (
             <span key={tag} className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-1 rounded-full text-muted-foreground bg-background/50">
               {tag}
             </span>
          ))}
       </div>
    </Link>
  )
}
