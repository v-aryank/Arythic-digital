import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingCurtainProps {
  onComplete?: () => void;
}

const LoadingCurtain = ({ onComplete }: LoadingCurtainProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const curtainRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete?.();
      },
    });

    // Logo animation
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }
    )
      .to(logoRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.4,
        ease: 'power3.in',
        delay: 0.3,
      })
      // Curtain split animation
      .to(
        topRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
        },
        '-=0.2'
      )
      .to(
        bottomRef.current,
        {
          yPercent: 100,
          duration: 0.8,
          ease: 'power4.inOut',
        },
        '<'
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[100] pointer-events-none"
    >
      {/* Top curtain */}
      <div
        ref={topRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-background"
        style={{
          background: 'linear-gradient(180deg, hsl(222 55% 2%) 0%, hsl(222 55% 4%) 100%)',
        }}
      />
      
      {/* Bottom curtain */}
      <div
        ref={bottomRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-background"
        style={{
          background: 'linear-gradient(0deg, hsl(222 55% 2%) 0%, hsl(222 55% 4%) 100%)',
        }}
      />
      
      {/* Logo in center */}
      <div
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="text-4xl md:text-6xl font-bold font-display gradient-text">
          ARYTHIC.
        </span>
      </div>
      
      {/* Glow line at split */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
    </div>
  );
};

export default LoadingCurtain;
