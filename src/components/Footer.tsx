"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const skills = [
    { category: "Cloud & Ops", items: ["AWS (EC2, RDS, S3, ALB/NLB, VPC)", "Linux / AIX Administration"] },
    { category: "CI/CD & IaC", items: ["GitLab CI/CD", "Jenkins", "Terraform", "Maven & Gradle"] },
    { category: "Containers", items: ["Docker Swarm", "Docker", "Nginx", "PostgreSQL / DynamoDB"] },
    { category: "Observability", items: ["Dynatrace", "Prometheus", "Grafana", "CloudWatch"] }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <footer className="w-full bg-[#0a0a0a] py-32 px-4 relative z-10 overflow-hidden border-t border-white/5">
      {/* Background Orbs */}
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Pre-footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-32 flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
            Ready to <span className="text-emerald-500">Scale</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mb-12">
            Let's build highly available, resilient, and automatable infrastructure.
          </p>
          <a href="mailto:contact@prakashpawar.io" className="group relative inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Start a Conversation <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-emerald-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </a>
        </motion.div>

        {/* Technical Arsenal Grid */}
        <div className="w-full flex-col">
          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-16 tracking-wider flex items-center gap-4"
          >
            <span className="w-8 h-[2px] bg-emerald-500 inline-block" />
            TECHNICAL ARSENAL
          </motion.h3>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 w-full"
          >
            {skills.map((skill) => (
              <motion.div key={skill.category} variants={itemVariants} className="flex flex-col gap-6">
                <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] relative">
                  {skill.category}
                </h4>
                <ul className="flex flex-col gap-4 border-l border-white/10 pl-4">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-300 font-medium hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-emerald-500 before:mr-3 before:opacity-0 hover:before:opacity-100">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education & Certs */}
        <div className="w-full mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/5 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h4 className="text-xl font-bold text-white tracking-wider flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              EDUCATION
            </h4>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <h5 className="text-lg font-semibold text-emerald-400">Bachelor of Technology</h5>
              <p className="text-gray-300 font-medium mt-1">Electronics & Telecommunication Engineering</p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>Dr. Babasaheb Ambedkar Technological University</span>
                <span>GPA: 7.77 / 10.00</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h4 className="text-xl font-bold text-white tracking-wider flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              CERTIFICATIONS & AWARDS
            </h4>
            <div className="flex flex-col gap-4">
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
                <span className="text-emerald-500 font-black text-xl">01</span>
                <div>
                  <h5 className="text-gray-200 font-medium">GitHub Ultimate</h5>
                  <p className="text-gray-500 text-sm">Udemy</p>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
                <span className="text-emerald-500 font-black text-xl">02</span>
                <div>
                  <h5 className="text-gray-200 font-medium">Docker for the Absolute Beginner</h5>
                  <p className="text-gray-500 text-sm">KodeKloud</p>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
                <span className="text-emerald-500 font-black text-xl">03</span>
                <div>
                  <h5 className="text-gray-200 font-medium">'Pat on the Back' Award</h5>
                  <p className="text-gray-500 text-sm">Tietoevry Tech Services - For Excellence & Ownership</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legal / Copyright string */}
        <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-white/5 pt-8">
          <p>&copy; {new Date().getFullYear()} Prakash Pawar. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0 font-medium uppercase tracking-wider text-xs">
            <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Resume</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
