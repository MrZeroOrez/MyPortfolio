import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutImg from '../assets/mohan.jpeg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), { damping: 18, stiffness: 220 });

  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(255,255,255,0.35), rgba(212,175,55,0.18), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsCardHovered(true);

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      className="relative w-screen min-h-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-[#D4AF37] rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/6 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F] rounded-full blur-[170px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ABOUT ME
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]">
                  HELLO! I AM
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.3)]">
                  CHANDRA MOHAN
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#B3A497] leading-[1.85] tracking-wide mb-10 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Software Engineer with 3+ years of experience building Spring Boot microservices, REST APIs, and enterprise integrations. At SAP, I work across backend engineering and L2 production support, with hands-on experience in automation and Generative AI. I hold a B.Tech in Computer Science &amp; Engineering and have completed applied data science coursework with honors.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-2 border-t border-[#8C6D4F]/25"
            >
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-light text-[#F4EBE2] tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>3+</span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-light text-[#D4AF37] tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>4</span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">Certifications</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-light text-[#F4EBE2] tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>4</span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">Organizations</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-light text-[#D4AF37] tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>10</span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">Projects</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            ref={cardRef}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              background: spotlightBg,
            }}
            className="lg:col-span-5 relative p-6 sm:p-8 rounded-[2rem] border border-[#8C6D4F]/35 bg-[#120F0C] shadow-[0_30px_80px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-[#8C6D4F]/10" />
            <div className="relative z-10">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[11px] tracking-[0.28em] uppercase text-[#D4AF37]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Profile</span>
                <span className="px-2 py-1 border border-[#D4AF37]/30 text-[#F7E7C4] text-[9px] tracking-[0.2em] uppercase">Bangalore</span>
              </div>

              <div className="relative mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(212,175,55,0.32),_transparent_62%)] blur-3xl" />
                <motion.img
                  src={aboutImg}
                  alt="Chandra Mohan"
                  className="relative w-full max-w-[330px] rounded-[1.5rem] border border-[#8C6D4F]/35 object-cover shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                  style={{
                    transformPerspective: 1200,
                    transformStyle: 'preserve-3d',
                    rotateX,
                    rotateY,
                    y: isCardHovered ? -6 : 0,
                  }}
                  transition={{ y: { duration: 0.35, ease: 'easeOut' } }}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#D4AF37]">•</span>
                  <p className="text-xs sm:text-sm text-[#BFAE9F] leading-7" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <strong className="text-[#F3DBB3]">Experience:</strong> 3+ years in software engineering
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#D4AF37]">•</span>
                  <p className="text-xs sm:text-sm text-[#BFAE9F] leading-7" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <strong className="text-[#F3DBB3]">City:</strong> Bangalore, Karnataka
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#D4AF37]">•</span>
                  <p className="text-xs sm:text-sm text-[#BFAE9F] leading-7" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <strong className="text-[#F3DBB3]">Degree:</strong> B.Tech, Computer Science &amp; Engineering
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[#D4AF37]">•</span>
                  <p className="text-xs sm:text-sm text-[#BFAE9F] leading-7" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <strong className="text-[#F3DBB3]">Phone:</strong> +91 8949389362
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
