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
  // Star,
} from "lucide-react";
import Marquee from "@/components/marquee";
import TypewriterPhrases from "@/components/typewriterPhrases";

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
    // "Why Us",
    // "Process",
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
    <div className="min-h-screen bg-[#000000] text-white selection:bg-red-600 selection:text-white font-sans antialiased overflow-x-hidden relative">
      {/* --- Dynamic Cinematic Background Canvas --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Red Abstract Light Vector */}
        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-150 h-150 bg-red-600/10 rounded-full blur-[150px]"
        />
        {/* Floating Gold Abstract Light Vector */}
        <motion.div
          animate={{
            y: [0, 80, 0],
            x: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 -right-20 w-125 h-125 bg-amber-500/5 rounded-full blur-[130px]"
        />
        {/* Fine Matrix Background Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size:40px_40px" />
      </div>

      {/* --- Sticky Transparent Navigation Bar --- */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full backdrop-blur-xl bg-[#000000]/70 border-b border-white/5 transition-all duration-300 hover:border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none rounded-lg relative overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Image
                src="/images/logo2.png"
                alt="brandshift_logo"
                width={250}
                height={250}
                loading="eager"
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 176px, 192px"
                className="w-28 sm:w-36 md:w-44 lg:w-48 h-auto transition-all duration-300 group-hover:brightness-110"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300 relative py-2 group/link focus:outline-none focus:text-white"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover/link:w-full" />
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover/link:w-1/2" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center"
          >
            <Link
              href="#contact"
              className="relative group px-5 py-2.5 lg:px-6 lg:py-3 rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden border border-white/10 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-red-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <span className="absolute inset-0 w-full h-full bg-white opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-0" />
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                Start Your Project
              </span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-red-500 rounded-full border border-transparent hover:border-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-20 left-0 w-full bg-[#000000] border-b border-white/10 px-6 py-8 flex flex-col gap-2 md:hidden z-40 backdrop-blur-2xl overflow-hidden"
            >
              {navLinks.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item}
                >
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold uppercase tracking-widest text-gray-300 block py-3.5 border-b border-white/5 focus:outline-none focus:text-red-500 hover:text-red-500 hover:pl-4 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-white text-black text-center text-xs font-bold uppercase tracking-widest py-4 rounded-xl block hover:bg-red-600 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative mt-20 min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 overflow-hidden pt-12 md:pt-0">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block border border-white/10 text-white bg-white/5 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 relative group overflow-hidden">
              <span className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-amber-400 to-transparent animate-pulse" />
              Bringing Your Brand To Life
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.95]"
          >
            We Build Brands That <br className="sm:inline" />
            <span className="bg-linear-to-r from-white via-red-500 to-amber-500 bg-clip-text text-transparent inline-flex text-center items-center justify-center min-h-[1.1em] hover:scale-[1.02] transition-transform duration-500 cursor-default relative">
              <TypewriterPhrases />
              {/* Animated Typing Blinking Cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block ml-1 w-2 h-10 sm:h-16 md:h-20 bg-amber-500 align-middle self-center"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-normal"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4"
          >
            <Link
              href="#contact"
              className="w-full sm:w-52 bg-red-600 text-white font-bold text-xs uppercase tracking-widest px-8 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-2 shadow-xl shadow-red-600/10 group focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <span>Book Studio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
            <Link
              href="#portfolio"
              className="w-full sm:w-52 bg-transparent text-white border border-white/10 font-bold text-xs uppercase tracking-widest px-8 py-5 rounded-full hover:bg-white/5 hover:border-white transition-all duration-500 flex items-center justify-center focus:outline-none relative overflow-hidden group"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent" />
              View Work
            </Link>
          </motion.div>
        </div>

        {/* Bottom Horizontal Animated Border Line */}
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
        />
      </section>

      {/* --- 2. ABOUT SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        id="about"
        className="py-32 px-6 max-w-7xl mx-auto border-b border-white/5 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest block">
              About Brand Shift Media
            </span>
            <h2 className="text-3xl sm:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Bridging Cutting-Edge Creativity & Predictable Digital Solutions.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Based natively in Lagos, Nigeria, we step outside traditional
              agency architecture to create innovative digital solutions. We
              redefine how your customers interact with your products by
              infusing hyper-clean branding, enterprise website positioning,
              high-impact printing, brand visibility, and strategic advertising
              into your daily framework.
            </p>
          </motion.div>

          {/* Interactive Metric Counter Display Group */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {counters.map((counter, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(234, 179, 8, 0.2)",
                }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/2 border border-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center items-start transition-all duration-300 relative group"
              >
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-red-500 transition-colors" />
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter block mb-1">
                  {counter.value}
                </span>
                <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                  {counter.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Marquee />

      {/* --- 3. SERVICES SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        id="services"
        className="py-32 px-6 bg-[#030303] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.05),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
            <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest block">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-6xl font-black tracking-tight text-white">
              Our Branding Ecosystem
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto">
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
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  key={index}
                  className="bg-white/1 border border-white/5 rounded-2xl p-8 hover:border-red-500/30 hover:bg-white/3 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-white/2 to-transparent pointer-events-none rounded-bl-full group-hover:from-amber-500/3 transition-all" />
                  <div>
                    <div className="w-12 h-12 bg-white/5 border border-white/10 text-white rounded-xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                      <IconComp className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-amber-500 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* --- 4. PORTFOLIO SHOWCASE --- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ delay: 1 * 0.05, duration: 0.5 }}
        whileHover={{ y: -6 }}
        id="portfolio"
        className="py-32 overflow-hidden bg-black relative"
      >
        {/* Ambient background glow focusing the marquee */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest block">
              Our Selected Work Portfolio
            </span>
            <h2 className="text-3xl sm:text-6xl font-black tracking-tight text-white">
              Visual Case Implementations
            </h2>
          </div>

          {/* Filtering Navigation Container */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none border-b border-white/5 md:border-none relative z-20"
            style={{ scrollbarWidth: "none" }}
          >
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[10px] font-bold uppercase tracking-widest px-6 py-3 cursor-pointer rounded-full border whitespace-nowrap transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                  activeCategory === category
                    ? "bg-white text-black border-white shadow-lg"
                    : "bg-transparent text-gray-400 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* --- Infinite Marquee Track Wrappers --- */}
        <div className="flex overflow-hidden select-none group hover-pause border-y border-white/5 py-4 bg-zinc-950/30 relative z-10">
          {/* Track 1 */}
          <div className="flex shrink-0 items-stretch gap-8 min-w-full animate-marquee pr-8">
            {[
              ...filteredPortfolio,
              ...filteredPortfolio,
              ...filteredPortfolio,
            ].map((item, idx) => (
              <div
                key={`track1-${item.title}-${idx}`}
                className="w-[320px] sm:w-100 bg-white/1 border border-white/5 rounded-2xl overflow-hidden group/card hover:border-amber-500/30 hover:bg-white/3 transition-all duration-500 flex flex-col justify-between shrink-0"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={item.image}
                    alt={`Case representation for ${item.title}`}
                    className="object-cover w-full h-full transform group-hover/card:scale-105 transition-transform duration-700 opacity-70 group-hover/card:opacity-100"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />
                </div>
                <div className="p-6 flex items-center justify-between gap-4 border-t border-white/5 bg-black/40 backdrop-blur-md">
                  <div>
                    <span className="text-[9px] font-bold tracking-widest uppercase text-red-500 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight group-hover/card:text-amber-500 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <Link
                    href="#"
                    target="_blank"
                    className="flex items-center focus:outline-none"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#ffffff",
                        color: "#000000",
                      }}
                      className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-white transition-all shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- 5. WHY CHOOSE US SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        id="why-us"
        className="py-32 px-6 bg-[#030303] border-t border-b border-white/5 relative"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest block">
              Why Shift With Us
            </span>
            <h2 className="text-3xl sm:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Engineered to Dominate Market Performance Metrics.
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We eliminate design guessing. Every branding vector from
              high-fidelity layouts down to advertising targets adheres strictly
              to core performance logic, high device visibility, and
              accessibility execution standards.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/1 border border-white/5 hover:border-white/10 p-6 rounded-2xl space-y-4 transition-all duration-300 relative group"
              >
                <div className="w-8 h-8 bg-white/5 text-white border border-white/10 rounded-lg flex items-center justify-center group-hover:text-red-500 group-hover:border-red-500/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Marquee />

      {/* --- 6. TESTIMONIALS SECTION --- */}
      {/* Testimonials section remained fully commented as per the source parameters rule */}

      {/* --- 7. PROCESS SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        id="process"
        className="py-32 px-6 bg-[#000000] border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
            <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest block">
              Workflow Blueprint
            </span>
            <h2 className="text-3xl sm:text-6xl font-black tracking-tight text-white">
              How We Shift Production
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {workflow.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-4 relative group"
              >
                <div className="text-5xl font-black text-white/5 group-hover:text-amber-500/20 transition-colors tracking-tighter font-mono border-b border-white/5 pb-2">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- 8. CALL TO ACTION (CTA) --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        className="py-32 px-6 max-w-5xl mx-auto text-center relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white max-w-3xl mx-auto leading-none"
          >
            Ready to Shift Your Brand to the{" "}
            <span className="text-red-500 block sm:inline">Next Level?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xs sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Let&apos;s Give Your Brand a strong creative presence, positioning
            and distribution strategy with our cutting-edge approach. Establish
            systemic presence now.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-52 bg-white text-black font-bold text-xs uppercase tracking-widest px-8 py-5 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Book Strategy Session
            </a>
            <a
              href="mailto:thebrandshiftmedia@gmail.com"
              className="w-full sm:w-52 bg-transparent text-white border border-white/10 font-bold text-xs uppercase tracking-widest px-8 py-5 rounded-full hover:bg-white/5 hover:border-white transition-colors duration-300 flex items-center justify-center focus:outline-none"
            >
              Direct Mail Setup
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* --- 9. CONTACT SECTION --- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        layout
        id="contact"
        className="py-32 px-6 bg-[#030303] border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest block">
                Contact Us
              </span>
              <h2 className="text-3xl sm:text-6xl font-black tracking-tight text-white leading-none">
                Let&apos;s Launch Something Real.
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                    HQ Studio Address
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    5 Isaac John Street, Ikeja GRA, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                    Phone Integration
                  </h4>
                  <a
                    href="tel:+2348151798442"
                    className="text-sm text-gray-400 hover:text-amber-500 transition-colors block mt-1"
                  >
                    +234 815 179 8442
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                    Secure Transmission Email
                  </h4>
                  <a
                    href="mailto:thebrandshiftmedia@gmail.com"
                    className="text-sm text-gray-400 hover:text-amber-500 transition-colors block mt-1"
                  >
                    thebrandshiftmedia@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                    Operational Framework Hours
                  </h4>
                  <div className="text-sm text-gray-400 mt-1 space-y-0.5">
                    <p>Monday: 6:00 AM – 10:30 PM</p>
                    <p>Tuesday – Sunday: 7:00 AM – 10:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Direct Messaging Channels Integration */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/2349023792627"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-black font-bold text-[10px] uppercase tracking-widest px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Sync Channel</span>
              </motion.a>
            </div>
          </div>

          {/* Fully Styled Interactive Contact Form Column */}
          <div className="lg:col-span-7 bg-white/1 border border-white/5 p-8 sm:p-10 rounded-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
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
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
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
                    className="w-full border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
                >
                  Select Service Required *
                </label>
                <select
                  id="service"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all appearance-none"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option>Branding & Creative Design Architecture</option>
                  <option>Web Development and management</option>
                  <option>Targeted Distribution Digital Ads Campaigns</option>
                  <option>Social Media Management</option>
                  <option>Other Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
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
                  className="w-full border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none bg-black"
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 border border-transparent hover:border-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Transmitting..." : "Transmit Project Request"}
              </motion.button>

              {formStatus && (
                <p
                  className={`text-xs font-semibold text-center mt-4 ${formStatus.success ? "text-green-400" : "text-red-400"}`}
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
                    className="text-xs text-green-400 font-semibold text-center mt-4"
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
      <footer className="bg-[#000000] border-t border-white/5 pt-24 pb-12 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          {/* Agency Bio Block */}
          <div className="space-y-4">
            <span className="text-xl font-black tracking-tighter text-white uppercase">
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
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Ecosystem Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {["Services", "Portfolio", "Why Us", "Process"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-xs text-gray-400 hover:text-white hover:underline underline-offset-4 decoration-red-500 transition-colors w-max"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Strategic Services Shortcut Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Core Competencies
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-400">
              <li className="hover:text-white transition-colors">
                Branding & Graphics Architecture
              </li>
              <li className="hover:text-white transition-colors">
                Bespoke Headless Development
              </li>
              <li className="hover:text-white transition-colors">
                High-ROI Performance Marketing
              </li>
              <li className="hover:text-white transition-colors">
                Luxury High-Fidelity Printing
              </li>
            </ul>
          </div>

          {/* Social Platform Synchronization Link Block */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Sync Ecosystem Network
            </h4>
            <div className="flex flex-col gap-3 text-xs text-gray-400">
              <a
                href="https://tiktok.com/@brandshiftmedia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition-colors"
              >
                TikTok: @brandshiftmedia
              </a>
            </div>
          </div>
        </div>

        {/* Global Structural Copyright Row */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left relative z-10">
          <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
            © 2026 Brand Shift Media. All rights reserved globally.
          </p>
          <div className="flex gap-6 text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
            <a href="#" className="hover:text-white transition-colors">
              System Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Operations
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
