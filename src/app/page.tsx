"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bolt,
  CloudLightning,
  Globe,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const services = [
  { title: "Performance Marketing", description: "ROI-first campaigns that drive leads, sales, and revenue growth.", icon: Bolt },
  { title: "Google Ads", description: "Search, Shopping, and Display campaigns built for maximum conversions.", icon: Globe },
  { title: "Meta Ads", description: "High-impact ads across Facebook and Instagram for scalable performance.", icon: Users },
  { title: "SEO", description: "Technical, content, and local SEO to improve rankings and organic traffic.", icon: BarChart3 },
  { title: "Social Media Marketing", description: "Community-driven social growth with data-led content and ads.", icon: Sparkles },
  { title: "Email Marketing", description: "Personalized nurture flows that convert cold traffic into loyal buyers.", icon: Mail },
  { title: "WhatsApp Marketing", description: "Direct response campaigns using WhatsApp for immediate lead engagement.", icon: MessageSquare },
];

const industries = [
  "SaaS",
  "Healthcare",
  "Education",
  "Real Estate",
  "Finance",
  "D2C",
  "E-commerce",
  "Manufacturing",
  "Travel",
  "Hospitality",
  "Technology",
  "Startups",
];

const stats = [
  { value: "₹50 Cr+", label: "Revenue Generated" },
  { value: "500+", label: "Successful Campaigns" },
  { value: "250+", label: "Clients" },
  { value: "10M+", label: "Qualified Leads" },
  { value: "95%", label: "Client Retention" },
];

const comparisons = [
  { label: "Vanity Metrics", performatic: "Revenue Focus" },
  { label: "Slow Response", performatic: "Fast Execution" },
  { label: "Generic Strategy", performatic: "AI Powered" },
  { label: "Limited Reporting", performatic: "Weekly Reporting" },
];

const processSteps = ["Discovery", "Research", "Strategy", "Campaign Launch", "Optimization", "Scaling"];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CMO, Verity Health",
    quote: "Performatic transformed our lead flow with a lean, data-first strategy and measurable growth.",
  },
  {
    name: "Rahul Mehta",
    role: "Founder, Atlas SaaS",
    quote: "Their team delivered an 8x ROAS, fast execution, and transparent weekly reporting.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-white">P</div>
            PERFORMATIC
          </div>
          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
            {['About', 'Services', 'Results', 'Case Studies', 'Team', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="transition hover:text-slate-950">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="rounded-full border border-slate-900/15 px-5 py-2 text-sm font-semibold transition hover:border-slate-900 hover:bg-slate-950 hover:text-white">
              Book Free Strategy Call
            </a>
            <button className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition hover:bg-blue-700">
              Get Free Audit
            </button>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.35),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.25),_transparent_30%)]"></div>
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-slate-950/90 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-2xl">
                <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200 backdrop-blur-sm ring-1 ring-white/10">
                  Premium Growth Marketing
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Performance Marketing That Delivers Measurable Growth
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
                  We help ambitious brands scale through Meta Ads, Google Ads, SEO, CRO, AI-powered automation, and data-driven marketing strategies.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700">
                    Book Free Strategy Call
                  </a>
                  <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20">
                    Get Free Audit
                  </a>
                </div>
                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <p className="text-3xl font-semibold text-white">8x</p>
                    <p className="mt-2 text-sm text-slate-300">Average ROAS for enterprise campaigns</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <p className="text-3xl font-semibold text-white">95%</p>
                    <p className="mt-2 text-sm text-slate-300">Client retention on long-term programs</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-6 rounded-[1.75rem] bg-white/5 p-6 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4 text-slate-200">
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Agency Pulse</p>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase text-white/80">Live</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-5xl font-semibold text-white">₹50 Cr+</p>
                      <p className="text-sm text-slate-300">Revenue generated in the last 12 months.</p>
                    </div>
                  </div>
                  <div className="rounded-[1.75rem] bg-gradient-to-br from-blue-500/15 to-cyan-400/10 p-6 backdrop-blur-xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Trusted by</p>
                    <div className="mt-8 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
                      <span className="rounded-2xl bg-white/5 px-4 py-3">Nova Health</span>
                      <span className="rounded-2xl bg-white/5 px-4 py-3">Astra Tech</span>
                      <span className="rounded-2xl bg-white/5 px-4 py-3">Verity Labs</span>
                      <span className="rounded-2xl bg-white/5 px-4 py-3">Ozone Retail</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">About Performatic</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">We build ROI-first marketing systems that outperform expectations.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-600">Founded to help ambitious brands convert digital demand into predictable growth, Performatic blends human creativity with AI-enabled optimization to deliver on high-stakes revenue goals.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">Mission</h3>
                <p className="mt-4 text-slate-600">Accelerate revenue for growth-driven companies through transparent, measurable marketing experiences.</p>
              </div>
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">Vision</h3>
                <p className="mt-4 text-slate-600">Be the trusted performance partner that turns ambitious goals into sustainable business outcomes.</p>
              </div>
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">Why Performatic</h3>
                <p className="mt-4 text-slate-600">We combine campaign intelligence, full-funnel measurement, and high-velocity execution to maximize ROI across channels.</p>
              </div>
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">Core Values</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  <li>Innovation</li>
                  <li>Transparency</li>
                  <li>Accountability</li>
                  <li>Growth Mindset</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-950 px-6 py-24 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Services</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Services designed for predictable growth.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/10 backdrop-blur-xl"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-4 text-slate-300">{service.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:translate-x-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="industries" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Industries We Serve</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Industry expertise across the most competitive verticals.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry} className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-slate-300">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <CloudLightning className="h-6 w-6" />
                </div>
                <p className="font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why" className="bg-slate-950 px-6 py-24 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Why Choose Performatic</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">The performance difference is clear.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <h3 className="mb-8 text-xl font-semibold text-white">Traditional Agency</h3>
                <ul className="space-y-4 text-slate-300">
                  {comparisons.map((item) => (
                    <li key={item.label} className="flex items-center justify-between rounded-3xl bg-slate-900/40 px-4 py-4">
                      <span>{item.label}</span>
                      <span className="text-red-400">❌</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] border border-cyan-300/15 bg-slate-900/70 p-8">
                <h3 className="mb-8 text-xl font-semibold text-white">Performatic</h3>
                <ul className="space-y-4 text-slate-100">
                  {comparisons.map((item) => (
                    <li key={item.performatic} className="flex items-center justify-between rounded-3xl bg-slate-950/60 px-4 py-4">
                      <span>{item.performatic}</span>
                      <span className="text-emerald-400">✅</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Process</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">A lean, data-driven process for high-impact campaigns.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 text-slate-950 shadow-sm">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Step {index + 1}</p>
                <h3 className="text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="results" className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-24 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Results</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Proven business outcomes from high-performance campaigns.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-xl shadow-slate-950/20">
                  <p className="text-4xl font-semibold text-white">{item.value}</p>
                  <p className="mt-4 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="case-studies" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Case Studies</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Enterprise-grade campaigns with measurable results.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Healthtech Scale",
                challenge: "Declining lead velocity with rising paid costs.",
                strategy: "AI-powered automation, search expansion, and CRO testing.",
                results: "5x ROAS, 120% increase in qualified leads.",
              },
              {
                title: "D2C Growth",
                challenge: "Low conversion rates across Meta and Google.",
                strategy: "Funnel optimization, creative refresh, and audience refinement.",
                results: "+85% revenue growth and 40% lower CPA.",
              },
            ].map((caseStudy) => (
              <article key={caseStudy.title} className="rounded-[2rem] border border-slate-200/60 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-950">{caseStudy.title}</h3>
                <div className="mt-6 space-y-4 text-slate-600">
                  <p><strong>Challenge:</strong> {caseStudy.challenge}</p>
                  <p><strong>Strategy:</strong> {caseStudy.strategy}</p>
                  <p><strong>Results:</strong> {caseStudy.results}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="bg-slate-950 px-6 py-24 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Testimonials</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Trusted by ambitious brands.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
                  <p className="text-xl font-semibold text-white">“{item.quote}”</p>
                  <p className="mt-6 text-sm uppercase tracking-[0.35em] text-cyan-300">{item.name}</p>
                  <p className="text-slate-300">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Team</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">A modern growth team built for enterprise performance.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Founder",
              "Marketing Strategists",
              "Media Buyers",
              "SEO Experts",
              "Design Team",
              "Analytics Team",
            ].map((role) => (
              <div key={role} className="rounded-[2rem] border border-slate-200/70 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{role}</h3>
                <p className="mt-4 text-slate-600">Dedicated specialists driving outcomes across every stage of the marketing funnel.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="bg-slate-950 px-6 py-24 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">FAQ</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Questions we hear most often.</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "How quickly can we start?", a: "We can launch initial strategy planning within 7 days and activate campaigns shortly after." },
                { q: "Minimum budget?", a: "We work with budgets aligned to your revenue goals, with optimized media spends for each channel." },
                { q: "Industries served?", a: "SaaS, Healthcare, Education, Real Estate, Finance, D2C, E-commerce, Manufacturing, Travel, Hospitality, Technology, Startups." },
                { q: "Pricing?", a: "Custom pricing that reflects campaign complexity, channel mix, and performance targets." },
                { q: "Expected ROI?", a: "Our focus is on revenue growth and sustainable ROI, not vanity metrics alone." },
              ].map((item) => (
                <details key={item.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <summary className="cursor-pointer text-lg font-semibold text-white">{item.q}</summary>
                  <p className="mt-4 text-slate-300">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Blog</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Insights on performance marketing and growth.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: "Performance Marketing Fundamentals", category: "Performance Marketing" },
              { title: "AI in Google Ads", category: "Google Ads" },
              { title: "SEO for Enterprise Brands", category: "SEO" },
            ].map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">{post.category}</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{post.title}</h3>
                <p className="mt-4 text-slate-600">Modern tactics for growth, automation, and measurable ROI across digital campaigns.</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-24 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_0.95fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Start your next revenue-focused campaign.</h2>
                <div className="mt-10 space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
                  <div className="flex items-center gap-4 text-slate-200">
                    <ShieldCheck className="h-6 w-6 text-cyan-300" />
                    <span>WhatsApp:</span>
                    <a href="https://wa.me/919999999999" className="text-white hover:text-cyan-300">+91 99999 99999</a>
                  </div>
                  <div className="flex items-center gap-4 text-slate-200">
                    <Mail className="h-6 w-6 text-cyan-300" />
                    <span>Email:</span>
                    <a href="mailto:hello@performatic.agency" className="text-white hover:text-cyan-300">hello@performatic.agency</a>
                  </div>
                  <div className="flex items-center gap-4 text-slate-200">
                    <Globe className="h-6 w-6 text-cyan-300" />
                    <span>Address:</span>
                    <span>Mumbai, India</span>
                  </div>
                </div>
              </div>
              <form className="space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20">
                <div>
                  <label className="text-sm font-semibold text-slate-200" htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-cyan-300" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-200" htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@example.com" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-cyan-300" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-200" htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell us about your goals" className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none focus:border-cyan-300"></textarea>
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 bg-white px-6 py-12 text-slate-700 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-lg font-semibold text-slate-950">Performatic</h3>
            <p className="mt-4 max-w-md text-sm leading-7">A premium performance marketing agency delivering measurable revenue growth through data-driven campaigns and AI optimization.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Services</h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {services.map((service) => <li key={service.title}>{service.title}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Company</h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>About</li>
              <li>Careers</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Resources</h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
