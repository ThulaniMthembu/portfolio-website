'use client';

import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect dark or light mode
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener('change', (e) => {
      setIsDarkMode(e.matches);
    });

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 40 : 80; // Reduced particle count for mobile
    const maxConnectionDistance = 120; // More subtle connection distance

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 3 + 1; // Smaller size for subtle effect
        this.speedX = (Math.random() * 1.5 - 0.75) * 0.5;
        this.speedY = (Math.random() * 1.5 - 0.75) * 0.5;
      }

      update(width: number, height: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;

        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = isDarkMode
          ? 'rgba(200, 200, 200, 0.8)' // Slightly more visible in dark mode
          : 'rgba(0, 0, 0, 0.5)';  // Black with moderate opacity for light mode
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = (ctx: CanvasRenderingContext2D, particle: Particle, others: Particle[]) => {
      others.forEach(other => {
        const distance = Math.sqrt((particle.x - other.x) ** 2 + (particle.y - other.y) ** 2);
        if (distance < maxConnectionDistance) {
          const opacity = 1 - distance / maxConnectionDistance;
          ctx.strokeStyle = isDarkMode
            ? `rgba(200, 200, 200, ${opacity * 0.3})` // Subtle line for dark mode
            : `rgba(0, 0, 0, ${opacity * 1})`;    // Black lines for light mode
          ctx.lineWidth = 0.5; // Thinner lines for less distraction
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
        drawConnections(ctx, particle, particles);
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default AnimatedBackground;
