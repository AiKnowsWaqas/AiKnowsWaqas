
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  connections: number[];
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 10000), 100);
      const particles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          connections: []
        });
      }

      // Create connections between particles (simulating neural network)
      particles.forEach((particle, index) => {
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < connectionCount; i++) {
          const targetIndex = Math.floor(Math.random() * particles.length);
          if (targetIndex !== index && !particle.connections.includes(targetIndex)) {
            particle.connections.push(targetIndex);
          }
        }
      });

      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      
      // Draw connections first (lines between particles)
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)'; // Blue with low opacity
      ctx.lineWidth = 0.5;
      
      particles.forEach((particle, index) => {
        particle.connections.forEach(targetIndex => {
          const targetParticle = particles[targetIndex];
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(targetParticle.x, targetParticle.y);
          ctx.stroke();
        });
      });
      
      // Draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.7)'; // AI accent color
        ctx.fill();
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
