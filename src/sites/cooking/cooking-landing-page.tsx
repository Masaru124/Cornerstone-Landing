"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { BonusItem, ComparisonItem, FAQItem, FeatureItem } from "../digital-aura/types";
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "../digital-aura/icons";

const buyUrl = "https://superprofile.bio/vp/300--cooking---nutrition-reels-bundle---viral-food-video-content-";
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
    answer: "Yes. This is a one-time payment offer with lifetime access once your order is confirmed.",
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
    <div className="flex items-center justify-center gap-2 text-white">
      <span className="text-2xl font-bold">{formatted.hours}h</span>
      <span className="text-2xl">:</span>
      <span className="text-2xl font-bold">{formatted.minutes}m</span>
      <span className="text-2xl">:</span>
      <span className="text-2xl font-bold">{formatted.seconds}s</span>
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const open = openIndex === index;

        return (
          <div key={item.question} className="bg-white/10 backdrop-blur border border-white/20 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-white hover:bg-white/5 transition-colors"
            >
              <span>{item.question}</span>
              {open ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
            </button>
            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden px-6 pb-4 text-gray-300 leading-7">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function CookingLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-3 px-4 text-center text-sm font-bold">
        🎉 LAUNCH OFFER — 95% OFF this Week! · Only ₹69 · Price jumps to ₹699 after countdown
      </div>

      {/* Countdown */}
      <div className="bg-black/50 border-b border-white/10 py-4 px-4 text-center">
        <div className="text-sm text-gray-300 mb-3">Offer ends in</div>
        <CountdownTimer />
        <div className="text-xs text-gray-400 mt-2">· Price jumps to ₹699 after</div>
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-black text-white">Ultimate Cooking Bundle</div>
          <a
            href={buyUrl}
            className="bg-lime-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-lime-300 transition"
          >
            Enroll Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <div className="inline-block bg-white/10 text-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/20">
          India&apos;s #1 Cooking Content Bundle
        </div>

        <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Create Viral Cooking Reels.
          <br />
          <span className="text-lime-400">Earn Money.</span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          300+ Ready-to-post cooking reels. No PC. No paid software. No subscriptions. Just your phone and the right content — instant access, lifetime use.
        </p>

        {/* Pricing */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-5xl font-black text-lime-400">₹69</span>
          <div className="flex flex-col items-start">
            <span className="text-2xl text-gray-500 line-through">₹699</span>
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">95% OFF</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={buyUrl}
          className="inline-block bg-lime-400 text-black px-12 py-4 rounded-xl font-black text-lg hover:bg-lime-300 transition shadow-2xl mb-6"
        >
          Enroll Now — ₹69 →
        </a>

        <p className="text-sm text-gray-400">
          ✓ 7-day refund · ✓ Lifetime Access · ✓ Instant Download
        </p>

        {/* Social Proof */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-6">TRUSTED BY THOUSANDS</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["2.5M Followers", "3.6M Views", "₹2L/Month", "100+ Success Stories"].map((stat) => (
              <div key={stat} className="text-center">
                <div className="text-2xl font-black text-lime-400">{stat.split(" ")[0]}</div>
                <div className="text-sm text-gray-400">{stat.split(" ").slice(1).join(" ")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="border-y border-white/10 py-12 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "300+", label: "Ready-to-Post Videos" },
              { value: "MP4 HD", label: "Crystal Clear Format" },
              { value: "Lifetime", label: "No Subscriptions" },
              { value: "24/7", label: "Support Included" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-lime-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-black text-white mb-12 text-center">This Bundle Is For You If You Are</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {audienceItems.map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 p-6 rounded-lg text-center hover:bg-white/10 transition">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-lime-400/50">
                <Image src={item.src} alt={item.label} fill sizes="96px" className="object-cover" />
              </div>
              <h3 className="font-bold text-white">{item.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Videos */}
      <section className="bg-white/5 border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white mb-4 text-center">Sample Videos 👀</h2>
          <p className="text-center text-gray-300 mb-12">See how aesthetic cooking reels grow your account</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleVideoSources.map((src, index) => (
              <div key={src} className="bg-black border-2 border-lime-400/50 rounded-lg overflow-hidden">
                <video controls className="w-full aspect-[9/16] bg-black" poster={heroImage}>
                  <source src={src} type="video/mp4" />
                </video>
                <div className="p-3 text-sm font-bold text-gray-300 bg-black/50">Sample {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-black text-white mb-12 text-center">What You Get Inside</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featureItems.map((item) => (
            <div key={item.title} className="flex gap-4 bg-white/5 border border-white/10 p-6 rounded-lg">
              <div className="flex-shrink-0 text-2xl text-lime-400 font-bold">✓</div>
              <div>
                <p className="font-semibold text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before After */}
      <section className="bg-white/5 border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white mb-12 text-center">Before & After Using This Bundle</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/10 border-l-4 border-red-500 p-8 rounded-lg">
              <h3 className="text-2xl font-black text-red-400 mb-6">❌ WITHOUT BUNDLE</h3>
              <div className="space-y-4">
                {beforeItems.map((item) => (
                  <div key={item.text} className="flex gap-3">
                    <span className="text-red-500 font-bold text-xl">✗</span>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-lime-500/10 border-l-4 border-lime-400 p-8 rounded-lg">
              <h3 className="text-2xl font-black text-lime-400 mb-6">✅ WITH BUNDLE</h3>
              <div className="space-y-4">
                {afterItems.map((item) => (
                  <div key={item.text} className="flex gap-3">
                    <span className="text-lime-400 font-bold text-xl">✓</span>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-black text-white mb-4 text-center">4 FREE Bonuses Worth ₹20,000</h2>
        <p className="text-center text-gray-300 mb-12">Absolutely FREE when you enroll now!</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonusItems.map((item, index) => (
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-lime-400/50 transition">
              <div className="relative h-48 w-full bg-black border-b border-white/10">
                <Image src={item.src} alt={item.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <div className="inline-block bg-lime-400/20 text-lime-400 px-2 py-1 rounded text-xs font-bold mb-3">
                  Bonus {index + 1}
                </div>
                <h3 className="font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{item.details}</p>
                <p className="text-sm font-bold text-lime-400">Was {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="bg-white/5 border-y border-white/10 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6">100% Money-Back Guarantee</h2>
          <p className="text-2xl text-gray-300 mb-6">
            We have a <span className="text-lime-400 font-black">No Questions Asked</span> 100% Money Back Guarantee.
          </p>
          <p className="text-gray-400 text-lg">
            Just message us within 7 days if it is not for you and we will refund your money instantly. No questions, no hassles. Nothing to lose. Everything to gain.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-black text-white mb-12 text-center">Frequently Asked Questions</h2>
        <FAQAccordion />
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-lime-600 to-lime-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">Ready to Start Making Viral Content?</h2>
          <p className="text-xl text-black/80 mb-8">
            Get 300+ reels + 4 bonuses worth ₹20,000 for just ₹69. Limited time offer!
          </p>
          <a
            href={buyUrl}
            className="inline-block bg-black text-lime-400 px-12 py-5 rounded-xl font-black text-lg hover:bg-black/80 transition shadow-2xl"
          >
            Enroll Now — ₹69 →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-bold mb-4">© 2026 Digital Aura · 300+ Cooking Reels Bundle</p>
          <div className="space-x-6 text-sm text-gray-400 mb-6">
            <a href="https://www.termsfeed.com/live/cbca1312-dd69-430d-9830-e5818c0a1269" className="hover:text-lime-400 transition">
              Privacy Policy
            </a>
            <a href="https://www.termsfeed.com/live/34eb8140-1e5a-42d4-98f0-8f1457126922" className="hover:text-lime-400 transition">
              Terms & Conditions
            </a>
          </div>
          <p className="text-xs text-gray-500 max-w-3xl mx-auto">
            This site is not a part of Facebook Inc. This site is NOT endorsed by Facebook in any way. We make no guarantees about your ability to get results or earn money. See our terms for details.
          </p>
        </div>
      </footer>
    </main>
  );
}
