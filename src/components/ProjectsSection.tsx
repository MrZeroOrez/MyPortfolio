import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'SERC Website',
    category: 'SYSTEMS / FRONTEND ENGINEERING',
    description:
      'Designed and developed the user-centric website for SERC using React and NodeJS, focusing on performance, accessibility, and clear institutional communication.',
    githubUrl: 'https://github.com/MrZeroOrez',
    tech: ['ReactJS', 'NodeJS', 'JavaScript', 'CSS', 'UX'],
    metrics: [
      { label: 'STACK', value: 'React + Node' },
      { label: 'FOCUS', value: 'User Experience' },
      { label: 'ROLE', value: 'System Engineer' },
    ],
  },
  {
    number: '02',
    title: 'Automated Machine IDE',
    category: 'JAVA / IDE DEVELOPMENT',
    description:
      'Contributed to IDE development similar to PyCharm with a Python-like language for automated machines using IntelliJ, Java, and the Spring Framework, supporting UI editor workflows and configuration tooling.',
    githubUrl: 'https://github.com/MrZeroOrez',
    tech: ['Java', 'Spring', 'OOP', 'IntelliJ', 'Python'],
    metrics: [
      { label: 'FRAMEWORK', value: 'Spring Boot' },
      { label: 'DOMAIN', value: 'Automation' },
      { label: 'QUALITY', value: 'Test Coverage' },
    ],
  },
  {
    number: '03',
    title: 'Cloud Skills & DevOps Journey',
    category: 'CLOUD / GOOGLE CLOUD',
    description:
      'Completed the Google Cloud Skills Boost program with hands-on learning across compute, Kubernetes, DevOps, Cloud SQL, APIs, and BigQuery in a production-minded environment.',
    githubUrl: 'https://github.com/MrZeroOrez',
    tech: ['Google Cloud', 'DevOps', 'Kubernetes', 'BigQuery', 'APIs'],
    metrics: [
      { label: 'CLOUD', value: 'GCP' },
      { label: 'FOCUS', value: 'Compute & APIs' },
      { label: 'PATH', value: 'Skills Boost' },
    ],
  },
  {
    number: '04',
    title: 'Stock Price Dashboard',
    category: 'FINANCE / DATA VISUALIZATION',
    description:
      'Developed a financial data analysis system using Python, React, and TypeScript, visualizing stock price feeds and trader dashboards with Perspective to make market data easier to interpret.',
    githubUrl: 'https://github.com/MrZeroOrez',
    tech: ['Python', 'React', 'TypeScript', 'Git', 'Analytics'],
    metrics: [
      { label: 'TOOLS', value: 'Perspective' },
      { label: 'STACK', value: 'React + Python' },
      { label: 'USE', value: 'Dashboarding' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Driving accessible engineering and systems work across cloud, web, and backend development with a focus on efficiency and quality.
          </p>
        </motion.div>

        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-[10px] font-mono tracking-[0.28em] text-[#D4AF37] uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3
                      className="text-4xl sm:text-5xl text-white mb-4 leading-none tracking-tight"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-sm sm:text-[15px] text-[#A8988B] leading-[1.9] max-w-2xl"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-[10px] font-medium tracking-[0.15em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#171310] text-[#E8D7C5]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="xl:pl-6">
                    <div className="space-y-4">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-sm border border-[#8C6D4F]/35 bg-[#120F0C] p-4"
                        >
                          <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#8C6D4F] mb-2">
                            {metric.label}
                          </div>
                          <div className="text-xl text-[#F4EBE2]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.24em] uppercase text-[#F3DBB3] hover:text-white transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      View profile <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ProjectsSection;
