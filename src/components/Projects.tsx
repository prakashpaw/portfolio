"use client";
import React from "react";
import { Server, Zap, GitBranch, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Community Platform",
      tech: ["React.js", "Node.js", "Docker Swarm", "Terraform"],
      achievement: "60% reduction in image sizes via multi-stage builds and zero-downtime updates.",
      icon: <Server className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />,
      color: "from-blue-500/20 to-blue-900/10",
      border: "hover:border-blue-500/50"
    },
    {
      title: "AI-Powered Ops Analytics",
      tech: ["Python", "FastAPI", "GitLab CI/CD", "Poetry"],
      achievement: "Automated EC2 provisioning with modular Terraform, enabling independent test environments.",
      icon: <Zap className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors duration-300" />,
      color: "from-emerald-500/20 to-emerald-900/10",
      border: "hover:border-emerald-500/50"
    },
    {
      title: "Java Pipeline Modernization",
      tech: ["Java", "Jenkins", "Maven", "AWS EC2"],
      achievement: "Architected Jenkins declarative pipelines for fully automated build, test, and packaging.",
      icon: <GitBranch className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors duration-300" />,
      color: "from-amber-500/20 to-amber-900/10",
      border: "hover:border-amber-500/50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="relative w-full py-40 px-4 sm:px-8 bg-[#121212] flex flex-col items-center overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 mb-20"
      >
        <span className="text-sm uppercase tracking-[0.3em] text-emerald-400 font-semibold mb-4 block">Selected Works</span>
        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Featured Architecture
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full z-10 relative"
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className={`group relative flex flex-col justify-between p-8 rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 ${project.border} transition-all duration-500 hover:-translate-y-4 overflow-hidden`}
          >
            {/* Inner Glow generated dynamically */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex justify-between items-start">
                <div className="p-4 bg-white/5 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-300">
                  {project.icon}
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors duration-300 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300 leading-tight">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span 
                    key={t}
                    className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/5 text-gray-400 border border-white/5 shadow-sm group-hover:bg-white/10 group-hover:text-white transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                <strong className="text-emerald-400 font-semibold block mb-1">IMPACT:</strong> 
                {project.achievement}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
