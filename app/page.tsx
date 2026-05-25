"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Layers,
  Paintbrush,
  Printer,
  Code,
  ShieldCheck,
  Megaphone,
  Cpu,
  Video,
  Briefcase,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Menu,
  X,
  Star,
} from "lucide-react";

// --- Types & Interfaces ---
interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
}

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export default function BrandShiftMediaHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // --- Mock Data ---
  const counters = [
    { value: "150+", label: "Projects Completed" },
    { value: "80+", label: "Happy Clients" },
    { value: "45+", label: "Brands Transformed" },
    { value: "50+", label: "Campaign Reach" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const navLinks: string[] = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Why Us",
    "Process",
    "Contact",
  ];

  const services: Service[] = [
    {
      icon: Megaphone,
      name: "Social Media Management",
      description:
        "Data-driven organic growth, community building, and content architecture across premium channels.",
    },
    {
      icon: Paintbrush,
      name: "Branding & Graphics Design",
      description:
        "Iconic brand identity systems, logos, presentation collateral, and scalable vector architectures.",
    },
    {
      icon: Printer,
      name: "Printing Services",
      description:
        "High-fidelity production, luxury merchandise, corporate stationery, and wide-format prints.",
    },
    {
      icon: Code,
      name: "Website Design & Development",
      description:
        "Bespoke engineering utilizing Next.js, headless architectures, performance SEO, and smooth animations.",
    },
    {
      icon: ShieldCheck,
      name: "Meta Verification & Recovery",
      description:
        "Securing modern identity platforms, blue-badge applications, and enterprise account asset recovery.",
    },
    {
      icon: Layers,
      name: "Sponsored Ads & Campaigns",
      description:
        "High-ROI digital advertising funnels across Google, Meta, and TikTok optimized for performance.",
    },
    {
      icon: Cpu,
      name: "AI & Content Creation",
      description:
        "Next-generation generative workflows producing high-engagement visual assets at hyper-speed.",
    },
    {
      icon: Video,
      name: "Video Production & Editing",
      description:
        "Cinematic commercial structures, social-first reels, high-fidelity post-production processing.",
    },
    {
      icon: Briefcase,
      name: "Business Registration",
      description:
        "Streamlined corporate structuring, regulatory compliance compliance, and modern legal setup.",
    },
  ];

  const portfolioCategories = [
    "All",
    "Branding",
    "Web Development",
    "Digital Marketing",
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      title: "Shirt Branding",
      category: "Branding",
      image: "/images/projects/one.jpg",
    },
    {
      title: "Ascada Shirt Design",
      category: "Branding",
      image: "/images/projects/two.jpg",
    },
    {
      title: "Afro Event Branding",
      category: "Digital Marketing",
      image: "/images/projects/three.jpg",
    },
    {
      title: "Business Transform Media Logo Design",
      category: "Branding",
      image: "/images/projects/four.jpg",
    },
    {
      title: "Ezeari Logo Design",
      category: "Branding",
      image: "/images/projects/five.jpg",
    },
    {
      title: "Graphics Design",
      category: "Digital Marketing",
      image: "/images/projects/six.jpg",
    },
  ];

  const whyChooseUs = [
    {
      title: "Creative Excellence",
      desc: "Award-winning design structures tailored entirely for international positioning.",
    },
    {
      title: "Fast Delivery",
      desc: "Agile project workflows guaranteeing strict milestone compliance without feature cuts.",
    },
    {
      title: "Strategic Branding",
      desc: "We map your market placement first, ensuring design drives functional conversions.",
    },
    {
      title: "Modern Technology",
      desc: "Engineered frameworks built for core web vitals, security, and performance scaling.",
    },
  ];

  const workflow: ProcessStep[] = [
    {
      step: "01",
      title: "Discovery",
      description:
        "Deep-dive workshops unpacking business metrics, target personas, and current systemic roadblocks.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Engineering bespoke design pathways, advertising logic, and architectural blueprints for validation.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "High-fidelity mockups, premium brand aesthetics, user interfaces, and custom animation styling.",
    },
    {
      step: "04",
      title: "Development",
      description:
        "Transforming layouts into accessible, production-grade logic optimized for all digital surfaces.",
    },
    {
      step: "05",
      title: "Launch & Growth",
      description:
        "System deployment backed by real-time performance analytics, conversion monitoring, and scaling.",
    },
  ];

  const filteredPortfolio =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Branding & Creative Design Architecture",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    msg: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          success: true,
          msg: "✓ Request transmitted successfully!",
        });
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          service: "Branding & Creative Design Architecture",
          message: "",
        });
      } else {
        setFormStatus({
          success: false,
          msg: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setFormStatus({
        success: false,
        msg: `Network failure. Please try again. ${error}`,
      });
    } finally {
      setIsSubmitting(false);
      setFormStatus(null);
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-red-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* --- Sticky Transparent Navigation Bar --- */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#0A0A0B]/80 border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none rounded-lg"
          >
            <Image
              src="/images/logo.png"
              alt="brandshift logo"
              width={120}
              height={120}
              loading="eager"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-gray-300 hover:text-white hover:underline decoration-red-500 decoration-2 underline-offset-4 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="bg-red-600 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-red-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-red-500/50"
            >
              Start Your Project
            </Link>
          </button>

          {/* Mobile Menu Button Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-20 left-0 w-full bg-[#0A0A0B] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden z-40"
            >
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-200 block py-2 border-b border-white/5 focus:outline-none focus:ring-2 focus:ring-red-500 rounded hover:text-red-500 hover:border-red-500/40 transition-all duration-500"
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-red-600 text-white text-center font-semibold py-3.5 rounded-xl mt-2 block"
              >
                Start Your Project
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative mt-20 min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 overflow-hidden pt-12 md:pt-0">
        {/* Soft Radial Ambient Lighting Base Layer */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 sm:w-150 h-75 sm:h-150 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="inline-block border border-red-500/30 text-red-400 bg-red-950/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
              Bringing Your Brand To Life
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            We Build Brands That <br className="hidden sm:inline" />
            <span className="bg-linear-to-r from-red-500 via-red-600 to-amber-500 bg-clip-text text-transparent">
              Command Attention
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Brand Shift Media helps businesses grow through creative branding,
            graphics design, full-scale web development, digital marketing,
            AI-powered content workflows, and strategic advertising.
          </motion.p>

          {/* Accessible Action Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="w-full sm:w-48 bg-red-600 text-white font-bold px-8 py-4 rounded-full hover:bg-red-700 transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 group focus:outline-none focus:ring-4 focus:ring-red-500/50"
            >
              <span>Book Studio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="#portfolio"
              className="w-full sm:w-48 bg-transparent text-white border-2 border-white/20 font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#0A0A0B] hover:border-white transition-all duration-500 hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              View Work
            </Link>
          </motion.div>
        </div>

        {/* Bottom Horizontal Animated Border Line */}
        <div className="absolute bottom-0 left-0 w-full h-1px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* --- 2. ABOUT SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        layout
        id="about"
        className="py-24 px-6 max-w-7xl mx-auto border-b border-white/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest block">
              About Brand Shift Media
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Bridging Cutting-Edge Creativity & Predictable Digital Solutions.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Based natively in Lagos, Nigeria, we step outside traditional
              agency architecture to create innovative digital solutions. We
              redefine how your customers interact with your products by
              infusing hyper-clean branding, enterprise website positioning,
              high-impact printing, brand visibility, and strategic advertising
              into your daily framework.
            </p>
          </div>

          {/* Interactive Metric Counter Display Group */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {counters.map((counter, idx) => (
              <div
                key={idx}
                className="bg-white/2 border border-white/5 rounded-2xl p-6 flex flex-col justify-center items-start"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block mb-1">
                  {counter.value}
                </span>
                <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">
                  {counter.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- 3. SERVICES SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        layout
        id="services"
        className="py-24 px-6 bg-[#0E0E10] relative"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.03),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest block">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Our Branding Ecosystem
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Modern business requirements demand tailored digital strategies
              and specialized branding solutions. Here is how we transform your
              visibility.
            </p>
          </div>

          {/* Interactive Grid Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  key={index}
                  className="bg-white/1 border border-white/5 rounded-2xl p-8 hover:border-red-500/40 hover:bg-white/2 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-red-950/40 border border-red-500/20 text-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  {/* <div className="flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-red-400 transition-colors cursor-pointer">
                    <span>Learn Capabilities</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div> */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* --- 4. PORTFOLIO SHOWCASE --- */}
      <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest block">
              Our Selected Work Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Visual Case Implementations
            </h2>
          </div>

          {/* Filtering Navigation Container */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-semibold px-5 py-2.5 cursor-pointer rounded-full border whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-red-500 ${
                  activeCategory === category
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.title}
                className="bg-white/1 border border-white/5 rounded-2xl overflow-hidden group hover:border-white/10 transition-colors"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={`Case representation for ${item.title}`}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 opacity-80"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-red-400 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <Link href="#" target="_blank" className="flex items-center">
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/5 text-white group-hover:bg-red-600 group-hover:border-red-600 transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- 5. WHY CHOOSE US SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        layout
        id="why-us"
        className="py-24 px-6 bg-[#0E0E10] border-t border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest block">
              Why Shift With Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Engineered to Dominate Market Performance Metrics.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We eliminate design guessing. Every branding vector from
              high-fidelity layouts down to advertising targets adheres strictly
              to core performance logic, high device visibility, and
              accessibility execution standards.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/1 border border-white/5 p-6 rounded-2xl space-y-3"
              >
                <div className="w-8 h-8 bg-red-600/10 text-red-500 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- 6. TESTIMONIALS SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        layout
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-red-500 text-xs font-bold uppercase tracking-widest block">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Validated Scale Performance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white/1 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &ldquo;Brand Shift Media entirely rebuilt our digital pipeline
                  infrastructure. Within three business quarters post-launch,
                  our digital conversion ratios scaling out of organic networks
                  surged exponentially.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8 pt-4 border-t border-white/5">
                <div className="w-10 h-10 bg-zinc-800 rounded-full shrink-0 object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Executive Director
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    Enterprise Solutions Group
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* --- 7. PROCESS SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        layout
        id="process"
        className="py-24 px-6 bg-[#0E0E10] border-t border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest block">
              Workflow Blueprint
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              How We Shift Production
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {workflow.map((step, idx) => (
              <div key={idx} className="space-y-4 relative group">
                <div className="text-4xl font-black text-white/5 group-hover:text-red-500/20 transition-colors tracking-tight font-mono">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- 8. CALL TO ACTION (CTA) --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        layout
        className="py-24 px-6 max-w-5xl mx-auto text-center relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Shift Your Brand to the{" "}
            <span className="text-red-500">Next Level?</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Let&apos;s Give Your Brand a strong creative presence, positioning
            and distribution strategy with our cutting-edge approach. Establish
            systemic presence now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-48 bg-white text-[#0A0A0B] font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Book Strategy Session
            </a>
            <a
              href="mailto:thebrandshiftmedia@gmail.com"
              className="w-full sm:w-48 bg-transparent text-white border border-white/20 font-bold px-8 py-4 rounded-full hover:bg-white/5 transition-colors flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              Direct Mail Setup
            </a>
          </div>
        </div>
      </motion.section>

      {/* --- 9. CONTACT SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        layout
        id="contact"
        className="py-24 px-6 bg-[#0E0E10] border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest block">
                Contact Us
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Let&apos;s Launch Something Real.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    HQ Studio Address
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    5 Isaac John Street, Ikeja GRA, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Phone Integration
                  </h4>
                  <a
                    href="tel:+2348151798442"
                    className="text-sm text-gray-400 hover:text-white transition-colors block mt-1"
                  >
                    +234 815 179 8442
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Secure Transmission Email
                  </h4>
                  <a
                    href="mailto:thebrandshiftmedia@gmail.com"
                    className="text-sm text-gray-400 hover:text-white transition-colors block mt-1"
                  >
                    thebrandshiftmedia@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Operational Framework Hours
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Monday: 6:00 AM – 10:30 PM
                  </p>
                  <p className="text-sm text-gray-400">
                    Tuesday – Sunday: 7:00 AM – 10:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Direct Messaging Channels Integration */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/2349023792627"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Sync Channel</span>
              </a>
            </div>
          </div>

          {/* Fully Styled Interactive Contact Form Column */}
          <div className="lg:col-span-7 bg-white/1 border border-white/5 p-8 sm:p-10 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-gray-300"
                  >
                    Individual/Company Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-gray-300"
                  >
                    Secure Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="text-xs font-semibold text-gray-300"
                >
                  Select Service Required *
                </label>
                <select
                  id="service"
                  className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option>Branding & Creative Design Architecture</option>
                  <option>Next.js Web Engineering Development</option>
                  <option>Targeted Distribution Digital Ads Campaigns</option>
                  <option>Social Media Organic Network Optimization</option>
                  <option>Other Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-gray-300"
                >
                  Project Context Brief *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-sm uppercase tracking-wider cursor-pointer transition-colors shadow-lg shadow-red-600/10 focus:outline-none focus:ring-4 focus:ring-red-500/50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Transmitting..." : "Transmit Project Request"}
              </button>

              {formStatus && (
                <p
                  className={`text-xs font-medium text-center mt-4 ${formStatus.success ? "text-green-400" : "text-red-400"}`}
                >
                  {formStatus.msg}
                </p>
              )}

              <AnimatePresence>
                {formSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-green-400 font-medium text-center mt-4"
                  >
                    ✓ Message sent successfully. Our Team will connect with you
                    in 12 operational hours.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </motion.section>

      {/* --- 10. PREMIUM ACCESSIBLE FOOTER --- */}
      <footer className="bg-[#0A0A0B] border-t border-white/5 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Agency Bio Block */}
          <div className="space-y-4">
            <span className="text-lg font-bold tracking-tighter text-white">
              BRAND SHIFT<span className="text-red-500">.</span>
            </span>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
              Bespoke creative design patterns, scalable performance
              optimization, and deep enterprise visibility ecosystems. Built for
              global disruption.
            </p>
          </div>

          {/* Quick Architecture Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Ecosystem Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {["Services", "Portfolio", "Why Us", "Process"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-xs text-gray-400 hover:text-white transition-colors w-max"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Strategic Services Shortcut Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Competencies
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-400">
              <li>Branding & Graphics Architecture</li>
              <li>Bespoke Headless Development</li>
              <li>High-ROI Performance Marketing</li>
              <li>Luxury High-Fidelity Printing</li>
            </ul>
          </div>

          {/* Social Platform Synchronization Link Block */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Sync Ecosystem Network
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-400">
              <a
                href="https://tiktok.com/@brandshiftmedia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                TikTok: @brandshiftmedia
              </a>
            </div>
          </div>
        </div>

        {/* Global Structural Copyright Row */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[11px] text-gray-500 font-medium">
            © 2026 Brand Shift Media. All rights reserved globally.
          </p>
          <div className="flex gap-6 text-[11px] text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">
              System Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Operations
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
