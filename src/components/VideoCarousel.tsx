import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, GraduationCap, Building2, Shield, FileText, Briefcase, TrendingUp } from "lucide-react";

interface VideoItem {
  id: number;
  src: string;
  poster: string;
  title: string;
  instagramUrl?: string;
}

const VIDEOS: VideoItem[] = [
  { id: 1, src: "/videos/1.mp4", poster: "/videos/1.jpg", title: "", instagramUrl: "https://www.instagram.com/p/PLACEHOLDER1/" },
  { id: 2, src: "/videos/3.mp4", poster: "", title: "", instagramUrl: "https://www.instagram.com/p/PLACEHOLDER2/" },
  { id: 3, src: "/videos/2.mp4", poster: "", title: "", instagramUrl: "https://www.instagram.com/p/PLACEHOLDER3/" },
  { id: 4, src: "/videos/5.mp4", poster: "", title: "", instagramUrl: "https://www.instagram.com/p/PLACEHOLDER4/" },
  { id: 5, src: "/videos/6.mp4", poster: "", title: "", instagramUrl: "https://www.instagram.com/p/PLACEHOLDER5/" },
];

const VideoCard: React.FC<{ video: VideoItem }> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Set webkit-playsinline attribute for iOS Safari compatibility
  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.setAttribute('webkit-playsinline', 'true');
      vid.setAttribute('playsinline', 'true');
    }
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const vid = videoRef.current;
        if (!vid) return;
        if (entry.isIntersecting) {
          // Lazy-load: set src only when card scrolls into view
          if (!videoLoaded) {
            vid.src = video.src;
            vid.load();
            setVideoLoaded(true);
          }
          // Attempt autoplay - iOS may block until user interaction
          const playPromise = vid.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => setIsPlaying(true))
              .catch((err) => {
                // Autoplay blocked - user needs to tap play button
                console.log('Autoplay prevented:', err);
                setIsPlaying(false);
              });
          }
        } else {
          vid.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [video.src, videoLoaded]);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    // Don't toggle play if clicking the Instagram link
    if ((e.target as HTMLElement).closest('a[href]')) {
      return;
    }
    e.preventDefault();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(false);
    }
    setShowControls(true);
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  }, []);

  useEffect(() => {
    if (!showControls || !isPlaying) return;
    const timer = setTimeout(() => setShowControls(false), 2000);
    return () => clearTimeout(timer);
  }, [showControls, isPlaying]);

  return (
    <div
      ref={cardRef}
      data-card
      className="flex-shrink-0 w-[220px] md:w-[250px] snap-start"
    >
      <div
        className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black group cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
        onClick={togglePlay}
        onMouseEnter={() => setShowControls(true)}
      >
        <video
          ref={videoRef}
          poster={video.poster}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
          x-webkit-airplay="allow"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10 pointer-events-none" />

        {/* Play/Pause overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-300 ${
            showControls || !isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white fill-white" />
            ) : (
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            )}
          </div>
        </div>

        {/* Mute button */}
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-30 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-white" />
          ) : (
            <Volume2 className="w-4 h-4 text-white" />
          )}
        </button>

        {/* Instagram-style top bar */}
        <div className="absolute top-0 left-0 right-0 p-3 flex items-center gap-2 z-20 pointer-events-none">
          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">JH</span>
          </div>
          <span className="text-white/80 text-xs font-medium">joshuahalpern</span>
        </div>

        {/* Bottom title (if provided) */}
        {video.title && (
          <div className="absolute bottom-0 left-0 right-12 p-4 z-20 pointer-events-none">
            <p className="text-white font-semibold text-sm leading-snug">
              {video.title}
            </p>
          </div>
        )}

        {/* Instagram link button */}
        {video.instagramUrl && (
          <div className="absolute bottom-4 left-4 z-30">
            <a
              href={video.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900 transition-all hover:scale-105 shadow-lg pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              View on Instagram
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const VideoCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const credentialsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [credShowLeftArrow, setCredShowLeftArrow] = useState(false);
  const [credCanScrollRight, setCredCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const checkCredScroll = () => {
    const el = credentialsScrollRef.current;
    if (!el) return;
    setCredShowLeftArrow(el.scrollLeft > 30);
    setCredCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  useEffect(() => {
    const el = credentialsScrollRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    setCredShowLeftArrow(false);
    el.addEventListener("scroll", checkCredScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", checkCredScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 280;
    const gap = 16;
    const distance = (cardWidth + gap) * 2;
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  };

  const scrollCredentials = (direction: "left" | "right") => {
    const el = credentialsScrollRef.current;
    if (!el) return;
    const cardWidth = 220;
    const gap = 16;
    const distance = (cardWidth + gap) * 2;
    if (direction === "right") {
      setCredShowLeftArrow(true);
    }
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Meet Josh Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <img
                  src="/josh-halpern-headshot.png"
                  alt="Josh Halpern"
                  className="w-28 h-28 rounded-2xl object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-1">
                  Meet Josh Halpern
                </h2>
                <p className="text-brand-gold-dark font-semibold mb-4">Founder, Legal Halp</p>
                <div className="space-y-3 text-brand-navy-darker leading-relaxed">
                  <p>
                    I spent years at BigLaw watching business owners get billed $3,000 for a contract review that took two hours. Traditional law firms are stuck in the billable hour model because it makes them rich — not because it serves you well.
                  </p>
                  <p>
                    Legal Halp is the modern alternative. I use AI to work faster and more efficiently — which means you get BigLaw-quality work at a fraction of the cost. Flat monthly fee. No timers. No surprise invoices. You can actually <strong>use</strong> your lawyer without second-guessing every email.
                  </p>
                  <p className="font-semibold text-brand-navy">
                    Every piece of work is personally handled by me — a licensed attorney with 10+ years of experience who knows how to wield AI as a force multiplier, not a replacement for judgment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-widest">
              Credentials
            </span>
          </div>

          <div className="relative">
            {/* Navigation arrows */}
            {credShowLeftArrow && (
              <button
                type="button"
                onClick={() => scrollCredentials("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all"
                aria-label="Previous credentials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {credCanScrollRight && (
              <button
                type="button"
                onClick={() => scrollCredentials("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all"
                aria-label="Next credentials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <div ref={credentialsScrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar px-12">
              {/* Credential cards */}
              <div className="flex-shrink-0 w-[220px] snap-start">
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-brand-navy font-medium leading-relaxed text-sm">
                        J.D., Cleveland-Marshall College of Law
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[220px] snap-start">
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-brand-navy font-medium leading-relaxed text-sm">
                        Former BigLaw Associate, Taft, Stettinius & Hollister LLP (1,500+ attorneys)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[220px] snap-start">
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-brand-navy font-medium leading-relaxed text-sm">
                        Licensed in Ohio, and partnered with local attorneys nationwide (for jurisdiction-specific matters)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[220px] snap-start">
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-brand-navy font-medium leading-relaxed text-sm">
                        Practice Areas: Business Formation, Estate Planning, Contracts, IP, Real Estate, Mergers & Acquisitions, Venture Capital, General Counsel
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[220px] snap-start">
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-brand-navy font-medium leading-relaxed text-sm">
                        1,000+ estate plans drafted
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[220px] snap-start">
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-brand-navy font-medium leading-relaxed text-sm">
                        500+ businesses protected
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-[220px] snap-start">
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-brand-navy font-medium leading-relaxed text-sm">
                        $250M+ in transactions closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="flex justify-center mt-4">
              <p className="text-slate-400 text-sm">Swipe to see more &rarr;</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-widest mb-4">
                Social Media
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
                Get to Know Legal Halp
              </h2>
              <p className="text-slate-500 text-lg mt-2">
                Short videos breaking down how we think about law and help businesses like yours.
              </p>
            </div>

            {/* Desktop arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 no-scrollbar"
          >
            {VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {/* Mobile scroll hint */}
          <div className="flex justify-center mt-4 md:hidden">
            <p className="text-slate-400 text-sm">Swipe to see more &rarr;</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
