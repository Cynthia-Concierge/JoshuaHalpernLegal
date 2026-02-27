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
          {/* Massive bright shadow aura behind logo */}
          <div className="absolute inset-0 bg-white/60 blur-[120px] rounded-full animate-pulse-glow" />
          <div className="absolute inset-0 bg-white/50 blur-[100px] rounded-full animate-pulse-glow" style={{ animationDelay: '0.2s' }} />
          <div className="absolute inset-0 bg-blue-300/40 blur-[80px] rounded-full animate-pulse-glow" style={{ animationDelay: '0.4s' }} />

          {/* Scanning lines centered on logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-full h-full">
              <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-scan-down-centered" style={{ top: '40%' }} />
              <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-scan-up-centered" style={{ top: '60%' }} />
            </div>
          </div>

          {/* Logo with enhanced brightness */}
          <div className="relative z-10">
            <img
              src="/logo.png"
              alt="Legal Halp"
              className="w-80 h-80 md:w-[28rem] md:h-[28rem] object-contain"
              style={{
                filter: 'brightness(1.4) contrast(1.2) drop-shadow(0 0 60px rgba(255,255,255,0.8)) drop-shadow(0 0 100px rgba(255,255,255,0.6)) drop-shadow(0 0 140px rgba(96,165,250,0.4))'
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
