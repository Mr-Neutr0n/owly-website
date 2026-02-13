'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
    src: string;
    alt?: string;
}

interface ZoomParallaxProps {
    images: Image[];
}

// Position and size config for each image
// Index 0 = center (popsicle girl), others spread around
const imageConfigs = [
    { top: '50%', left: '50%', width: '28vw', height: '35vh', x: '-50%', y: '-50%' }, // 0: CENTER - popsicle girl
    { top: '15%', left: '20%', width: '25vw', height: '30vh', x: '-50%', y: '-50%' }, // 1: TOP LEFT
    { top: '20%', left: '75%', width: '20vw', height: '30vh', x: '-50%', y: '-50%' }, // 2: TOP RIGHT
    { top: '50%', left: '10%', width: '22vw', height: '25vh', x: '-50%', y: '-50%' }, // 3: LEFT
    { top: '55%', left: '88%', width: '20vw', height: '25vh', x: '-50%', y: '-50%' }, // 4: RIGHT
    { top: '80%', left: '22%', width: '25vw', height: '22vh', x: '-50%', y: '-50%' }, // 5: BOTTOM LEFT
    { top: '82%', left: '78%', width: '18vw', height: '18vh', x: '-50%', y: '-50%' }, // 6: BOTTOM RIGHT
];

export function ZoomParallax({ images }: ZoomParallaxProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

    return (
        <div ref={container} className="relative h-[300vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {images.map(({ src, alt }, index) => {
                    const scale = scales[index % scales.length];
                    const config = imageConfigs[index] || imageConfigs[0];

                    return (
                        <motion.div
                            key={index}
                            style={{
                                scale,
                                position: 'absolute',
                                top: config.top,
                                left: config.left,
                                width: config.width,
                                height: config.height,
                                x: config.x,
                                y: config.y,
                            }}
                            className="overflow-hidden rounded-[13px]"
                        >
                            <img
                                src={src || '/placeholder.svg'}
                                alt={alt || `Parallax image ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
