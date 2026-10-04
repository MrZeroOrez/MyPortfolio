import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    institution: 'GURUKULA KANGRI (DEEMED TO BE UNIVERSITY)',
    location: 'UTTARAKHAND',
    period: '2018 - 2022',
    qualification: 'B.Tech in Computer Science & Engineering',
    detail: 'CGPA: 8.71 / 10',
  },
  {
    institution: 'WORLDQUANT UNIVERSITY',
    location: 'ONLINE',
    period: 'OCT 2020 - MAR 2021',
    qualification: 'Applied Data Science I & II',
    detail: 'Scientific Computing & Python; Machine Learning & Statistical Analysis — with honors',
  },
];

const certifications = [
  {
    name: 'IBM Full Stack Software Developer',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/EJFBPYQQB8NE',
  },
  {
    name: 'Interview Preparation with Java',
    issuer: 'Coding Ninjas',
    url: 'https://ninjasfiles.s3.amazonaws.com/certificate17736092a7699270a76add4638b66d36da8b661.pdf',
  },
  {
    name: 'Web Development with Spring Boot',
    issuer: 'Coding Ninjas',
    url: 'https://certificate.codingninjas.com/view/9d72a65213f27421',
  },
  {
    name: 'Neo4j Certified Professional',
    issuer: 'Neo4j',
    url: 'https://graphacademy.neo4j.com/c/8f78f0bd-37aa-4a82-a4ae-b6120b17b392',
  },
];

export const EducationSection: React.FC = () => (
  <section
    id="education"
    className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
  >
    <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/[0.04] rounded-full blur-[160px] pointer-events-none" />
    <div className="max-w-7xl mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center space-x-4 mb-7"
      >
        <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          05 / EDUCATION & CREDENTIALS
        </span>
        <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <h2 className="text-5xl sm:text-6xl tracking-tight uppercase leading-[0.9] mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">EDUCATION.</span>
          </h2>
          <div className="space-y-5">
            {education.map((item) => (
              <motion.article
                key={item.institution}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="border-l border-[#D4AF37]/50 pl-5 py-1"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <h3 className="text-sm font-semibold tracking-[0.12em] text-[#F3DBB3]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.institution}</h3>
                  <span className="text-[10px] font-mono tracking-[0.15em] text-[#D4AF37]">{item.period}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#E8DFD8] mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.qualification}</p>
                <p className="text-xs text-[#A8988B] leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-5xl sm:text-6xl tracking-tight uppercase leading-[0.9] mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">CERTIFICATIONS.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((certification, index) => (
              <motion.a
                key={certification.name}
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group min-h-24 border border-[#8C6D4F]/35 bg-[#100D0B]/85 p-4 hover:border-[#D4AF37]/75 transition-colors"
              >
                <span className="block text-sm text-[#F3DBB3] group-hover:text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{certification.name}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#A8988B]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{certification.issuer} ↗</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
