import { useNavigate } from "react-router-dom";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DashboardShowcase from "@/components/DashboardShowcase";
import ValueStack from "@/components/ValueStack";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import VideoCarousel from "@/components/VideoCarousel";

declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, unknown>,
      ...args: unknown[]
    ) => void;
  }
}

const Index = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    question: string;
  }) => {
    const eventId = `lead_${crypto.randomUUID()}`;
    const API_BASE_URL = import.meta.env.VITE_API_URL ?? (import.meta.env.DEV ? "" : "");

    try {
      try {
        await fetch(`${API_BASE_URL}/api/save-contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            question: formData.question,
            source: "ask-lawyer",
          }),
        });
      } catch (e) {
        console.error("Error saving contact:", e);
      }

      try {
        await fetch(`${API_BASE_URL}/api/track-meta-lead`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            phone: formData.phone,
            firstName: formData.name?.split(" ")[0] ?? "",
            lastName: formData.name?.split(" ").slice(1).join(" ") ?? "",
            eventSourceUrl: window.location.href,
            eventId,
          }),
        });
      } catch (e) {
        console.error("Error tracking lead:", e);
      }

      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Ask a Lawyer Question Submission",
          content_category: "Lead Generation",
        }, { eventID: eventId });
      }
    } catch (e) {
      console.error("Error submitting form:", e);
    }

    navigate("/thank-you");
  };

  const handleScrollToForm = () => {
    const el = document.getElementById("enter-your-info-form");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onFormSubmit={handleFormSubmit} />
      <Features />
      <VideoCarousel />

      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center tracking-tight">
              Ask your question now. It's free.
            </h2>
            <LeadForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </section>

      <DashboardShowcase />
      <ValueStack onGetDocumentsClick={handleScrollToForm} />
      <Footer />

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <button
          type="button"
          onClick={handleScrollToForm}
          className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-slate-900/30 transform active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span className="tracking-wide">Ask Your Question Now →</span>
        </button>
      </div>
    </div>
  );
};

export default Index;
