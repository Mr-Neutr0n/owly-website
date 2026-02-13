'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedWorkflowProps {
  inputs?: string[];
  outputs?: string[];
  className?: string;
}

// Circular Gradient Tracing Component - BLACK/WHITE only
const CircularGradientTracing: React.FC<{
  radius: number;
  strokeWidth?: number;
  gradientColors?: [string, string, string];
  animationDuration?: number;
}> = ({
  radius,
  strokeWidth = 2,
  gradientColors = ['#000000', '#000000', '#000000'],
  animationDuration = 4,
}) => {
  const size = radius * 2 + strokeWidth * 2;

  return (
    <div
      className="absolute"
      style={{
        width: size,
        height: size,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Base circle */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className="absolute inset-0"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e0e0e0"
          strokeOpacity="0.5"
          strokeWidth={strokeWidth}
          fill="none"
        />
      </svg>
      {/* Rotating gradient overlay */}
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
          ease: 'linear',
        }}
      />
    </div>
  );
};

// Constants - Larger size to fill available space
const CONTAINER_WIDTH = 950;
const CONTAINER_HEIGHT = 520;
const CENTER_X = CONTAINER_WIDTH / 2;
const CENTER_Y = CONTAINER_HEIGHT / 2;
const OUTER_RING_RADIUS = 85;
const INNER_RING_RADIUS = 60;

// Badge Component - WHITE with stroke on hover, gradient pulse on output
const FlowBadge: React.FC<{
  label: string;
  x: number;
  y: number;
  side: 'input' | 'output';
  index: number;
}> = ({ label, x, y, side, index }) => {
  const isInput = side === 'input';

  // Gradient colors for output badge pulse animation
  const gradientColors = ['#4ADE80', '#3B82F6', '#8B5CF6', '#EC4899'];

  // Output particles start at (index * 0.3 + 2)s and take 2s to travel
  // So they arrive at (index * 0.3 + 4)s, then repeat every 2s
  const particleArrivalDelay = index * 0.3 + 4;

  return (
    <motion.div
      initial={{ opacity: 0, x: isInput ? -20 : 20 }}
      animate={isInput
        ? { opacity: 1, x: 0 }
        : {
            opacity: 1,
            x: 0,
            borderColor: [
              'rgba(0,0,0,0.1)',
              gradientColors[index % 4],
              'rgba(0,0,0,0.1)'
            ],
            boxShadow: [
              '0 0 0 0 transparent',
              `0 0 12px 2px ${gradientColors[index % 4]}40`,
              '0 0 0 0 transparent'
            ]
          }
      }
      transition={isInput
        ? { delay: index * 0.1 + 0.3, duration: 0.5 }
        : {
            opacity: { delay: index * 0.1 + 0.3, duration: 0.5 },
            x: { delay: index * 0.1 + 0.3, duration: 0.5 },
            borderColor: {
              delay: particleArrivalDelay,
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: 'easeInOut'
            },
            boxShadow: {
              delay: particleArrivalDelay,
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: 'easeInOut'
            }
          }
      }
      className={cn(
        'absolute px-5 py-2.5 rounded-xl min-w-[100px] text-center',
        'bg-white border-2 border-black/10',
        'text-[13px] font-medium text-black whitespace-nowrap',
        'hover:shadow-md'
      )}
      style={{
        left: x,
        top: y,
        transform: 'translate(0%, -50%)'
      }}
    >
      {label}
    </motion.div>
  );
};

// Generate bezier path from input badge to center
// Badge is centered at badgeX, so right edge is at badgeX + badgeWidth/2
const generateInputPath = (badgeX: number, badgeY: number, badgeWidth: number = 100): string => {
  // Start exactly at the right edge of the badge
  const startX = badgeX + badgeWidth / 2;
  const startY = badgeY;
  const endX = CENTER_X - OUTER_RING_RADIUS;
  const endY = CENTER_Y;

  // Control points for smooth S-curve
  const ctrlX1 = startX + 60;
  const ctrlY1 = startY;
  const ctrlX2 = endX - 40;
  const ctrlY2 = endY;

  return `M ${startX} ${startY} C ${ctrlX1} ${ctrlY1}, ${ctrlX2} ${ctrlY2}, ${endX} ${endY}`;
};

// Generate bezier path from center to output badge
// Badge is centered at badgeX, so left edge is at badgeX - badgeWidth/2
const generateOutputPath = (badgeX: number, badgeY: number, badgeWidth: number = 80): string => {
  const startX = CENTER_X + OUTER_RING_RADIUS;
  const startY = CENTER_Y;
  // End close to the badge (small badgeWidth means endX closer to badge center)
  const endX = badgeX - badgeWidth / 2;
  const endY = badgeY;

  // Control points for smooth curve - reduced offset for tighter approach
  const ctrlX1 = startX + 60;
  const ctrlY1 = startY;
  const ctrlX2 = endX - 30;
  const ctrlY2 = endY;

  return `M ${startX} ${startY} C ${ctrlX1} ${ctrlY1}, ${ctrlX2} ${ctrlY2}, ${endX} ${endY}`;
};

// Calculate Y positions for badges
const calculateBadgeYPositions = (count: number): number[] => {
  const padding = 50;
  const availableHeight = CONTAINER_HEIGHT - padding * 2;
  if (count === 1) return [CENTER_Y];
  const spacing = availableHeight / (count - 1);
  return Array.from({ length: count }, (_, i) => padding + i * spacing);
};

export const AnimatedWorkflow: React.FC<AnimatedWorkflowProps> = ({
  inputs = ['Brand Assets', 'Company Context', 'Ad Briefs'],
  outputs = ['UGC Videos', 'Product Ads', 'Social Clips', 'Educational'],
  className,
}) => {
  // Badge center positions - spread out for larger container
  const INPUT_X = 30;
  const OUTPUT_X = CONTAINER_WIDTH - 80;

  const inputYPositions = calculateBadgeYPositions(inputs.length);
  const outputYPositions = calculateBadgeYPositions(outputs.length);

  // Badge widths for path calculations
  // For INPUT: larger width = line starts further right (closer to badge edge) ✓
  // For OUTPUT: smaller width = line ends further right (closer to badge edge) ✓
  const INPUT_BADGE_WIDTH = 135;  // Match actual badge widths (~120-140px)
  const OUTPUT_BADGE_WIDTH = 15;  // Line ends very close to badge left edge

  const inputPaths = inputs.map((_, i) => generateInputPath(INPUT_X, inputYPositions[i], INPUT_BADGE_WIDTH));
  const outputPaths = outputs.map((_, i) => generateOutputPath(OUTPUT_X, outputYPositions[i], OUTPUT_BADGE_WIDTH));

  return (
    <div
      className={cn('relative', className)}
      style={{ width: CONTAINER_WIDTH, height: CONTAINER_HEIGHT }}
    >
      {/* SVG Layer for paths and particles */}
      <svg
        className="absolute inset-0"
        width={CONTAINER_WIDTH}
        height={CONTAINER_HEIGHT}
        viewBox={`0 0 ${CONTAINER_WIDTH} ${CONTAINER_HEIGHT}`}
      >
        <defs>
          {/* Radial gradient for particles - BLACK (for inputs) */}
          <radialGradient id="flow-gradient-black" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Individual color gradients for each output line */}
          <radialGradient id="flow-gradient-green" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="70%" stopColor="#4ADE80" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="flow-gradient-blue" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="flow-gradient-violet" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="flow-gradient-pink" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="70%" stopColor="#EC4899" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Masks for input paths */}
          {inputPaths.map((path, i) => (
            <mask key={`input-mask-${i}`} id={`input-mask-${i}`}>
              <path d={path} strokeWidth="4" stroke="white" fill="none" />
            </mask>
          ))}

          {/* Masks for output paths */}
          {outputPaths.map((path, i) => (
            <mask key={`output-mask-${i}`} id={`output-mask-${i}`}>
              <path d={path} strokeWidth="4" stroke="white" fill="none" />
            </mask>
          ))}
        </defs>

        {/* Static dashed path lines - BLACK */}
        <g stroke="#000000" fill="none" strokeWidth="1" strokeDasharray="6 4" opacity="0.3">
          {inputPaths.map((path, i) => (
            <path key={`input-line-${i}`} d={path} />
          ))}
          {outputPaths.map((path, i) => (
            <path key={`output-line-${i}`} d={path} />
          ))}
        </g>

        {/* Animated particles - inputs - BLACK */}
        {inputPaths.map((path, i) => (
          <g key={`input-particle-${i}`} mask={`url(#input-mask-${i})`}>
            <circle cx="0" cy="0" r="14" fill="url(#flow-gradient-black)">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.35}s`}
                path={path}
              />
            </circle>
          </g>
        ))}

        {/* Animated particles - outputs - Individual colors matching badge pulse */}
        {outputPaths.map((path, i) => {
          const gradientIds = ['flow-gradient-green', 'flow-gradient-blue', 'flow-gradient-violet', 'flow-gradient-pink'];
          return (
            <g key={`output-particle-${i}`} mask={`url(#output-mask-${i})`}>
              <circle cx="0" cy="0" r="16" fill={`url(#${gradientIds[i]})`}>
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${i * 0.3 + 2}s`}
                  path={path}
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Central Engine with Owl */}
      <div
        className="absolute"
        style={{
          left: CENTER_X,
          top: CENTER_Y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer animated gradient ring - VIBRANT */}
        <CircularGradientTracing
          radius={OUTER_RING_RADIUS}
          strokeWidth={1.5}
          gradientColors={['#4ADE80', '#3B82F6', '#EC4899']}
          animationDuration={6}
        />

        {/* Inner animated gradient ring - VIBRANT */}
        <CircularGradientTracing
          radius={INNER_RING_RADIUS}
          strokeWidth={1}
          gradientColors={['#8B5CF6', '#EC4899', '#4ADE80']}
          animationDuration={4}
        />

        {/* Pulsing glow effect - GRAY/BLACK */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: OUTER_RING_RADIUS * 2 + 20,
            height: OUTER_RING_RADIUS * 2 + 20,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle, rgba(0, 0, 0, 0.08) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Owl Icon */}
        <motion.div
          className="relative z-10 flex items-center justify-center"
          style={{ width: INNER_RING_RADIUS * 2, height: INNER_RING_RADIUS * 2 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/secret-weapon/owl-icon-only.svg"
            alt="Owly"
            width={48}
            height={62}
            className="object-contain invert"
          />
        </motion.div>
      </div>

      {/* Input Badges (left side) */}
      {inputs.map((label, i) => (
        <FlowBadge
          key={`input-${i}`}
          label={label}
          x={INPUT_X - (i === 1 ? 30 : 0)}
          y={inputYPositions[i] - 15}
          side="input"
          index={i}
        />
      ))}

      {/* Output Badges (right side) - left-aligned, positioned at line end */}
      {outputs.map((label, i) => (
        <FlowBadge
          key={`output-${i}`}
          label={label}
          x={OUTPUT_X - OUTPUT_BADGE_WIDTH / 2}
          y={outputYPositions[i] - 15}
          side="output"
          index={i}
        />
      ))}

      {/* REMOVED: Input Label */}
      {/* REMOVED: Output Label */}
    </div>
  );
};

export default AnimatedWorkflow;
