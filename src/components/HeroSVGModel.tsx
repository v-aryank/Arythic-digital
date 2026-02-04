import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const HeroSVGModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll('.animate-path');
    const circles = svgRef.current.querySelectorAll('.animate-circle');
    const rings = svgRef.current.querySelectorAll('.animate-ring');

    // Initial animation
    gsap.fromTo(
      paths,
      { strokeDashoffset: 1000, opacity: 0 },
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );

    gsap.fromTo(
      circles,
      { scale: 0, opacity: 0, transformOrigin: 'center' },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        delay: 0.5,
      }
    );

    // Continuous ring rotation
    rings.forEach((ring, i) => {
      gsap.to(ring, {
        rotation: i % 2 === 0 ? 360 : -360,
        duration: 20 + i * 5,
        repeat: -1,
        ease: 'none',
        transformOrigin: 'center',
      });
    });

    // Floating animation for the whole SVG
    gsap.to(svgRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll('.animate-path');
    const core = svgRef.current.querySelector('.core-shape');

    if (isHovered) {
      gsap.to(paths, {
        stroke: 'hsl(210, 100%, 70%)',
        strokeWidth: 1.5,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(core, {
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out',
        transformOrigin: 'center',
      });
    } else {
      gsap.to(paths, {
        stroke: 'hsl(192, 95%, 55%)',
        strokeWidth: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(core, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
        transformOrigin: 'center',
      });
    }
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] lg:h-[600px] flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 400 400"
        className="w-full max-w-[500px] h-auto"
        style={{ filter: 'drop-shadow(0 0 20px hsl(192 95% 55% / 0.3))' }}
      >
        <defs>
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(192, 95%, 55%)" />
            <stop offset="100%" stopColor="hsl(210, 100%, 60%)" />
          </linearGradient>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(192, 95%, 55%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(192, 95%, 55%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background glow */}
        <circle cx="200" cy="200" r="150" fill="url(#glowGradient)" />

        {/* Outer rotating rings */}
        <g className="animate-ring">
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="hsl(192, 95%, 55%)"
            strokeWidth="0.5"
            strokeDasharray="10 20"
            opacity="0.4"
          />
        </g>
        <g className="animate-ring">
          <circle
            cx="200"
            cy="200"
            r="140"
            fill="none"
            stroke="hsl(210, 100%, 60%)"
            strokeWidth="0.5"
            strokeDasharray="5 15"
            opacity="0.3"
          />
        </g>
        <g className="animate-ring">
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="hsl(192, 95%, 55%)"
            strokeWidth="0.3"
            strokeDasharray="2 10"
            opacity="0.2"
          />
        </g>

        {/* Core geometric shape - Icosahedron-like wireframe */}
        <g className="core-shape">
          {/* Hexagon layers */}
          <polygon
            className="animate-path"
            points="200,120 255,155 255,215 200,250 145,215 145,155"
            fill="none"
            stroke="hsl(192, 95%, 55%)"
            strokeWidth="1"
            strokeDasharray="1000"
          />
          <polygon
            className="animate-path"
            points="200,100 270,145 270,225 200,270 130,225 130,145"
            fill="none"
            stroke="hsl(192, 95%, 55%)"
            strokeWidth="0.8"
            strokeDasharray="1000"
            opacity="0.7"
          />
          <polygon
            className="animate-path"
            points="200,80 285,130 285,240 200,290 115,240 115,130"
            fill="none"
            stroke="hsl(210, 100%, 60%)"
            strokeWidth="0.5"
            strokeDasharray="1000"
            opacity="0.5"
          />

          {/* Inner triangles */}
          <path
            className="animate-path"
            d="M200,120 L255,155 L200,185 Z"
            fill="none"
            stroke="hsl(192, 95%, 55%)"
            strokeWidth="0.8"
            strokeDasharray="1000"
            opacity="0.6"
          />
          <path
            className="animate-path"
            d="M200,120 L145,155 L200,185 Z"
            fill="none"
            stroke="hsl(192, 95%, 55%)"
            strokeWidth="0.8"
            strokeDasharray="1000"
            opacity="0.6"
          />
          <path
            className="animate-path"
            d="M255,155 L255,215 L200,185 Z"
            fill="none"
            stroke="hsl(210, 100%, 60%)"
            strokeWidth="0.8"
            strokeDasharray="1000"
            opacity="0.5"
          />
          <path
            className="animate-path"
            d="M145,155 L145,215 L200,185 Z"
            fill="none"
            stroke="hsl(210, 100%, 60%)"
            strokeWidth="0.8"
            strokeDasharray="1000"
            opacity="0.5"
          />
          <path
            className="animate-path"
            d="M255,215 L200,250 L200,185 Z"
            fill="none"
            stroke="hsl(192, 95%, 55%)"
            strokeWidth="0.8"
            strokeDasharray="1000"
            opacity="0.6"
          />
          <path
            className="animate-path"
            d="M145,215 L200,250 L200,185 Z"
            fill="none"
            stroke="hsl(192, 95%, 55%)"
            strokeWidth="0.8"
            strokeDasharray="1000"
            opacity="0.6"
          />

          {/* Connecting lines */}
          <line
            className="animate-path"
            x1="200"
            y1="120"
            x2="200"
            y2="185"
            stroke="hsl(192, 95%, 55%)"
            strokeWidth="0.5"
            strokeDasharray="1000"
            opacity="0.4"
          />
          <line
            className="animate-path"
            x1="200"
            y1="250"
            x2="200"
            y2="185"
            stroke="hsl(192, 95%, 55%)"
            strokeWidth="0.5"
            strokeDasharray="1000"
            opacity="0.4"
          />
        </g>

        {/* Vertex points */}
        <circle className="animate-circle" cx="200" cy="120" r="3" fill="url(#primaryGradient)" />
        <circle className="animate-circle" cx="255" cy="155" r="3" fill="url(#primaryGradient)" />
        <circle className="animate-circle" cx="255" cy="215" r="3" fill="url(#primaryGradient)" />
        <circle className="animate-circle" cx="200" cy="250" r="3" fill="url(#primaryGradient)" />
        <circle className="animate-circle" cx="145" cy="215" r="3" fill="url(#primaryGradient)" />
        <circle className="animate-circle" cx="145" cy="155" r="3" fill="url(#primaryGradient)" />
        <circle className="animate-circle" cx="200" cy="185" r="4" fill="hsl(192, 95%, 55%)" />

        {/* Floating particles */}
        <circle className="animate-circle" cx="280" cy="100" r="1.5" fill="hsl(192, 95%, 55%)" opacity="0.6" />
        <circle className="animate-circle" cx="120" cy="280" r="1.5" fill="hsl(210, 100%, 60%)" opacity="0.5" />
        <circle className="animate-circle" cx="320" cy="250" r="1" fill="hsl(192, 95%, 55%)" opacity="0.4" />
        <circle className="animate-circle" cx="80" cy="150" r="1" fill="hsl(210, 100%, 60%)" opacity="0.4" />
        <circle className="animate-circle" cx="300" cy="180" r="1.5" fill="hsl(192, 95%, 55%)" opacity="0.5" />
        <circle className="animate-circle" cx="100" cy="200" r="1" fill="hsl(210, 100%, 60%)" opacity="0.3" />
      </svg>
    </div>
  );
};

export default HeroSVGModel;
