'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface WorkflowStage {
  label: string;
  icon?: React.ReactNode;
}

// Circular Gradient Tracing Component
const CircularGradientTracing: React.FC<{
  radius: number;
  strokeWidth?: number;
  gradientColors?: [string, string, string];
  animationDuration?: number;
}> = ({
  radius,
  strokeWidth = 2,
  gradientColors = ["#2EB9DF", "#9E00FF", "#2EB9DF"],
  animationDuration = 4,
}) => {
  const size = radius * 2 + strokeWidth * 2;
  const center = size / 2;
  const gradientId = `circular-gradient-${Math.random().toString(36).substr(2, 9)}`;

  // Create circular path
  const circlePath = `M ${center}, ${strokeWidth}
    A ${radius}, ${radius} 0 1 1 ${center - 0.01}, ${strokeWidth}`;

  return (
    <div className="absolute" style={{ width: size, height: size, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        style={{ transform: 'rotate(-90deg)' }}
      >
        {/* Base circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#333"
          strokeOpacity="0.3"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Animated gradient circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <motion.linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ originX: '50%', originY: '50%' }}
          >
            <stop offset="0%" stopColor={gradientColors[0]} stopOpacity="0" />
            <stop offset="30%" stopColor={gradientColors[0]} />
            <stop offset="50%" stopColor={gradientColors[1]} />
            <stop offset="70%" stopColor={gradientColors[2]} />
            <stop offset="100%" stopColor={gradientColors[2]} stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
      {/* Rotating gradient overlay using conic gradient */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, ${gradientColors[0]} 10%, ${gradientColors[1]} 30%, ${gradientColors[2]} 50%, transparent 60%, transparent 100%)`,
          mask: `radial-gradient(circle at center, transparent ${radius - strokeWidth}px, black ${radius - strokeWidth}px, black ${radius + strokeWidth}px, transparent ${radius + strokeWidth}px)`,
          WebkitMask: `radial-gradient(circle at center, transparent ${radius - strokeWidth}px, black ${radius - strokeWidth}px, black ${radius + strokeWidth}px, transparent ${radius + strokeWidth}px)`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export const WorkflowOrbit: React.FC = () => {
  const stages: WorkflowStage[] = [
    { label: "Production" },
    { label: "Iteration" },
    { label: "Analyse" },
    { label: "Ideation" },
  ];

  const radius = 150;
  const [angleOffset, setAngleOffset] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setAngleOffset(prev => prev + 0.003);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-[380px] h-[380px] flex items-center justify-center">
      {/* Animated Gradient Circle */}
      <CircularGradientTracing
        radius={radius + 10}
        strokeWidth={0.75}
        gradientColors={["#ffffff", "#ffffff", "#ffffff"]}
        animationDuration={6}
      />

      {/* Inner Animated Gradient Circle */}
      <CircularGradientTracing
        radius={radius * 0.6}
        strokeWidth={0.5}
        gradientColors={["#666666", "#666666", "#666666"]}
        animationDuration={4}
      />

      {/* Center Owly Icon */}
      <div className="relative z-10 flex items-center justify-center w-[85px] h-[85px]">
        <Image
          src="/images/secret-weapon/owl-icon-only.svg"
          alt="Owly"
          width={50}
          height={64}
          className="object-contain"
        />
      </div>

      {/* Rotating workflow stages */}
      {stages.map((stage, index) => {
        // Start from top (-PI/2) and go clockwise
        const angle = (index / stages.length) * 2 * Math.PI - Math.PI / 2 + angleOffset;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={index}
            className="absolute flex items-center justify-center px-[10px] py-[7px] rounded-[8px] bg-[#1e2025] cursor-pointer
              transition-all duration-300 ease-out
              hover:scale-110 hover:bg-[#2a2d35] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
              hover:border hover:border-white/20"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <span className="text-[13px] font-semibold text-white tracking-[-0.58px] whitespace-nowrap transition-colors duration-300 group-hover:text-white">
              {stage.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default WorkflowOrbit;
