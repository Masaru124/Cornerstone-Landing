"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  BonusItem,
  ComparisonItem,
  FAQItem,
  FeatureItem,
} from "../digital-aura/types";
import { ChevronDownIcon, ChevronUpIcon } from "../digital-aura/icons";

const buyUrl =
  "https://superprofile.bio/vp/300--cooking---nutrition-reels-bundle---viral-food-video-content-";
const heroImage = "/images/cooking/payment-moguj-1-3.webp";

const audienceItems = [
  { label: "Student", src: "/images/cooking/students.png" },
  { label: "Youtuber", src: "/images/cooking/youtuber.png" },
  { label: "Entrepreneur", src: "/images/cooking/entrepreneur-1024x1024.webp" },
  { label: "Instragrammer", src: "/images/cooking/influencer.png" },
  { label: "Freelancer", src: "/images/cooking/freelance-work.png" },
  { label: "Agency Owner", src: "/images/cooking/public-relations.png" },
  { label: "Self Employee", src: "/images/cooking/programmer.png" },
  { label: "Housewife", src: "/images/cooking/housewife.png" },
  { label: "Chef", src: "/images/cooking/cooking.png" },
  { label: "Small Business Owner", src: "/images/cooking/store.png" },
  { label: "Digital Marketer", src: "/images/cooking/social-media.png" },
  { label: "Food Blogger", src: "/images/cooking/bibimbap.png" },
];

const featureItems: FeatureItem[] = [
  { icon: "✓", title: "300+ ready-to-post Aesthetic videos (MP4 format)" },
  { icon: "✓", title: "Healthy recipes and cooking inspiration" },
  { icon: "✓", title: "Smart food hacks and quick meals" },
  { icon: "✓", title: "Nutrition and wellness facts" },
  { icon: "✓", title: "Lifestyle and diet motivation" },
  { icon: "✓", title: "Faceless, clean, and adaptable content for any page" },
  { icon: "✓", title: "Instant Download Link + Lifetime Access" },
  { icon: "✓", title: "Crystal Clear HD Quality" },
  { icon: "✓", title: "Huge Time Saver Perfect for Busy Creators & Students" },
  { icon: "✓", title: "Immediate Delivery – No Waiting, No Delays" },
  { icon: "✓", title: "Free Quality Bonuses Of Worth ₹20,000/-" },
];

const beforeItems: ComparisonItem[] = [
  { text: 'Roz "viral food reels" ya "cooking content ideas" search karna' },
  { text: "Random videos download (low quality / watermark problem)" },
  { text: "Editing, cutting, captions me 1–2 ghante waste" },
  { text: "Views stuck at 100–500, engagement low" },
  { text: "Consistency maintain nahi hoti (2–3 din me gap)" },
  { text: "Same boring recipes → audience interest down" },
  { text: "Unique & viral format content nahi milta" },
  { text: "Growth slow + frustration + demotivation" },
];

const afterItems: ComparisonItem[] = [
  { text: "300+ ready-to-post HD cooking reels ek hi jagah" },
  { text: "No watermark, clean & premium quality content" },
  { text: "30–60 seconds me reel ready → direct upload" },
  { text: "Daily 2–3 reels easily post → no stress" },
  { text: "Trending food + nutrition content → high watch time" },
  { text: "Peace of mind with 100% Satisfation" },
  { text: "Consistency = algorithm push → faster growth" },
  { text: "Audience save, share & follow karna start karegi" },
];

const bonusItems: Array<BonusItem & { details: string; src: string }> = [
  {
    title: "1600+ Satisfying Fruit Cutting Reels Bundle",
    subtitle: "Bonus 1",
    price: "₹5000/-",
    details:
      "Get access to a massive collection of 1600+ satisfying fruit cutting reels 🍉🔪. These visually addictive, high-retention videos are designed to keep viewers hooked till the end, making them highly shareable with strong viral potential, helping you gain more views, followers and boost your overall reach effortlessly. 🚀",
    src: "/images/cooking/1600-fruit-cutting-reels-bundle-823x1024.png",
  },
  {
    title: "500+ Ai Health Reels Bundle",
    subtitle: "Bonus 2",
    price: "₹5000/-",
    details:
      "Get access to a powerful collection of 500+ AI Health Awareness Talking Object Reels 🧠✨. These unique, attention-grabbing reels use talking objects to deliver health messages in a fun and engaging way, making them highly shareable with strong viral potential, helping you educate your audience while increasing views, engagement and page growth effortlessly. 🚀",
    src: "/images/cooking/imgi_27_d5fdbf15-5d6d-4076-93a7-1dba98013f5d-md-1-1.jpg",
  },
  {
    title: "Instagram Growth Mastery Course",
    subtitle: "Bonus 3",
    price: "₹5000/-",
    details:
      "Learn how to turn your Instagram page into a powerful growth machine. This course covers proven strategies for gaining followers quickly, boosting reel engagement, and accessing Instagram's monetization features. Ideal for anyone looking to build a strong theme page.",
    src: "/images/cooking/20250904_1636251-1024x1024.png",
  },
  {
    title: "Youtube Growth Mastery Course",
    subtitle: "Bonus 4",
    price: "₹5000/-",
    details:
      "Unlock the secrets to building a successful YouTube channel from scratch. This step-by-step course teaches you how to grow subscribers, increase watch time, and monetize your channel using Shorts and long-form videos. Perfect for turning your anime content into a reliable income stream.",
    src: "/images/cooking/20250904_1637241-1024x1024.png",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is included in this Bundle?",
    answer:
      "You get 300+ ready-to-post cooking and nutrition reels in MP4 format, plus access to the bonuses listed on the page after purchase.",
  },
  {
    question: "What If I Don't Receive My Product?",
    answer:
      "If delivery does not come through immediately, reach out through the checkout support channel and we will resend your access details.",
  },
  {
    question: "Is this a one-time payment?",
    answer:
      "Yes. This is a one-time payment offer with lifetime access once your order is confirmed.",
  },
  {
    question: "How do I access the assets after purchase?",
    answer:
      "After payment you receive an instant download link. The files are ready to use right away without extra setup.",
  },
  {
    question: "Are there any bonuses included?",
    answer:
      "Yes. You get four free bonuses worth ₹20,000, including fruit cutting reels, AI health reels, and growth courses.",
  },
  {
    question: "What if I have trouble accessing the assets?",
    answer:
      "If anything breaks or the access link is confusing, contact support and we will help you get the bundle files.",
  },
];

const sampleVideoSources = [
  "/videos/cooking/SnapInsta.to_AQOypvUTDVzpNZspWEm3cL9oqrcQAHdikutb-Wguat8y3nLYlHSnP2k56bh9_cTAv33kl2qAQOlkAE8mS5nt1OCCpvC-KWnmOTv5HA4.mp4",
  "/videos/cooking/SnapInsta.to_AQMa6LZuuFwcSr01OXCCobmEKEzX8Nhthgc5JQPElsYpsNxUttKT9HzaNLU8vWdWfbYo2PEDOnLR9yhVhyer76B44bSY0yNK9RTxAOQ.mp4",
  "/videos/cooking/SnapInsta.to_AQMP8TlFG6oaXyctJS-xx9qmeKg2mTkdJWQVlB_vVMwqbSJnLODqRfrfY8JTHunWDjJ5_BGybi7zsNBYkUttJASgOQv5F8_ZJWbQz0k.mp4",
  "/videos/cooking/SnapInsta.to_AQNoR5J4M50r8Q_yDLH83i0LKuBuJSIGYOC0stlABK2-Y4605pVS26bp7IRzIbtaGTEoc745ibBecW1ShqJSIyb_.mp4",
];

const sampleVideoPosters = [
  "/images/cooking/1600-fruit-cutting-reels-bundle-823x1024.png",
  "/images/cooking/20250904_1636251-1024x1024.png",
  "/images/cooking/bibimbap.png",
  "/images/cooking/cooking.png",
];

function CountdownTimer() {
  const [secondsLeft, setSecondsLeft] = useState(4 * 60 * 60 + 58 * 60 + 54);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const formatted = useMemo(() => {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }, [secondsLeft]);

  return (
    <div className="flex items-center justify-center gap-2 text-black">
      <span className="text-2xl font-bold">{formatted.hours}h</span>
      <span className="text-2xl">:</span>
      <span className="text-2xl font-bold">{formatted.minutes}m</span>
      <span className="text-2xl">:</span>
      <span className="text-2xl font-bold">{formatted.seconds}s</span>
    </div>
  );
}

function VideoWithGeneratedPoster({
  src,
  className,
  controls = true,
  posterTime = 0.5,
}: {
  src: string;
  className?: string;
  controls?: boolean;
  posterTime?: number;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [poster, setPoster] = useState<string | undefined>(undefined);

  useEffect(() => {
    let mounted = true;
    const offscreen = document.createElement("video");
    offscreen.crossOrigin = "anonymous";
    offscreen.preload = "metadata";
    offscreen.src = src;
    offscreen.muted = true;

    const capture = () => {
      try {
        const w = offscreen.videoWidth || 480;
        const h = offscreen.videoHeight || 270;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(offscreen, 0, 0, w, h);
        const data = canvas.toDataURL("image/jpeg", 0.8);
        if (mounted) setPoster(data);
      } catch (e) {
        // ignore capture errors
      }
    };

    const handleLoaded = () => {
      // seek to a small time to get an interesting frame
      const seekTime = Math.min(
        posterTime,
        Math.max(0.1, offscreen.duration / 4 || 0.5),
      );
      const onSeeked = () => {
        capture();
        offscreen.removeEventListener("seeked", onSeeked);
      };
      offscreen.addEventListener("seeked", onSeeked);
      try {
        offscreen.currentTime = seekTime;
      } catch (e) {
        // some browsers may throw; fallback to immediate capture
        capture();
      }
    };

    offscreen.addEventListener("loadeddata", handleLoaded);
    // fallback if loadeddata never fires quickly
    const timeout = window.setTimeout(() => handleLoaded(), 1500);

    return () => {
      mounted = false;
      offscreen.pause();
      offscreen.removeAttribute("src");
      offscreen.load();
      offscreen.removeEventListener("loadeddata", handleLoaded);
      window.clearTimeout(timeout);
    };
  }, [src, posterTime]);

  return (
    <video
      ref={videoRef}
      controls={controls}
      className={className}
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={item.question}
            className="bg-white border border-black/10 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-black hover:bg-gray-50 transition-colors"
            >
              <span>{item.question}</span>
              {open ? (
                <ChevronUpIcon className="h-5 w-5" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" />
              )}
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden px-6 pb-4 text-gray-700 leading-7">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function CookingLandingPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] text-black font-poppins">
      {/* Top Banner */}
      <div className="bg-[#8c0000] py-3 px-4 text-center text-sm font-bold text-white">
        🎉 LAUNCH OFFER — 95% OFF this Week! · Only ₹89 · Price jumps to ₹699
        after countdown
      </div>

      {/* Countdown */}
      <div className="bg-black/5 border-b border-black/10 py-4 px-4 text-center">
        <div className="text-sm text-gray-600 mb-3">Offer ends in</div>
        <CountdownTimer />
        <div className="text-xs text-gray-500 mt-2">
          · Price jumps to ₹699 after
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-black/10 bg-white/80 backdrop-blur sticky top-0 z-40"></header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <div className="inline-block bg-[#8c0000]/10 text-[#8c0000] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#8c0000]/20">
          India&apos;s #1 Cooking Content Bundle
        </div>

        <h1 className="text-9xl lg:text-[7rem] font-light mb-6 leading-tight font-garamond italic">
          <span className="text-[#8c0000] glow-red-strong">300+ Viral</span>
          <br />
          <span className="text-black">Cooking Reels Bundle</span>
          <br />
        </h1>

        {/* Video and description side-by-side (portrait video left on md+) */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-col items-start gap-8">
            <div className="md:flex-1 mt-4 md:mt-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready-to-post aesthetic cooking videos to grow your food page
                faster.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-5xl font-black text-[#8c0000]">₹89</span>
          <div className="flex flex-col items-start">
            <span className="text-2xl text-gray-500 line-through">₹699</span>
            <span className="bg-[#8c0000] text-white px-3 py-1 rounded-full text-sm font-bold">
              95% OFF
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={buyUrl}
          className="inline-block bg-[#8c0000] text-white px-12 py-4 rounded-xl font-black text-lg hover:bg-[#a30000] transition shadow-2xl mb-6"
        >
          Enroll Now — ₹89 →
        </a>

        <p className="text-sm text-gray-500">
          ✓ 7-day refund · ✓ Lifetime Access · ✓ Instant Download
        </p>
      </section>

      {/* Instant Download / Key Features - adapted from live site with custom icons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-light text-black mb-6 text-center font-garamond italic">
          NOW AVAILABLE FOR INSTANT DOWNLOAD!
        </h2>

        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Everything you need to run a high-performing food page: aesthetic,
          ready-to-post reels, clear formats, and bonus assets — all delivered
          instantly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#8c0000]/10 text-[#8c0000] rounded-lg flex items-center justify-center">
              {/* Chef hat icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3c-2 0-4 1.5-4 3.5S9 10 12 10s4-2.5 4-3.5S14 3 12 3z"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 13.5A3.5 3.5 0 0 1 8.5 10H15a3.5 3.5 0 0 1 3.5 3.5V15H5v-1.5z"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-black">
                300+ Aesthetic Reels
              </div>
              <div className="text-sm text-gray-600">
                High-retention, edit-ready vertical videos.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#8c0000]/10 text-[#8c0000] rounded-lg flex items-center justify-center">
              {/* Nutrition icon (apple + heart) */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21s-6-4.5-6-9a6 6 0 0 1 12 0c0 4.5-6 9-6 9z"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 7c0-1.7 1.3-3 3-3"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-black">Healthy & Trendy</div>
              <div className="text-sm text-gray-600">
                Recipes and formats that get shares and saves.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#8c0000]/10 text-[#8c0000] rounded-lg flex items-center justify-center">
              {/* Lightning / fast icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-black">
                Post-Ready in Seconds
              </div>
              <div className="text-sm text-gray-600">
                No editing required — open, caption, upload.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#8c0000]/10 text-[#8c0000] rounded-lg flex items-center justify-center">
              {/* Download / instant access icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3v12"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 11l4 4 4-4"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="17"
                  width="18"
                  height="4"
                  rx="1"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-black">Instant Download</div>
              <div className="text-sm text-gray-600">
                Delivered immediately after purchase.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#8c0000]/10 text-[#8c0000] rounded-lg flex items-center justify-center">
              {/* HD camera */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="6"
                  width="14"
                  height="12"
                  rx="2"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                />
                <path
                  d="M17 9l4-2v10l-4-2"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-black">Crystal Clear HD</div>
              <div className="text-sm text-gray-600">
                Sharp vertical videos, ready for reels & shorts.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#8c0000]/10 text-[#8c0000] rounded-lg flex items-center justify-center">
              {/* Bonus/gift icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="8"
                  width="18"
                  height="10"
                  rx="1"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                />
                <path
                  d="M12 8v10"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 6c1-2 4-2 4 0s3 2 4 0"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-black">
                Bonus Packs Included
              </div>
              <div className="text-sm text-gray-600">
                Extra bundles worth ₹20,000 — free with purchase.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#8c0000]/10 text-[#8c0000] rounded-lg flex items-center justify-center">
              {/* Support / lifetime icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12h8"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-black">Lifetime Access</div>
              <div className="text-sm text-gray-600">
                Download once, use forever — no subscriptions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="border-y border-black/10 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "300+", label: "Ready-to-Post Videos" },
              { value: "MP4 HD", label: "Crystal Clear Format" },
              { value: "Lifetime", label: "No Subscriptions" },
              { value: "24/7", label: "Support Included" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-[#8c0000] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CHECK HOW AESTHETIC COOKING REELS CAN GROW YOUR ACCOUNT QUICKLY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-light text-black mb-4 text-center font-garamond italic">
          CHECK HOW AESTHETIC COOKING REELS CAN GROW YOUR ACCOUNT QUICKLY
        </h2>

        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Short, snackable cooking reels build consistent reach — more saves,
          shares and profile visits. Use our ready-made formats to post daily
          and trigger algorithmic growth.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-[#fff7f7] rounded-lg text-center border border-black/5">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#8c0000]/10 text-[#8c0000] mb-4">
              {/* Followers up icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 17h4l3-7 4 9 3-5 4 3"
                  stroke="#8c0000"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-2xl font-black text-[#8c0000] mb-1">
              +20–80% Reach
            </div>
            <div className="text-sm text-gray-600">
              More organic viewers per post
            </div>
          </div>

          <div className="p-6 bg-[#fff7f7] rounded-lg text-center border border-black/5">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#8c0000]/10 text-[#8c0000] mb-4">
              {/* Engagement icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21s-6-4.5-6-9a6 6 0 0 1 12 0c0 4.5-6 9-6 9z"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 7c0-1.7 1.3-3 3-3"
                  stroke="#8c0000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-2xl font-black text-[#8c0000] mb-1">
              +2–5× Engagement
            </div>
            <div className="text-sm text-gray-600">
              Higher likes, comments and saves
            </div>
          </div>

          <div className="p-6 bg-[#fff7f7] rounded-lg text-center border border-black/5">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#8c0000]/10 text-[#8c0000] mb-4">
              {/* Share / Saves icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"
                  stroke="#8c0000"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3v13"
                  stroke="#8c0000"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 7l4-4 4 4"
                  stroke="#8c0000"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-2xl font-black text-[#8c0000] mb-1">
              More Shares & Saves
            </div>
            <div className="text-sm text-gray-600">
              Create evergreen content people keep reposting
            </div>
          </div>
        </div>

        {/* Digital-Aura image strip requested by user */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 items-stretch max-w-5xl mx-auto">
          <Image
            src="/images/digital-aura/IMG_20250815_1704421-509x1024.jpg"
            alt="Digital Aura 1"
            width={300}
            height={600}
            className="object-cover rounded-md border border-black/5 shadow-sm"
          />

          <Image
            src="/images/digital-aura/IMG_20250815_1704181-512x1024.jpg"
            alt="Digital Aura 2"
            width={300}
            height={600}
            className="object-cover rounded-md border border-black/5 shadow-sm"
          />

          <Image
            src="/images/digital-aura/IMG_20250815_1703471-511x1024.jpg"
            alt="Digital Aura 3"
            width={300}
            height={600}
            className="object-cover rounded-md border border-black/5 shadow-sm"
          />

          <Image
            src="/images/digital-aura/IMG_20250815_1703241-512x1024.jpg"
            alt="Digital Aura 4"
            width={300}
            height={600}
            className="object-cover rounded-md border border-black/5 shadow-sm"
          />
        </div>
      </section>

      {/* Sample Videos */}
      <section className="bg-black border-y border-black/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-white mb-4 text-center font-garamond italic">
            Sample Videos 👀
          </h2>
          <p className="text-center text-gray-300 mb-12">
            See how aesthetic cooking reels grow your account
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleVideoSources.map((src, index) => (
              <div
                key={src}
                className="relative overflow-visible glow-red-subtle"
              >
                <VideoWithGeneratedPoster
                  src={src}
                  className="w-full aspect-[9/16]"
                  posterTime={index === 0 ? 13 : 0.5}
                />
                <div className="p-3 text-sm font-bold text-gray-300 bg-transparent">
                  Sample {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Check Out Section beside video */}
          <div className="mt-12 flex items-center justify-center">
            <div className="w-full max-w-2xl text-center">
              <h3 className="text-2xl font-light text-white mb-4 font-garamond italic">
                Ready to Start Making Viral Content?
              </h3>
              <p className="text-gray-300 mb-6">
                Includes bonus content worth ₹20,000.
              </p>
              <a
                href={buyUrl}
                className="inline-block bg-[#8c0000] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#a30000] transition shadow-2xl"
              >
                Download Now 89/-
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-light text-black mb-12 text-center font-garamond italic">
          This Bundle Is For You If You Are
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featureItems.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 bg-white border border-black/10 p-6 rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0 text-2xl text-[#8c0000] font-bold">
                ✓
              </div>
              <div>
                <p className="font-semibold text-black">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before After */}
      <section className="bg-white border-y border-black/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-black mb-12 text-center font-garamond italic">
            Before & After Using This Bundle
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
              <h3 className="text-2xl font-light text-red-600 mb-6 font-garamond italic">
                ❌ WITHOUT BUNDLE
              </h3>
              <div className="space-y-4">
                {beforeItems.map((item) => (
                  <div key={item.text} className="flex gap-3">
                    <span className="text-red-500 font-bold text-xl">✗</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#8c0000]/10 border-l-4 border-[#8c0000] p-8 rounded-lg">
              <h3 className="text-2xl font-light text-[#8c0000] mb-6 font-garamond italic">
                ✅ WITH BUNDLE
              </h3>
              <div className="space-y-4">
                {afterItems.map((item) => (
                  <div key={item.text} className="flex gap-3">
                    <span className="text-[#8c0000] font-bold text-xl">✓</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses (temporarily hidden) */}
      <section
        aria-hidden="true"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 hidden"
      >
        <h2 className="text-4xl font-light text-black mb-4 text-center font-garamond italic">
          4 FREE Bonuses Worth ₹20,000
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Absolutely FREE when you enroll now!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonusItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-white border border-black/10 rounded-lg overflow-hidden hover:border-[#8c0000]/50 transition shadow-sm"
            >
              <div className="relative h-48 w-full bg-black border-b border-black/10">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="inline-block bg-[#8c0000]/10 text-[#8c0000] px-2 py-1 rounded text-xs font-bold mb-3">
                  Bonus {index + 1}
                </div>
                <h3 className="font-bold text-black mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.details}
                </p>
                <p className="text-sm font-bold text-[#8c0000]">
                  Was {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="bg-white border-y border-black/10 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-black mb-6 font-garamond italic">
            100% Money-Back Guarantee
          </h2>
          <p className="text-2xl text-gray-700 mb-6">
            We have a{" "}
            <span className="text-[#8c0000] font-black">
              No Questions Asked
            </span>{" "}
            100% Money Back Guarantee.
          </p>
          <p className="text-gray-600 text-lg">
            Just message us within 7 days if it is not for you and we will
            refund your money instantly. No questions, no hassles. Nothing to
            lose. Everything to gain.
          </p>
        </div>
      </section>

      {/* FAQ */}
      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-light text-black mb-6 text-center font-garamond italic">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden bg-white border border-black/5 shadow-sm">
            <Image
              src="/images/digital-aura/20250131_162259-1024x682.png"
              alt="Testimonial 1"
              width={1024}
              height={682}
              className="object-cover w-full h-56"
            />
          </div>

          <div className="rounded-lg overflow-hidden bg-white border border-black/5 shadow-sm">
            <Image
              src="/images/digital-aura/20250131_162641-1024x682.png"
              alt="Testimonial 2"
              width={1024}
              height={682}
              className="object-cover w-full h-56"
            />
          </div>

          <div className="rounded-lg overflow-hidden bg-white border border-black/5 shadow-sm">
            <Image
              src="/images/digital-aura/20250131_162942-1024x682.png"
              alt="Testimonial 3"
              width={1024}
              height={682}
              className="object-cover w-full h-56"
            />
          </div>

          <div className="rounded-lg overflow-hidden bg-white border border-black/5 shadow-sm">
            <Image
              src="/images/digital-aura/20250131_163223-1024x682.png"
              alt="Testimonial 4"
              width={1024}
              height={682}
              className="object-cover w-full h-56"
            />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-light text-black mb-12 text-center font-garamond italic">
          Frequently Asked Questions
        </h2>
        <FAQAccordion />
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#8c0000] to-[#a30000] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 font-garamond italic">
            Ready to Start Making Viral Content?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Includes bonus content worth ₹20,000.
          </p>
          <a
            href={buyUrl}
            className="inline-block bg-white text-[#8c0000] px-12 py-5 rounded-xl font-black text-lg hover:bg-gray-100 transition shadow-2xl"
          >
            Download Now 89/-
          </a>
        </div>
      </section>

      {/* Persistent Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#8c0000] text-white py-3 px-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold font-poppins">
              300+ Viral Cooking Reels Bundle
            </span>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
              Only ₹89
            </span>
          </div>
          <a
            href={buyUrl}
            className="bg-white text-[#8c0000] px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition font-poppins"
          >
            Download Now
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-black/10 py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-black font-bold mb-4">
            2026 Wekreators | 300+ Cooking Reels Bundle
          </p>
          <div className="space-x-6 text-sm text-gray-500 mb-6">
            <a
              href="https://www.termsfeed.com/live/cbca1312-dd69-430d-9830-e5818c0a1269"
              className="hover:text-[#8c0000] transition"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.termsfeed.com/live/34eb8140-1e5a-42d4-98f0-8f1457126922"
              className="hover:text-[#8c0000] transition"
            >
              Terms & Conditions
            </a>
          </div>
          <p className="text-xs text-gray-500 max-w-3xl mx-auto">
            This site is not a part of Facebook Inc. This site is NOT endorsed
            by Facebook in any way. We make no guarantees about your ability to
            get results or earn money. See our terms for details.
          </p>
        </div>
      </footer>
    </main>
  );
}
