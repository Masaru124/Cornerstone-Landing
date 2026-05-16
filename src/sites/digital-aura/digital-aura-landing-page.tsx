"use client";

import { useEffect, useMemo, useState } from "react";
import type { BonusItem, ComparisonItem, FAQItem, FeatureItem } from "./types";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  CloseIcon,
  WhatsAppIcon,
} from "./icons";

const buyUrl = "https://superprofile.bio/vp/your-payment-page-title-here-935-491";

const featureItems: FeatureItem[] = [
  { icon: "✅", title: "Get 1000+ Luxury Lifestyle Readymade Reel Videos" },
  { icon: "✅", title: "Ready-Made Reels Without logo & Watermark" },
  { icon: "✅", title: "Get Instant Download Link & Lifetime Access" },
  { icon: "✅", title: "HD Quality" },
  { icon: "✅", title: "Time Saving: Saves lot of Time of Creators" },
  { icon: "✅", title: "Free Quality Bonuses Of Worth ₹10,000/-" },
];

const socialPlatforms = ["Facebook", "Twitter", "Youtube", "Pinterest", "Instagram", "Snapchat"];

const moneyIdeas = [
  "Sponsored Posts",
  "Sell Your Own Products",
  "Promote Your Services",
  "Exclusive Content",
  "Offer Consulting or Coaching",
  "Merchandise/Shoutouts",
];

const stepItems = [
  "Get Our Viral Luxury Lifestyle Reels Bundle Today!",
  "Download & Start Uploading These Reels",
  "Grow Your Theme Page And Start Earning",
];

const beforeItems: ComparisonItem[] = [
  { text: "Struggling to come up with luxury-themed reel ideas" },
  { text: "Videos look amateur and don’t grab attention" },
  { text: "Low engagement and poor audience retention" },
  { text: "Hours wasted editing without premium results" },
  { text: "No consistent brand aesthetic" },
  { text: "Can’t compete with high-end creators" },
  { text: "Running out of content ideas" },
  { text: "Missing out on brand deals & collaborations" },
];

const afterItems: ComparisonItem[] = [
  { text: "Endless luxury reel ideas ready to use" },
  { text: "Premium, polished, high-end video look instantly" },
  { text: "Faster Follower Growth" },
  { text: "Engagement and views grow rapidly" },
  { text: "Professional results in minutes" },
  { text: "Compete with and surpass luxury niche creators" },
  { text: "Peace of mind with 100% Satisfation" },
  { text: "Impress influencers, brands, and clients, opening doors to partnerships." },
  { text: "Spend less time creating and more time growing your social media presence." },
];

const bonusItems: BonusItem[] = [
  { title: "1000+ Ai Story Reels Bundle", subtitle: "Bonus 1", price: "₹1999/-" },
  { title: "600+ Ghibli Art Reels Bundle", subtitle: "Bonus 2", price: "₹1999/-" },
  { title: "2500+ Luxury Clips Bundle", subtitle: "Bonus 3", price: "₹1999/-" },
  { title: "600+ Ai Animal Reels Bundle", subtitle: "Bonus 4", price: "₹1999/-" },
  { title: "600+ Ai Horror Reels Bundle", subtitle: "Bonus 5", price: "₹1999/-" },
  { title: "600+ Ai Monkey Vlogs Reels", subtitle: "Bonus 6", price: "₹1999/-" },
];

const faqItems: FAQItem[] = [
  {
    question: "When Will I Receive My Product?",
    answer: "You will receive instant access immediately after payment confirmation. The download and bonus links are delivered right away.",
  },
  {
    question: "What If I Don't Receive My Product?",
    answer: "If delivery fails, contact support through the same checkout channel and we’ll resend your access details promptly.",
  },
  {
    question: "Will I Get Access To The Product?",
    answer: "Yes. You get lifetime access to the bundle and all included bonuses after a one-time payment.",
  },
  {
    question: "Do I need any edits to upload?",
    answer: "No extra edits are required. The reels are ready-made for upload so you can publish them immediately.",
  },
  {
    question: "In Which Format Will I Receive The Product?",
    answer: "The bundle is delivered as downloadable video files that are ready for use across your theme page.",
  },
  {
    question: "What are the Payment methods do you support?",
    answer: "The checkout is handled by the linked payment page, which supports the methods enabled there at purchase time.",
  },
];

function CountdownTimer() {
  const [secondsLeft, setSecondsLeft] = useState(6 * 60 * 60 + 59 * 60 + 59);

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
    <div className="flex items-center justify-center gap-8 text-center">
      <div>
        <div className="text-3xl font-bold text-[#ceff1f]">{formatted.hours}</div>
        <div className="text-sm text-[#a6a6a6] mt-1">Hours</div>
      </div>
      <div className="text-2xl font-bold text-[#a6a6a6]">:</div>
      <div>
        <div className="text-3xl font-bold text-[#ceff1f]">{formatted.minutes}</div>
        <div className="text-sm text-[#a6a6a6] mt-1">Minutes</div>
      </div>
      <div className="text-2xl font-bold text-[#a6a6a6]">:</div>
      <div>
        <div className="text-3xl font-bold text-[#ceff1f]">{formatted.seconds}</div>
        <div className="text-sm text-[#a6a6a6] mt-1">Seconds</div>
      </div>
    </div>
  );
}

function BuyButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={buyUrl}
      className={`brand-button group inline-flex items-center justify-center gap-3 px-7 py-3 text-center font-black uppercase tracking-[0.12em] ${compact ? "px-5 py-2.5 text-[0.72rem]" : "text-[0.85rem]"}`}
    >
      <span>{compact ? "BUY NOW" : "BUY NOW ₹1499 ₹99"}</span>
      <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="text-center text-[1.35rem] font-black leading-tight tracking-tight sm:text-[1.6rem]">{children}</h2>;
}

function CardShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`brand-panel rounded-[24px] ${className}`}>{children}</div>;
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const open = openIndex === index;

        return (
          <div key={item.question} className="bg-[#1a1a1a] rounded-lg border border-[#292929] overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-white hover:bg-[#292929] transition"
            >
              <span>{item.question}</span>
              {open ? (
                <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#ceff1f]" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#a6a6a6]" />
              )}
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-6 pb-4 text-[#a6a6a6] leading-relaxed">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function DigitalAuraLandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#ceff1f]/20 to-transparent border-b border-[#ceff1f]/30 text-white py-3 px-4 text-center text-sm font-semibold">
        🎉 LAUNCH OFFER — 98% OFF this Week! · Only ₹99 · Price jumps to ₹1499 after countdown
      </div>

      {/* Countdown */}
      <div className="bg-[#1a1a1a] border-b border-[#292929] py-3 px-4 text-center">
        <div className="text-sm text-[#a6a6a6] mb-2">Offer ends in</div>
        <CountdownTimer />
      </div>

      {/* Header/Navigation */}
      <header className="border-b border-[#292929] bg-[#0a0a0a] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#ceff1f]">Ultimate Luxury Bundle</div>
          <button className="bg-[#ceff1f] text-[#0a0a0a] px-6 py-2 rounded-lg font-semibold hover:bg-[#e6ff4d] transition">
            Enroll Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#ceff1f]/10 text-[#ceff1f] border border-[#ceff1f]/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            India&apos;s #1 Luxury Content Bundle
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            1000+ Aesthetic Luxury Lifestyle Reels<br />Create Viral Content. Earn Money.
          </h1>
          <p className="text-xl text-[#a6a6a6] mb-8 max-w-3xl mx-auto">
            No PC. No paid software. No subscriptions. Just your phone and 1000+ ready-to-post reels — instant access, lifetime use.
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl font-bold text-white">₹99</span>
            <span className="text-lg text-[#a6a6a6] line-through">₹1499</span>
            <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-3 py-1 rounded font-bold">98% OFF</span>
          </div>

          {/* CTA Button */}
          <a
            href={buyUrl}
            className="inline-block bg-[#ceff1f] text-[#0a0a0a] px-8 py-4 rounded-lg font-extrabold text-lg hover:bg-[#e6ff4d] transition mb-4 shadow-[0_0_20px_rgba(206,255,31,0.3)]"
          >
            🛒 Buy Now ₹99 (₹1499)
          </a>

          <p className="text-sm text-[#a6a6a6]">
            ✓ 7-day refund · ✓ Lifetime Access · ✓ Instant Download
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 py-12 border-t border-b border-[#292929]">
          {[
            { label: "Videos", value: "1000+" },
            { label: "Formats", value: "MP4 HD" },
            { label: "No Setup", value: "Ready Use" },
            { label: "Phone Only", value: "Mobile" },
            { label: "Lifetime", value: "Forever" },
            { label: "Support", value: "24/7" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-bold text-lg text-[#ceff1f]">{stat.value}</div>
              <div className="text-sm text-[#a6a6a6]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Videos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Sample Videos 👀</h2>
        <p className="text-center text-[#a6a6a6] mb-12">See how aesthetic luxury lifestyle reels can grow your account</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            "https://digitalaura.shop/wp-content/uploads/2025/08/Luxury-Lifestyle1.mp4",
            "https://digitalaura.shop/wp-content/uploads/2025/08/Luxury-Lifestyle2.mp4",
            "https://digitalaura.shop/wp-content/uploads/2025/08/Luxury-Lifestyle3.mp4",
            "https://digitalaura.shop/wp-content/uploads/2025/08/Luxury-Lifestyle4.mp4",
          ].map((src, index) => (
            <div key={src} className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#292929] shadow-sm hover:shadow-md transition">
              <video controls className="w-full aspect-[9/16] bg-black object-cover" poster="https://digitalaura.shop/wp-content/uploads/2025/08/Untitled-design-22.png">
                <source src={src} type="video/mp4" />
              </video>
              <div className="px-3 py-2 text-sm font-semibold text-[#a6a6a6]">Sample video {index + 1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="bg-[#0a0a0a] py-16 border-t border-[#292929]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What You Will Achieve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] rounded-lg p-8 border border-red-500/20">
              <h3 className="text-2xl font-bold text-red-500 mb-6 text-center">❌ BEFORE</h3>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#a6a6a6]">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold text-green-500 mb-6 text-center">✅ AFTER</h3>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#a6a6a6]">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="bg-[#0a0a0a] py-16 border-t border-[#292929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">6 Amazing Bonuses Worth ₹10,000</h2>
          <p className="text-center text-[#a6a6a6] mb-12">Absolutely FREE when you enroll now!</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonusItems.map((item, index) => (
              <div key={item.title} className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#292929] shadow-sm hover:shadow-md transition p-6">
                <div className="inline-block bg-[#ceff1f]/10 text-[#ceff1f] border border-[#ceff1f]/20 px-3 py-1 rounded text-sm font-bold mb-3">
                  Bonus {index + 1}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm font-bold text-[#a6a6a6]">Was {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        <FAQAccordion />
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white py-16 border-t border-[#292929]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Create Viral Luxury Content?</h2>
          <p className="text-xl mb-8 text-[#a6a6a6]">
            Get 1000+ reels + 6 bonuses for just ₹99. Limited offer — grab yours now!
          </p>
          <a
            href={buyUrl}
            className="inline-block bg-[#ceff1f] text-[#0a0a0a] px-10 py-4 rounded-lg font-extrabold text-lg hover:bg-[#e6ff4d] transition shadow-[0_0_20px_rgba(206,255,31,0.3)]"
          >
            Enroll Now ₹99
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-[#a6a6a6] py-12 border-t border-[#292929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-semibold mb-2">© 2026 Digital Aura · Luxury Bundle</p>
          <div className="space-x-6 text-sm">
            <a href="https://www.termsfeed.com/live/aac4ac86-5bee-444e-ba48-a9fd2452726d" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="https://www.termsfeed.com/live/34eb8140-1e5a-42d4-98f0-8f1457126922" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
          <p className="text-xs mt-6 max-w-3xl mx-auto text-[#666666]">
            This site is not a part of Facebook Inc. This site is NOT endorsed by Facebook in any way. We make no guarantees about your ability to get results or earn money. See our terms for details.
          </p>
        </div>
      </footer>
    </main>
  );
}
