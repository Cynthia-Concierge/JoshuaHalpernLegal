import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoItem {
  id: number;
  src: string;
  poster: string;
  title: string;
}

const VIDEO_BASE =
  "https://github.com/cynthiaconcierge/JoshuaHalpernLegal/releases/download/videos";

const VIDEOS: VideoItem[] = [
  { id: 1, src: `${VIDEO_BASE}/1.mp4`, poster: `${VIDEO_BASE}/1.jpg`, title: "" },
  { id: 2, src: `${VIDEO_BASE}/3.mp4`, poster: `${VIDEO_BASE}/3.jpg`, title: "" },
  { id: 3, src: `${VIDEO_BASE}/2.mp4`, poster: `${VIDEO_BASE}/2.jpg`, title: "" },
  { id: 4, src: `${VIDEO_BASE}/5.mp4`, poster: `${VIDEO_BASE}/5.jpg`, title: "" },
  { id: 5, src: `${VIDEO_BASE}/6.mp4`, poster: `${VIDEO_BASE}/6.jpg`, title: "" },
];

const VideoCard: React.FC<{ video: VideoItem }> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

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
          vid.play().then(() => setIsPlaying(true)).catch(() => {});
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

  const togglePlay = useCallback(() => {
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
          preload="none"
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
      </div>
    </div>
  );
};

const VideoCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
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

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 280;
    const gap = 16;
    const distance = (cardWidth + gap) * 2;
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-widest mb-4">
                Social Media
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Quick legal tips you can use today
              </h2>
              <p className="text-slate-500 text-lg mt-2">
                Short videos breaking down real business law topics.
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
