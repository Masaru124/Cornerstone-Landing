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
    <ul className="flex items-center justify-center gap-3 text-sm font-black tracking-[0.18em] text-white/90 sm:gap-5 sm:text-base">
      <li>{formatted.hours} : Hr</li>
      <li>{formatted.minutes} : Min</li>
      <li>{formatted.seconds}Sec</li>
    </ul>
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

export function DigitalAuraLandingPage() {
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
              1000+ Luxury Lifestyle Reels Bundle Now!!🎬
            </h1>
          </div>

          <div className="brand-panel px-4 py-2.5 text-center text-[1rem] font-black tracking-[0.02em] sm:text-[1.15rem]">
            * Lifetime Access - One-time payment - Instant Access - 100% Risk Free *
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="brand-panel overflow-hidden rounded-[22px]">
              <img src="https://digitalaura.shop/wp-content/uploads/2025/08/Untitled-design-22.png" alt="1000+ Luxury Lifestyle Reels Bundle" className="h-full w-full object-cover" />
            </div>
            <div className="brand-panel p-4 sm:p-6">
              <h3 className="text-center text-[1.55rem] font-black leading-tight text-black sm:text-[1.95rem]">NOW AVAILABLE FOR INSTANT DOWNLOAD!</h3>
              <div className="my-4 rounded-full border border-[#ceff1f]/35 bg-[#0a0a0a] px-4 py-2.5 text-center text-[0.98rem] font-black leading-tight text-[#ceff1f] sm:text-[1.08rem]">
                This is a launch offer and it will expire in the next 24 Hours
              </div>
              <ul className="space-y-4 text-[1.02rem] font-bold leading-7 text-white sm:text-[1.06rem]">
                {featureItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#ceff1f]" />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3 text-center">
            <div className="text-[1.25rem] font-black leading-tight text-white sm:text-[1.6rem]">ONLY <span className="rounded px-1.5 text-[#ffeb59]">99/-</span> TODAY Delivered Instantly. Start Using Right Now!</div>
            <div className="text-[1.1rem] font-black text-white">&quot;FOR FIRST 100 PEOPLE ONLY&quot;</div>
          </div>
        </section>

        <section className="brand-panel brand-section space-y-8 px-4 py-8 sm:px-6 lg:px-7">
          <SectionLabel>This For You If You are...</SectionLabel>

          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h3 className="text-[1.4rem] font-black leading-tight sm:text-[1.75rem]">Click On This Button To BUY &amp; Get Rs.10,000 Bonuses FREE ! 👇</h3>
              <div className="flex justify-center"><BuyButton /></div>
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-[1.5rem] font-black sm:text-[1.8rem]">SAMPLE VIDEOS 👀</h3>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[
                  "https://digitalaura.shop/wp-content/uploads/2025/08/Luxury-Lifestyle1.mp4",
                  "https://digitalaura.shop/wp-content/uploads/2025/08/Luxury-Lifestyle2.mp4",
                  "https://digitalaura.shop/wp-content/uploads/2025/08/Luxury-Lifestyle3.mp4",
                  "https://digitalaura.shop/wp-content/uploads/2025/08/Luxury-Lifestyle4.mp4",
                ].map((src, index) => (
                  <div key={src} className="brand-panel overflow-hidden rounded-[24px]">
                    <video controls className="aspect-[9/16] w-full bg-black object-cover" poster="https://digitalaura.shop/wp-content/uploads/2025/08/Untitled-design-22.png">
                      <source src={src} type="video/mp4" />
                    </video>
                    <div className="border-t border-white/10 bg-black px-4 py-3 text-left text-sm font-bold text-[#a6a6a6]">Sample video {index + 1}</div>
                  </div>
                ))}
              </div>
              <h3 className="text-[1.55rem] font-black leading-tight sm:text-[2rem]">CHECK HOW LUXURY LIFESTYLE REELS CAN GROW YOUR THEME PAGE QUICKLY</h3>
              <h3 className="text-[1.45rem] font-black leading-tight sm:text-[1.95rem]">Ultimate 1000+ Viral Luxury Lifestyle Reels Bundle Will Help You To Generate More Followers, Views, Engagement</h3>
              <h3 className="text-[1.4rem] font-black leading-tight sm:text-[1.75rem]">Click On This Button To BUY &amp; Get Rs.10,000 Bonuses FREE ! 👇</h3>
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-[1.2rem] font-black">&quot;FOR FIRST 100 PEOPLE ONLY&quot;</h3>
              <h3 className="text-[1.65rem] font-black sm:text-[1.95rem]">Where can I Upload these Luxury Lifestyle Reels</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {socialPlatforms.map((platform) => (
                  <div key={platform} className="brand-chip flex items-center justify-between rounded-[9999px] px-4 py-3 text-[0.98rem] font-bold">
                    <span>{platform}</span>
                    <span className="text-[#ceff1f]">◉</span>
                  </div>
                ))}
              </div>
              <h3 className="text-[1.55rem] font-black leading-tight sm:text-[1.9rem]">How Can I Make Money By Posting These Reels?</h3>
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
              <h3 className="text-[1.4rem] font-black leading-tight sm:text-[1.75rem]">Click On This Button To BUY &amp; Get Rs.10,000 Bonuses FREE ! 👇</h3>
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
              <div className="flex justify-center pt-1"><BuyButton /></div>
            </div>

            <div className="brand-panel space-y-5 px-4 py-6 text-center sm:px-6">
              <h3 className="text-[1.45rem] font-black leading-tight sm:text-[1.9rem]">Register in next 5 Minutes To Unlock the bonuses worth Rs 10,000/- For Free</h3>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {bonusItems.map((item) => (
                  <div key={item.title} className="brand-panel p-5 text-left">
                    <div className="mb-3 inline-flex rounded-full border border-[#ceff1f]/20 bg-[#0a0a0a] px-3 py-1 text-[0.82rem] font-black uppercase tracking-[0.12em] text-[#ceff1f]">{item.subtitle}</div>
                    <h4 className="text-[1.2rem] font-black leading-tight">{item.title}</h4>
                    <div className="mt-3 text-[1.05rem] font-black text-[#ceff1f]">{item.price}</div>
                  </div>
                ))}
              </div>
              <h3 className="text-[1.45rem] font-black sm:text-[1.8rem]">Time Is Running Out. BUY IT NOW!</h3>
              <CountdownTimer />
              <h3 className="text-[1.4rem] font-black leading-tight sm:text-[1.75rem]">Click On This Button To BUY &amp; Get Rs.10,000 Bonuses FREE ! 👇</h3>
              <div className="flex justify-center"><BuyButton /></div>
              <h3 className="text-[1.15rem] font-black">&quot;FOR FIRST 100 PEOPLE ONLY&quot;</h3>

              <CardShell className="p-5 text-left sm:p-7">
                <h3 className="text-center text-[1.45rem] font-black">YOUR ORDER TODAY</h3>
                <div className="mt-5 space-y-4">
                  <div className="rounded-[18px] border border-[#292929] bg-[#0a0a0a] p-4 text-center">
                    <h4 className="text-[1.15rem] font-black">Ultimate 1000+ Viral Luxury Reels Bundle</h4>
                    <div className="mt-2 text-[1.15rem] font-black text-[#ceff1f]">₹1499/- ₹99/-</div>
                  </div>
                  {bonusItems.map((item, index) => (
                    <div key={item.title} className="rounded-[18px] border border-dashed border-[#292929] bg-[#0a0a0a] p-4 text-center">
                      <h4 className="text-[1.03rem] font-black leading-tight">
                        BONUS #{index + 1}: You Will Get {item.title}
                        {index === 0
                          ? " Which Skyrocket Your Social Media Growth. 🚀"
                          : index === 1
                            ? " Which You Can Upload On Your Page To Grow."
                            : index === 2
                              ? ""
                              : index === 3
                                ? " (📍 Reach Millions Of Audience Without Spending Money)"
                                : index === 4
                                  ? " (🔍 Grow Your Followers Daily )"
                                  : " (Which Used To Make More High Quality Content For Your Theme Page)"}
                      </h4>
                      <div className="mt-2 text-[1rem] font-black text-[#ceff1f]">₹1999/-</div>
                    </div>
                  ))}
                  <div className="rounded-[18px] border border-[#292929] bg-[#000] px-4 py-4 text-center text-[1.1rem] font-black text-white">
                    You pay only <span className="text-[#ceff1f]">₹12995/-</span> ₹99/-
                  </div>
                  <p className="text-center text-[1.02rem] font-bold leading-7 text-[#a6a6a6]">Don’t miss out on this incredible offer. Grab the Ultimate Viral Luxury Lifestyle Reels Bundle you need, plus massive bonuses – all for just Rs. 99!</p>
                  <div className="flex justify-center"><BuyButton compact /></div>
                  <p className="text-center text-[0.98rem] font-bold leading-7 text-[#a6a6a6]">✅ Secure Payment Processing. ✅ Instant Delivery, Lifetime Access. ✅ One Time Payment Only</p>
                </div>
              </CardShell>

              <h3 className="text-[1.45rem] font-black leading-tight sm:text-[1.8rem]">What Our Customers Say About Us!</h3>

              <div className="brand-panel p-4 text-left sm:p-6">
                <h3 className="mb-4 text-center text-[1.45rem] font-black sm:text-[1.8rem]">Frequently Asked Questions (FAQs)</h3>
                <FAQAccordion />
              </div>

              <h3 className="text-[1.2rem] font-black">&quot;FOR FIRST 100 PEOPLE ONLY&quot;</h3>
              <h3 className="text-[1.3rem] font-black sm:text-[1.55rem]">Take Action Now, Don&apos;t Regret Again. BUY IT NOW! ⭐⭐⭐ ⭐⭐</h3>
              <div className="flex justify-center"><BuyButton /></div>
            </div>
          </div>
        </section>

        <footer className="brand-panel brand-panel-strong px-4 py-6 text-center text-[0.95rem] leading-7 sm:px-6">
          <p className="text-[1.05rem] font-black text-white">Copyright © 2025 Digital Aura</p>
          <p className="mt-3 space-x-2">
            <a className="brand-link font-bold hover:text-[#ceff1f]" href="https://www.termsfeed.com/live/aac4ac86-5bee-444e-ba48-a9fd2452726d">Privacy Policy</a>
            <span>|</span>
            <a className="brand-link font-bold hover:text-[#ceff1f]" href="https://www.termsfeed.com/live/e7a5beeb-bb1d-479f-baa2-b18146104907">Disclaimer</a>
            <span>|</span>
            <a className="brand-link font-bold hover:text-[#ceff1f]" href="https://www.termsfeed.com/live/56e9df0e-0b20-4fe1-94e5-891cf2e5fc9d">Terms and Conditions</a>
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