"use client";
import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0 - 15%
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.15], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [50, -50]);

  // Section 2: 25 - 45%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

  // Section 3: 55 - 75%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], [50, -50]);

  // Section 4: 80 - 100%
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.75, 1], [50, -50]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      {/* Container that acts as the sticky layer within the main 500vh flow */}
      <div className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4 sm:px-8 text-white overflow-hidden">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            PRAKASH PAWAR
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-gray-200">
            Senior DevOps Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Engineering high-availability infrastructure with 99.9% uptime.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-md text-emerald-400">
            "Automate Everything."
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Reduced manual operational effort by 30% through Infrastructure as Code (Terraform) and custom automation scripts.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-md text-amber-400">
            "The Cloud Stack."
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Orchestrating Kubernetes (EKS), Docker Swarm, and AWS at scale.
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div 
          style={{ opacity: opacity4, y: y4 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-md text-rose-500">
            "Observability & Security."
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Proactive monitoring with Dynatrace, Prometheus, and Grafana; fortified with Trivy vulnerability scanning and IAM least-privilege policies.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
