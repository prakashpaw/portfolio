"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Link2 } from "lucide-react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const experiences = [
    {
      role: "Senior DevOps Engineer",
      company: "Tietoevry India",
      time: "Apr 2023 - Present",
      description: "Architected AWS infrastructure maintaining 99.9% uptime. Migrated completely to GitLab CI/CD and Terraform IaC, resulting in a 40% reduction in deployment time. Modernized observability using Dynatrace APM to reduce MTTR, and secured environments using Trivy image scanning and AWS IAM least-privilege policies."
    },
    {
      role: "Junior DevOps Engineer",
      company: "Tietoevry India",
      time: "Dec 2021 - Mar 2023",
      description: "Led an organization-wide migration from SVN to GitLab. Standardized release lifecycles using Maven and Gradle. Administered multi-region AWS deployments and performance-tuned NoSQL/Relational databases like DynamoDB and Aurora DB."
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-40 px-4 sm:px-8 bg-[#0f0f0f] flex flex-col items-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-20"
      >
        <span className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4 block">Timeline</span>
        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Career Trajectory
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto w-full z-10 flex flex-col gap-16">
        {/* Animated Connecting SVG Line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px]">
          <svg className="absolute w-full h-full stroke-blue-500/20 stroke-[4px] fill-transparent" strokeLinecap="round">
            <line x1="1" y1="0" x2="1" y2="100%" />
          </svg>
          <motion.svg className="absolute w-full h-full stroke-blue-500 stroke-[4px] fill-transparent" strokeLinecap="round">
            <motion.line style={{ pathLength }} x1="1" y1="0" x2="1" y2="100%" />
          </motion.svg>
        </div>

        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`relative flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Timeline Node */}
            <div className="absolute left-6 md:left-1/2 -ml-2 -mt-4 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-500/20 z-10 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />

            {/* Content Box */}
            <div className="w-full md:w-1/2 flex flex-col pl-16 md:pl-0 md:px-12 group">
              <div className={`p-8 rounded-3xl bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/5 group-hover:to-blue-500/10 transition-all pointer-events-none" />
                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-400 font-semibold flex items-center gap-1">
                    <Briefcase className="w-4 h-4" /> {exp.company}
                  </span>
                  <span className="text-gray-500 text-sm">{exp.time}</span>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}
