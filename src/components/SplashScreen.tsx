import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'loading' | 'expanding' | 'complete'>('loading');

  useEffect(() => {
    // Stage 1: Show logo with animation (5 seconds)
    const timer1 = setTimeout(() => {
      setStage('expanding');
    }, 5000);

    // Stage 2: Expand and fade out (1.5 seconds)
    const timer2 = setTimeout(() => {
      setStage('complete');
      // Wait for animation to complete before calling onComplete
      setTimeout(onComplete, 700);
    }, 6500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-300 ${
        stage === 'complete' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/15 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-scan-down" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-scan-up" />
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo container */}
        <div
          className={`relative transition-all duration-1000 ${
            stage === 'loading'
              ? 'scale-100 opacity-0 animate-fade-in-scale'
              : stage === 'expanding'
              ? 'scale-150 opacity-0'
              : 'scale-150 opacity-0'
          }`}
        >
          {/* Multiple layered glows for dramatic effect */}
          <div className="absolute inset-0 bg-white/40 blur-[100px] rounded-full animate-pulse-glow" />
          <div className="absolute inset-0 bg-blue-400/50 blur-[80px] rounded-full animate-pulse-glow" style={{ animationDelay: '0.3s' }} />
          <div className="absolute inset-0 bg-blue-300/30 blur-[60px] rounded-full animate-pulse-glow" style={{ animationDelay: '0.6s' }} />

          {/* Logo with enhanced brightness and contrast */}
          <div className="relative z-10 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20">
            <img
              src="/logo.png"
              alt="Legal Halp"
              className="w-72 h-72 md:w-96 md:h-96 object-contain filter brightness-125 contrast-110 drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]"
              style={{
                filter: 'brightness(1.3) contrast(1.15) drop-shadow(0 0 40px rgba(255,255,255,0.6)) drop-shadow(0 0 80px rgba(96,165,250,0.4))'
              }}
            />
          </div>
        </div>

        {/* Text below logo */}
        <div
          className={`mt-8 text-center transition-all duration-1500 ${
            stage === 'loading' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
          style={{ transitionDelay: '1.5s' }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
            Legal Halp
          </h1>
          <p className="text-blue-300 text-sm md:text-base font-medium animate-pulse">
            AI-Enabled Legal Services
          </p>
        </div>

        {/* Loading bar */}
        <div
          className={`mt-12 w-64 h-1 bg-slate-700 rounded-full overflow-hidden transition-opacity duration-500 ${
            stage === 'loading' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-loading-bar" />
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-400/30 rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-blue-400/30 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-blue-400/30 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-blue-400/30 rounded-br-lg" />
    </div>
  );
};

export default SplashScreen;
