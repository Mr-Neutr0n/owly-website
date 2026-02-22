'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface Image {
    src: string;
    alt?: string;
    videoSrc?: string;
    videoPoster?: string;
}

interface ZoomParallaxProps {
    /** Array of images to be displayed in the parallax effect max 7 images */
    images: Image[];
}

/**
 * ZoomParallax - Scroll-driven zoom gallery
 *
 * SCROLL → TRANSFORM MAPPING:
 * - Container height: 300vh (3x viewport = scroll range)
 * - useScroll tracks scroll progress through this container
 * - offset: ['start start', 'end end'] means:
 *   - progress=0 when container top hits viewport top
 *   - progress=1 when container bottom hits viewport bottom
 * - Each image scales from 1x to Nx based on scrollYProgress
 *
 * CENTERING STRATEGY (why popsicle girl zooms correctly):
 * - motion.div has: "flex items-center justify-center"
 * - This centers the child div (image wrapper) in the viewport
 * - Default transform-origin is "center center"
 * - When scale is applied, it zooms FROM the center, not top-left
 * - Popsicle girl (index 0) has no position overrides, stays perfectly centered
 *
 * OTHER IMAGES:
 * - Indices 1-6 use CSS child selectors to offset from center
 * - e.g., index 1: [&>div]:!-top-[30vh] moves image 30vh above center
 * - These create the collage layout while still scaling from their own centers
 */
export function ZoomParallax({ images }: ZoomParallaxProps) {
    const container = useRef(null);

    // Track scroll progress through the 300vh container (0 → 1)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    // Scale transforms: map scroll progress to zoom levels
    // Popsicle girl (index 0) uses scale4: zooms 1x → 4x
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    // Scale assignment per image index
    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

    return (
        // SCROLL CONTAINER: height defines the scroll range
        <div ref={container} className="relative h-[300vh] w-full">
            {/* STICKY VIEWPORT: stays fixed at top during scroll, releases when container scrolls past */}
            <div className="sticky top-0 h-screen w-full">
                {images.map(({ src, alt, videoSrc, videoPoster }, index) => {
                    const scale = scales[index % scales.length];

                    return (
                        // SCALING LAYER: each image gets its own transform
                        // "items-center justify-center" ensures transform-origin is visual center
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
                        >
                            {/* IMAGE/VIDEO WRAPPER: clips the content, has rounded corners */}
                            <div className="relative h-[25vh] w-[25vw] overflow-hidden rounded-[13px]">
                                {videoSrc ? (
                                    <video
                                        src={videoSrc}
                                        poster={videoPoster}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="h-full w-full object-cover scale-110"
                                    />
                                ) : (
                                    <Image
                                        src={src || '/placeholder.svg'}
                                        alt={alt || `Parallax image ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        className="h-full w-full object-cover"
                                    />
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
