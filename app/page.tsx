'use client';

import { Github, Linkedin, Mail, ArrowUpRight, Play, Camera } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      
      {/* Background Image - Fixed */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Image 
          src="/background.png" 
          alt="Background" 
          fill
          className="object-cover opacity-100"
          quality={100}
          priority
        />
      </div>

      {/* Top Navigation - Glassmorphism */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif font-medium text-xl tracking-tight flex items-center gap-2">
            <div className="w-3 h-3 bg-accent rounded-full shadow-sm" />
            Edgar Zhu
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#research" className="hover:text-accent transition-colors">Research</Link>
            <Link href="#projects" className="hover:text-accent transition-colors">Projects</Link>
            <Link href="#photography" className="hover:text-accent transition-colors">Photography</Link>
          </nav>
          <div className="flex items-center gap-4">
             <SocialLink href="https://github.com/Edgarzhu7" icon={<Github className="w-4 h-4" />} />
             <SocialLink href="https://www.linkedin.com/in/edgar-zhu-145091279/" icon={<Linkedin className="w-4 h-4" />} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto border-l border-r border-border relative z-10 bg-background/60 backdrop-blur-sm">
        
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-0 border-b border-border">
          <div className="p-10 md:p-20 flex flex-col justify-center space-y-8 border-b md:border-b-0 border-border bg-background/40">
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-foreground drop-shadow-sm">
                Syntax. <br/>
                Systems. <br/>
                <span className="italic text-accent/90">Soul.</span> 
                
              </h1>
              <div className="space-y-3 max-w-md text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Building human-centered AI
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Analyzing complex economic systems
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Creating scalable startups
                </p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
               <Link href="dejiazhu@umich.edu" className="group flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl">
                 <Mail className="w-4 h-4" />
                 Get in touch
               </Link>
               <Link href="#research" className="group flex items-center gap-2 px-5 py-2.5 bg-white/50 dark:bg-black/20 border border-border rounded-full text-sm font-medium hover:bg-background transition-colors backdrop-blur-sm">
                 View Research
               </Link>
            </div>
          </div>
          
          {/* Hero Image & Bio - Right Side */}
          <div className="relative min-h-[500px] md:h-auto bg-muted/30 flex flex-col items-center justify-center p-10 md:p-16 gap-8 border-l md:border-l border-border text-center md:text-left">
            
            {/* Profile Image */}
            <div className="relative z-10 w-40 h-40 group shrink-0">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500" />
              <Image 
                src="/profile.jpg" 
                alt="Edgar Zhu" 
                fill
                className="object-cover rounded-full shadow-xl transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {/* Status Badge */}
              <div className="absolute -top-2 -right-8 bg-white/90 dark:bg-black/80 backdrop-blur-md border border-border px-3 py-1.5 rounded-full shadow-sm animate-fade-in flex items-center gap-2 text-xs" style={{ animationDelay: '200ms' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium">Building</span>
              </div>
            </div>

            {/* Bio Text moved to right */}
            <div className="relative z-10 space-y-4 max-w-md text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '300ms' }}>
                <p className="text-lg">
                  Hi, I'm <span className="font-semibold text-foreground">Edgar Zhu</span>. 
                  I'm a senior at the <span className="text-[#00274C] font-medium">University of Michigan</span> (Go Blue! 〽️), originally from Shenzhen, China.
                </p>
                <p>
                  My passion lies in building <span className="italic">efficient, human-centered AI systems</span> that solve real-world problems. I've previously interned at <span className="font-medium text-foreground">Tencent</span> twice, gaining deep industry insights.
                </p>
                <p>
                  Currently, I'm building <a href="https://www.vizasound.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-accent decoration-1 underline-offset-2 hover:text-accent transition-colors font-medium">Vizasound</a>, an AI startup integrating multi-modal generative models to produce custom songs and videos.
                </p>
                <p className="text-sm pt-2 border-t border-border/50 w-fit mx-auto md:mx-0">
                  ⚽️ Soccer &nbsp;•&nbsp; 🎬 Films &nbsp;•&nbsp; ✈️ Traveling
                </p>
            </div>
          </div>
        </section>

        {/* Introduction Grid - Stronger Borders */}
        <section className="grid md:grid-cols-3 border-b border-border divide-y md:divide-y-0 md:divide-x divide-border bg-background/80">
          <div className="p-10 space-y-4 hover:bg-white/60 dark:hover:bg-black/40 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <span className="font-serif text-lg italic">01</span>
            </div>
            <h3 className="font-serif text-xl font-medium">Data Science</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leveraging statistical models and machine learning to extract actionable insights from complex datasets.
            </p>
          </div>
          <div className="p-10 space-y-4 hover:bg-white/60 dark:hover:bg-black/40 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
              <span className="font-serif text-lg italic">02</span>
            </div>
            <h3 className="font-serif text-xl font-medium">Economics</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Analyzing market dynamics and behavioral patterns to understand the mechanics of value creation.
            </p>
          </div>
          <div className="p-10 space-y-4 hover:bg-white/60 dark:hover:bg-black/40 transition-colors">
             <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
              <span className="font-serif text-lg italic">03</span>
            </div>
            <h3 className="font-serif text-xl font-medium">Business</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Translating technical innovations into scalable business strategies and sustainable ventures.
            </p>
          </div>
        </section>

        {/* Selected Research */}
        <section id="research" className="border-b border-border bg-background/60">
          <div className="p-10 md:p-12 border-b border-border">
            <span className="text-xs font-mono uppercase tracking-wider text-accent">Selected Works</span>
            <h2 className="font-serif text-4xl mt-2">Research & Analysis</h2>
          </div>
          
          <div className="divide-y divide-border">
            <ResearchItem 
              title="AI-Driven Market Analysis"
              category="Economics & ML"
              year="2024"
              description="Investigating the impact of sentiment analysis on high-frequency trading algorithms using NLP models."
            />
            <ResearchItem 
              title="Computational Game Theory"
              category="Computer Science"
              year="2023"
              description="Developing simulation models to understand cooperative behavior in decentralized networks."
            />
          </div>
        </section>

        {/* Side Projects */}
        <section id="projects" className="grid md:grid-cols-2 border-b border-border">
           <div className="p-10 md:p-12 border-b md:border-b-0 border-r border-border bg-background/40">
              <span className="text-xs font-mono uppercase tracking-wider text-accent">Engineering</span>
              <h2 className="font-serif text-4xl mt-2 mb-8">Side Projects</h2>
              <div className="space-y-6">
                <ProjectCard 
                  title="Portfolio Analytics"
                  desc="Real-time investment dashboard."
                  tags={["Next.js", "Finance API", "Tailwind"]}
                />
                <ProjectCard 
                  title="Vizasound"
                  desc="AI startup integrating multi-modal generative models to produce custom songs and videos."
                  tags={["Founder", "Generative AI", "Startup"]}
                  link="https://www.vizasound.com/"
                />
              </div>
           </div>
           <div className="bg-muted/30 p-10 md:p-12 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent">Interests</span>
                <h2 className="font-serif text-4xl mt-2 mb-8">Passions</h2>
                <ul className="space-y-4">
                  <InterestItem title="Artificial Intelligence" />
                  <InterestItem title="Film & Cinema" />
                  <InterestItem title="Soccer" />
                  <InterestItem title="Traveling" />
                </ul>
              </div>
              
              <div className="mt-12 p-6 bg-white/60 dark:bg-black/20 border border-border/50 rounded-lg shadow-sm backdrop-blur-sm">
                <p className="font-serif italic text-lg text-muted-foreground">
                  "Building efficient, human-centered AI systems to solve real-world problems."
                </p>
              </div>
           </div>
        </section>

        {/* Photography */}
        <section id="photography" className="p-6 md:p-10 bg-background/40">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl">Photography</h2>
            <Link href="#" className="text-sm border-b border-accent text-accent pb-0.5 hover:opacity-70 transition-opacity">View All Works</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[4/5] bg-muted relative group overflow-hidden cursor-pointer rounded-md shadow-sm hover:shadow-md transition-all">
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-700">
                   <Camera className="w-6 h-6 opacity-30" />
                 </div>
                 <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="max-w-7xl mx-auto border-t border-border py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground bg-background/80 backdrop-blur-md">
        <div>
          &copy; {new Date().getFullYear()} Edgar Zhu.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}

function ResearchItem({ title, category, year, description }: { title: string; category: string; year: string; description: string }) {
  return (
    <div className="group flex flex-col md:flex-row md:items-baseline gap-4 p-8 md:px-12 hover:bg-white/60 dark:hover:bg-white/5 transition-colors cursor-pointer">
       <div className="w-32 text-sm font-mono text-muted-foreground shrink-0">{year}</div>
       <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
             <h3 className="text-xl font-medium font-serif group-hover:text-accent transition-colors">{title}</h3>
             <ArrowUpRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
          </div>
          <p className="text-muted-foreground max-w-2xl">{description}</p>
       </div>
       <div className="w-48 text-xs font-mono uppercase tracking-wider text-muted-foreground text-right hidden md:block">
          {category}
       </div>
    </div>
  )
}

function ProjectCard({ title, desc, tags, link }: { title: string; desc: string; tags: string[]; link?: string }) {
  const Content = (
    <div className="group p-6 border border-border bg-white/60 dark:bg-black/20 hover:border-accent/30 transition-all cursor-pointer relative top-0 hover:-top-1 shadow-sm hover:shadow-md rounded-sm backdrop-blur-sm h-full">
       <div className="flex justify-between items-start mb-4">
         <div className="w-10 h-10 bg-muted flex items-center justify-center rounded-sm text-foreground">
           <Play className="w-4 h-4 fill-current" />
         </div>
         <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
       </div>
       <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-accent transition-colors">{title}</h3>
       <p className="text-sm text-muted-foreground mb-4">{desc}</p>
       <div className="flex flex-wrap gap-2 mt-auto">
         {tags.map(tag => (
           <span key={tag} className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-1 rounded-full text-muted-foreground bg-background/50">
             {tag}
           </span>
         ))}
       </div>
    </div>
  );

  if (link) {
    return <Link href={link} target="_blank" rel="noopener noreferrer" className="block h-full">{Content}</Link>;
  }
  return <div className="block h-full">{Content}</div>;
}

function InterestItem({ title }: { title: string }) {
  return (
    <li className="flex items-center justify-between group cursor-pointer border-b border-border pb-3 hover:border-accent transition-colors">
      <span className="font-medium group-hover:translate-x-2 transition-transform group-hover:text-accent">{title}</span>
      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
    </li>
  )
}
