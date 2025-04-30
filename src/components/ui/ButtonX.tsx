'use client';

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";


interface ButtonProps {
    children: React.ReactNode;
    variant?: 'solid' | 'outline';
    className?: string;
    onClick?: () => void
}


export default function ButtonX({
    children,
    variant = 'solid',
    className = "",
    onClick
  }: ButtonProps) {

    const ref = useRef<HTMLButtonElement>(null);
    const x = useSpring(useMotionValue(0), { stiffness: 800, damping: 30, mass: 0.2 });
    const y = useSpring(useMotionValue(0), { stiffness: 800, damping: 30, mass: 0.2 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();

        if(!rect) return;

        
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        // Small magnetic movement
        const moveX = (relX - rect.width / 2) / 12;
        const moveY = (relY - rect.height / 2) / 12;

        x.set(moveX);
        y.set(moveY);

        // Set CSS vars for radial fill direction
        ref.current?.style.setProperty('--mouse-x', `${relX}px`);
        ref.current?.style.setProperty('--mouse-y', `${relY}px`);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // className={`group relative inline-flex items-center justify-center px-6 py-3 rounded-3xl overflow-hidden transition-all duration-200 ${className} ${
    //     variant === 'solid'
    //       ? 'bg-secondary text-primary border border-secondary'
    //       : 'bg-transparent text-secondary border-2 border-secondary'
    //   }`}

    return (
            <motion.button
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x, y }}
                //  fixed inline-block hover:bg-accent
                className={`group relative inline-flex items-center justify-center
                font-medium text-center leading-7 cursor-pointer transition-all ease-out duration-200 hover:text-secondary border outline outline-1 hover:border-2 border-secondary hover:border-secondary rounded-3xl z-10 text-base overflow-hidden ${className} ${variant === 'solid' ?
                    'bg-secondary py-4 px-6 text-primary border'
                  : 'bg-transparent py-4 px-11 text-secondary outline-none '
                }`}
                onClick={onClick}
            >
                <span
                className="absolute inset-0 z-0 transition-all duration-700 ease-out scale-0 group-hover:scale-[4] opacity-0 group-hover:opacity-100 rounded-3xl bg-accent origin-[var(--mouse-x)_var(--mouse-y)]"
                aria-hidden
                />
                    {/* Content */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary">
                    {children}
                </span>
        </motion.button>
    )
}