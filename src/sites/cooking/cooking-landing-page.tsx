"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { BonusItem, ComparisonItem, FAQItem, FeatureItem } from "../digital-aura/types";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  CloseIcon,
  WhatsAppIcon,
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
  { icon: "✅", title: "300+ ready-to-post Aesthetic videos (MP4 format)" },
  { icon: "✅", title: "Healthy recipes and cooking inspiration" },
  { icon: "✅", title: "Smart food hacks and quick meals" },
  { icon: "✅", title: "Nutrition and wellness facts" },
  { icon: "✅", title: "Lifestyle and diet motivation" },
  { icon: "✅", title: "Faceless, clean, and adaptable content for any page" },
  { icon: "✅", title: "Instant Download Link + Lifetime Access" },
  { icon: "✅", title: "Crystal Clear HD Quality" },
  { icon: "✅", title: "Huge Time Saver Perfect for Busy Creators & Students" },
  { icon: "✅", title: "Immediate Delivery – No Waiting, No Delays" },
  { icon: "✅", title: "Free Quality Bonuses Of Worth ₹20,000/-" },
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
  "Get Our Cooking Reels Bundle Today!",
  "Download & Start Uploading These Reels",
  "Grow Your Theme Page And Start Earning",
];

const beforeItems: ComparisonItem[] = [
  { text: "Roz “viral food reels” ya “cooking content ideas” search karna" },
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
      "Learn how to turn your Instagram page into a powerful growth machine. This course covers proven strategies for gaining followers quickly, boosting reel engagement, and accessing Instagram’s monetization features. Ideal for anyone looking to build a strong theme page.",
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
    <ul className="flex items-center justify-center gap-3 text-sm font-black tracking-[0.18em] text-white/90 sm:gap-5 sm:text-base">
      <li>{formatted.hours} : Hours</li>
      <li>{formatted.minutes} : Minutes</li>
      <li>{formatted.seconds}Seconds</li>
    </ul>
  );
}

function BuyButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={buyUrl}
      className={`brand-button group inline-flex items-center justify-center gap-3 px-7 py-3 text-center font-black uppercase tracking-[0.12em] ${compact ? "px-5 py-2.5 text-[0.72rem]" : "text-[0.85rem]"}`}
    >
      <span>{compact ? "BUY NOW" : "BUY NOW ₹69 ₹699"}</span>
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
          <div key={item.question} className="brand-panel overflow-hidden rounded-[24px]">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[1.02rem] font-bold transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ceff1f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
            >
              <span>{item.question}</span>
              {open ? <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#0e6b78]" /> : <ChevronDownIcon className="h-5 w-5 shrink-0 text-[#0e6b78]" />}
            </button>
            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden px-5 pb-5 text-[0.98rem] leading-7 text-[#a6a6a6]">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function CookingLandingPage() {
  return (
    <main className="brand-page relative min-h-screen overflow-x-hidden">
      <div className="brand-announcement sticky top-0 z-40 px-4 py-3 text-center text-[0.98rem] font-bold tracking-tight sm:text-[1.15rem]">
        <span className="mr-2 inline-block align-[-2px] text-lg">🎉</span>
        Launch offer <span className="text-red-500">Expiring</span> in 24 Hours. Get Instant Access Now, <span className="text-red-500">Hurry Up!</span>
      </div>

      <div className="brand-shell mx-auto flex w-full flex-col gap-7">
        <section className="brand-hero brand-section space-y-6 px-4 py-8 sm:px-6 sm:py-10 lg:px-7">
          <div className="text-center">
            <h2 className="text-[1.5rem] font-black leading-tight text-white sm:text-[2.1rem]">
              <ClockIcon className="mr-2 inline-block h-8 w-8 align-[-6px] text-[#c3c9d5]" />
              First Time On Internet &quot;Biggest Sale Ever&quot;
            </h2>
          </div>

          <div className="brand-panel border-2 border-dotted border-white/75 px-4 py-5 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] sm:px-6 sm:py-7">
            <h1 className="text-[2.1rem] font-black leading-none tracking-tight text-white sm:text-[3.2rem] lg:text-[3.9rem]">
              Get The Ultimate
              <br />
              300+ Cooking &amp; Nutrition Reels Bundle Now!!🎬
            </h1>
          </div>

          <div className="brand-panel px-4 py-2.5 text-center text-[1rem] font-black tracking-[0.02em] sm:text-[1.15rem]">
            * Lifetime Access - One-time payment - Instant Access - 100% Risk Free *
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="brand-panel overflow-hidden rounded-[22px] p-2" style={{ border: '4px solid #ff9a2a' }}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-black">
                <video controls className="h-full w-full object-cover" poster={heroImage}>
                  <source src={sampleVideoSources[0]} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="bg-white text-black rounded-[22px] p-6 shadow-lg">
              <h3 className="text-center text-[1.45rem] font-extrabold leading-tight sm:text-[1.65rem]">NOW AVAILABLE FOR INSTANT DOWNLOAD!</h3>
              <div className="my-4 rounded px-2 py-3 text-center text-[0.98rem] font-black leading-tight text-white bg-red-600">
                This is a launch offer and it will expire in the next 24 Hours
              </div>
              <ul className="space-y-3 text-[1.02rem] font-bold leading-7 text-black sm:text-[1.06rem]">
                {featureItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ceff1f] text-black">✓</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3 text-center">
            <div className="text-[1.25rem] font-black leading-tight text-white sm:text-[1.6rem]">
              ONLY <span className="rounded px-1.5 text-[#ffeb59]">₹69/-</span> TODAY Delivered Instantly. Start Using Right Now!
            </div>
            <div className="text-[1.1rem] font-black text-white">&quot;FOR FIRST 100 PEOPLE ONLY&quot;</div>
          </div>
        </section>

        <section className="brand-panel brand-section space-y-8 px-4 py-8 sm:px-6 lg:px-7">
          <SectionLabel>This Is For You If You Are</SectionLabel>

          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h3 className="text-[1.4rem] font-black leading-tight sm:text-[1.75rem]">Click On This Button To BUY &amp; Get Rs.20,000 Bonuses FREE ! 👇</h3>
              <div className="flex justify-center">
                <BuyButton />
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-[1.65rem] font-black sm:text-[1.95rem]">This Is For You If You Are</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {audienceItems.map((item) => (
                  <div key={item.label} className="brand-panel overflow-hidden p-4 text-center">
                    <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-[20px] border border-white/10 bg-[#0a0a0a]">
                      <Image src={item.src} alt={item.label} fill sizes="180px" className="object-cover" />
                    </div>
                    <h4 className="mt-3 text-[1.05rem] font-black">{item.label}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-[1.5rem] font-black sm:text-[1.8rem]">SAMPLE VIDEOS 👀</h3>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {sampleVideoSources.map((src, index) => (
                  <div key={src} className="brand-panel overflow-hidden rounded-[24px]">
                    <video controls className="aspect-[9/16] w-full bg-black object-cover" poster={heroImage}>
                      <source src={src} type="video/mp4" />
                    </video>
                    <div className="border-t border-white/10 bg-black px-4 py-3 text-left text-sm font-bold text-[#a6a6a6]">Sample video {index + 1}</div>
                  </div>
                ))}
              </div>
              <h3 className="text-[1.55rem] font-black leading-tight sm:text-[2rem]">CHECK HOW AESTHETIC COOKING REELS CAN GROW YOUR ACCOUNT QUICKLY</h3>
              <h3 className="text-[1.45rem] font-black leading-tight sm:text-[1.95rem]">Ultimate 300+ Cooking &amp; Nutrition Videos Bundle Will Help You To Generate More Followers, Views, Engagement</h3>
              <h3 className="text-[1.4rem] font-black leading-tight sm:text-[1.75rem]">Click On This Button To BUY &amp; Get Rs.20,000 Bonuses FREE ! 👇</h3>
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-[1.2rem] font-black">&quot;FOR FIRST 100 PEOPLE ONLY&quot;</h3>
              <h3 className="text-[1.65rem] font-black sm:text-[1.95rem]">Where can I Uploadthese Reels</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {socialPlatforms.map((platform) => (
                  <div key={platform} className="brand-chip flex items-center justify-between rounded-[9999px] px-4 py-3 text-[0.98rem] font-bold">
                    <span>{platform}</span>
                    <span className="text-[#ceff1f]">◉</span>
                  </div>
                ))}
              </div>
              <h3 className="text-[1.55rem] font-black leading-tight sm:text-[1.9rem]">How Can I Make Money ByPosting These Reels?</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {moneyIdeas.map((item) => (
                  <div key={item} className="brand-panel flex items-center gap-3 px-4 py-4 text-left font-bold">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-xl text-[#ceff1f]">✅</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-[1.4rem] font-black leading-tight sm:text-[1.8rem]">Ready To Start Your Own Theme Page, So Follow The Steps Below:</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {stepItems.map((item, index) => (
                  <div key={item} className="brand-panel p-5 text-left">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0a0a0a] text-xl font-black text-[#ceff1f]">0{index + 1}</div>
                    <div className="flex gap-3 text-[1.01rem] font-bold leading-7 text-white">
                      <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#ceff1f]" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              <CountdownTimer />
              <h3 className="text-[1.4rem] font-black leading-tight sm:text-[1.75rem]">Click On This Button To BUY &amp; Get Rs.20,000 Bonuses FREE ! 👇</h3>
              <h3 className="text-[1.2rem] font-black">&quot;FOR FIRST 100 PEOPLE ONLY&quot;</h3>
            </div>

            <div className="space-y-5 text-center">
              <h3 className="text-[1.55rem] font-black sm:text-[2rem]">What You will achieve By This Bundle?</h3>
              <div className="grid gap-5 lg:grid-cols-2">
                <CardShell className="brand-panel-strong p-5 text-left sm:p-6">
                  <h4 className="mb-4 text-center text-[1.2rem] font-black text-[#ff5b5b]">BEFORE THIS</h4>
                  <div className="space-y-3.5 text-[1.02rem] font-bold leading-7 text-[#fafafa]">
                    {beforeItems.map((item) => (
                      <div key={item.text} className="flex gap-3">
                        <CloseIcon className="mt-1 h-5 w-5 shrink-0 text-[#ff5b5b]" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardShell>

                <CardShell className="brand-panel p-5 text-left sm:p-6">
                  <h4 className="mb-4 text-center text-[1.2rem] font-black text-[#ceff1f]">AFTER THIS</h4>
                  <div className="space-y-3.5 text-[1.02rem] font-bold leading-7 text-[#fafafa]">
                    {afterItems.map((item) => (
                      <div key={item.text} className="flex gap-3">
                        <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#ceff1f]" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardShell>
              </div>
              <div className="flex justify-center pt-1">
                <BuyButton />
              </div>
            </div>

            <div className="brand-panel space-y-5 px-4 py-6 text-center sm:px-6">
              <h3 className="text-[1.45rem] font-black leading-tight sm:text-[1.9rem]">BUT WAIT!!!</h3>
              <h3 className="text-[1.45rem] font-black leading-tight sm:text-[1.9rem]">That’s Not Everything…</h3>
              <h3 className="text-[1.45rem] font-black leading-tight sm:text-[1.9rem]">You Can Unlock These 4 Amazing Bonuses Worth ₹20,000 For Absolutely FREE</h3>
              <h3 className="text-[1.2rem] font-black">Only If You Buy Bundle Right Now!!!</h3>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {bonusItems.map((item) => (
                  <div key={item.title} className="brand-panel overflow-hidden p-0 text-left">
                    <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10 bg-[#0a0a0a]">
                      <Image src={item.src} alt={item.title} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="mb-3 inline-flex rounded-full border border-[#ceff1f]/20 bg-[#0a0a0a] px-3 py-1 text-[0.82rem] font-black uppercase tracking-[0.12em] text-[#ceff1f]">
                        {item.subtitle}
                      </div>
                      <h4 className="text-[1.2rem] font-black leading-tight">{item.title}</h4>
                      <p className="mt-3 text-[0.98rem] leading-7 text-[#a6a6a6]">{item.details}</p>
                      <div className="mt-3 text-[1.05rem] font-black text-[#ceff1f]">Priced: {item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-[1.45rem] font-black sm:text-[1.8rem]">Get All This Inside The Bundle</h3>
              <h3 className="text-[1.45rem] font-black sm:text-[1.8rem]">Total Value Of Bonuses: ₹20,000/</h3>
              <h3 className="text-[1.45rem] font-black sm:text-[1.8rem]">Buy Today For Just Rs. 69/-</h3>
              <h3 className="text-[1.45rem] font-black sm:text-[1.8rem]">Time is running out. Reserve your place now!</h3>
              <CountdownTimer />
              <h3 className="text-[1.4rem] font-black leading-tight sm:text-[1.75rem]">Click On This Button To BUY &amp; Get Rs.20,000 Bonuses FREE ! 👇</h3>
              <div className="flex justify-center">
                <BuyButton />
              </div>
              <h3 className="text-[1.15rem] font-black">Register before 13, May to unlock bonuses worth ₹ 20,000</h3>
              <div className="flex justify-center gap-2 text-[#ffce3a]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-white">Rated 5 out of 5</span>
              </div>
              <h3 className="text-[1.05rem] font-black text-white">RATED 4.8 OUT OF 5</h3>

              <CardShell className="p-5 text-left sm:p-7">
                <h3 className="text-center text-[1.45rem] font-black">YOUR ORDER TODAY</h3>
                <div className="mt-5 space-y-4">
                  <div className="rounded-[18px] border border-[#292929] bg-[#0a0a0a] p-4 text-center">
                    <h4 className="text-[1.15rem] font-black">Ultimate 300+ Cooking &amp; Nutrition Reels Bundle</h4>
                    <div className="mt-2 text-[1.15rem] font-black text-[#ceff1f]">₹699/- ₹69/-</div>
                  </div>
                  {bonusItems.map((item, index) => (
                    <div key={item.title} className="rounded-[18px] border border-dashed border-[#292929] bg-[#0a0a0a] p-4 text-center">
                      <h4 className="text-[1.03rem] font-black leading-tight">BONUS #{index + 1}: {item.title}</h4>
                      <div className="mt-2 text-[1rem] font-black text-[#ceff1f]">₹5000/-</div>
                    </div>
                  ))}
                  <div className="rounded-[18px] border border-[#292929] bg-[#000] px-4 py-4 text-center text-[1.1rem] font-black text-white">
                    You pay only <span className="text-[#ceff1f]">₹20699/-</span> ₹69/-
                  </div>
                  <p className="text-center text-[1.02rem] font-bold leading-7 text-[#a6a6a6]">Don’t miss out on this incredible offer. Grab the Ultimate Cooking &amp; Nutrition Bundle you need, plus massive bonuses, all for just Rs. 69!</p>
                  <div className="flex justify-center">
                    <BuyButton compact />
                  </div>
                  <p className="text-center text-[0.98rem] font-bold leading-7 text-[#a6a6a6]">✅ Secure Payment Processing. ✅ Instant Delivery, Lifetime Access. ✅ One Time Payment Only</p>
                  <h3 className="text-center text-[1.15rem] font-black">Offer ends Today</h3>
                  <div className="flex justify-center">
                    <a className="brand-button group inline-flex items-center justify-center gap-3 px-6 py-3 text-center font-black uppercase tracking-[0.12em] text-[0.82rem]" href={buyUrl}>
                      <span>Download Now</span>
                      <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </CardShell>

              <h3 className="text-[1.45rem] font-black leading-tight sm:text-[1.8rem]">What Our Customers Say About Us!</h3>

              <div className="brand-panel p-4 text-left sm:p-6">
                <h3 className="mb-4 text-center text-[1.45rem] font-black sm:text-[1.8rem]">Frequently Asked Questions (FAQs)</h3>
                <FAQAccordion />
              </div>

              <h3 className="text-[1.2rem] font-black">&quot;FOR FIRST 100 PEOPLE ONLY&quot;</h3>
              <h3 className="text-[1.3rem] font-black sm:text-[1.55rem]">Take Action Now, Don&apos;t Regret Again. BUY IT NOW! ⭐⭐⭐ ⭐⭐</h3>
              <div className="flex justify-center">
                <BuyButton />
              </div>
            </div>
          </div>
        </section>

        <footer className="brand-panel brand-panel-strong px-4 py-6 text-center text-[0.95rem] leading-7 sm:px-6">
          <p className="text-[1.05rem] font-black text-white">Copyright © 2026 Digital aura</p>
          <p className="mt-3 space-x-2">
            <a className="brand-link font-bold hover:text-[#ceff1f]" href="https://www.termsfeed.com/live/aac4ac86-5bee-444e-ba48-a9fd2452726d">
              Privacy Policy
            </a>
            <span>|</span>
            <a className="brand-link font-bold hover:text-[#ceff1f]" href="https://www.termsfeed.com/live/e7a5beeb-bb1d-479f-baa2-b18146104907">
              Disclaimer
            </a>
            <span>|</span>
            <a className="brand-link font-bold hover:text-[#ceff1f]" href="https://www.termsfeed.com/live/56e9df0e-0b20-4fe1-94e5-891cf2e5fc9d">
              Terms and Conditions
            </a>
          </p>
          <p className="mt-3 text-left text-[0.9rem] leading-7 text-[#a6a6a6] sm:text-center">
            This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with our ideas, information, tools or strategies. We just want to help you by giving great content, direction and strategies that worked well for us and our students and that we believe can move you forward. All of our terms, privacy policies and disclaimers for this program and website can be accessed via the link above. We feel transparency is important and we hold ourselves (and you) to a high standard of integrity. Thanks for stopping by. We hope this training and content brings you a lot of value.
          </p>
        </footer>
      </div>

      <div className="fixed bottom-5 right-5 z-50">
        <button type="button" className="brand-chat group relative flex h-16 w-16 items-center justify-center rounded-full shadow-[0_18px_44px_rgba(206,255,31,0.2)] transition-transform duration-300 hover:scale-105" aria-label="Open chat">
          <WhatsAppIcon className="h-8 w-8 text-[#ceff1f]" />
        </button>
        <div className="brand-chat absolute -top-28 right-0 hidden w-72 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.22)] group-hover:block">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[0.95rem] font-bold">Hello 👋</p>
              <p className="mt-1 text-[1.15rem] font-black">Can we help you?</p>
            </div>
            <CloseIcon className="h-5 w-5 shrink-0 text-[#ceff1f]" />
          </div>
          <div className="mt-4 rounded-[18px] border border-[#292929] bg-[#0a0a0a] px-3 py-3 text-[0.9rem] font-bold text-[#a6a6a6]">Powered by Joinchat</div>
        </div>
      </div>
    </main>
  );
}