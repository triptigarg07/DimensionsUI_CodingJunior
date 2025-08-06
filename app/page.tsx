"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Code,
  Globe,
  MessageSquare,
  GitBranch,
  Settings,
  Mail,
  Github,
  Twitter,
} from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJoinWaitlist = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsJoined(true);
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg" />
            <span className="text-xl font-bold">Dimension</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Careers", "Blog", "Changelog"].map((item, idx) => (
              <button
                key={item}
                className="relative px-4 py-1 rounded-lg font-medium text-gray-300 hover:text-white transition-colors focus:outline-none group"
                style={{ background: "none", border: "none" }}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 rounded-lg bg-white/10 border border-white/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-200" />
              </button>
            ))}
          </div>
          <button className="button-primary">Join waitlist</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
        {/* Semicircular Animated Lines */}
        <svg
          className="absolute left-1/2 top-1/2 z-0 pointer-events-none"
          style={{
            width: "1200px",
            height: "600px",
            transform: "translate(-50%, -60%)",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={i}
              d="M 200 400 A 300 300 0 0 1 1000 400"
              fill="none"
              stroke={`rgba(124, 58, 237, ${0.18 + i * 0.07})`}
              strokeWidth={2 + i}
              style={{ filter: "blur(3px)" }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 + i * 0.2, delay: i * 0.15 }}
            />
          ))}
        </svg>

        {/* Moving Glow Arcs */}
        {[...Array(2)].map((_, layer) => (
          <motion.div
            key={layer}
            className="absolute left-1/2 top-1/2 z-0 pointer-events-none"
            style={{
              width: "900px",
              height: "400px",
              transform: "translate(-50%, -60%)",
            }}
            animate={{
              rotate: [0, 360],
              x: [0, 60 + layer * 20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 7 + layer * 2,
              ease: "easeInOut",
            }}
          >
            <div
              className={`w-full h-full rounded-full bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400`}
              style={{ filter: "blur(90px)", opacity: layer === 0 ? 0.7 : 0.4 }}
            />
          </motion.div>
        ))}

        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium">
                Announcing our $1.4M Fundraise
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Dimension is the new
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
                standard for collaboration
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Chat, code, cloud, deployments, and more.
            </p>
          </motion.div>

          {/* Waitlist Input Area with Animated Square Outline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl mx-auto mb-12 relative"
          >
            {/* Animated Outline Square */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 blur-sm z-0"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center bg-white/5 border border-white/10 rounded-xl px-4 py-4 shadow-xl relative z-10">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address..."
                className={`w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  !isValidEmail ? "border-red-500" : "border-white/20"
                }`}
              />
              <button
                onClick={handleJoinWaitlist}
                className="px-8 py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all hover:scale-105"
              >
                Join waitlist
              </button>
            </div>

            {!isValidEmail && (
              <p className="text-red-400 text-sm mt-2">
                Invalid email address... Try again.
              </p>
            )}

            {isJoined && (
              <div className="text-center mt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4">
                  ✓ You've joined the waitlist!
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="glass-effect rounded-2xl p-8 max-w-5xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-sm text-gray-400">
                  A preview of Dimension app.
                </span>
              </div>
              <div className="bg-dark-800 rounded-lg p-6 text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary-400" />
                    <span className="text-primary-400">Chat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Deployments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400">Code Explorer</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full" />
                    <div>
                      <p className="text-white font-medium">Tejas</p>
                      <p className="text-gray-400 text-sm">1:14 PM</p>
                    </div>
                  </div>
                  <p className="text-gray-300 ml-11">
                    Our Command K menu doesn't trigger when I'm focused on a
                    text field.
                  </p>
                  <div className="ml-11 flex items-center gap-2">
                    <button className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded text-primary-400 text-sm">
                      Create issue on Linear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 animate-bounce text-gray-400" />
        </motion.div>
      </section>

      {/* Build Software Faster Section */}
      <section className="py-20 px-4 bg-dark-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build software
              <span className="gradient-text"> faster, together.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The most complete developer experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Collaborate on everything",
                description:
                  "From deployments to tasks, work with your team every step of the way.",
              },
              {
                icon: Settings,
                title: "Crafted for your favorite tools",
                description:
                  "Connect your tools - we'll handle the rest. Many integrations, with more to come.",
              },
              {
                icon: Globe,
                title: "Everything you need all in one platform",
                description:
                  "From prototyping to production - develop without switching tabs.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts Section (restored to original place) */}
      <section className="py-20 px-4 bg-dark-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Keyboard Shortcuts
              <span className="gradient-text"> for effortless navigation.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful keyboard shortcuts for effortless navigation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Keyboard Shortcuts</h3>
              <p className="text-gray-300 mb-8">
                Powerful keyboard shortcuts for effortless navigation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <kbd className="px-3 py-1 bg-dark-800 border border-white/20 rounded text-sm font-mono">
                    ⌘K
                  </kbd>
                  <span className="text-gray-300">
                    Access the command palette
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <kbd className="px-3 py-1 bg-dark-800 border border-white/20 rounded text-sm font-mono">
                    ⌘M
                  </kbd>
                  <span className="text-gray-300">Mark all as read</span>
                </div>
                <div className="flex items-center gap-4">
                  <kbd className="px-3 py-1 bg-dark-800 border border-white/20 rounded text-sm font-mono">
                    ⇧P
                  </kbd>
                  <span className="text-gray-300">Change status</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  "`",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "0",
                  "-",
                  "=",
                  "delete",
                ].map((key, i) => (
                  <kbd
                    key={i}
                    className="px-2 py-1 bg-dark-800 border border-white/20 rounded text-xs font-mono text-center"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
              <div className="grid grid-cols-13 gap-1 mb-4">
                {[
                  "tab",
                  "Q",
                  "W",
                  "E",
                  "R",
                  "T",
                  "Y",
                  "U",
                  "I",
                  "O",
                  "P",
                  "[",
                  "]",
                  "\\",
                ].map((key, i) => (
                  <kbd
                    key={i}
                    className="px-2 py-1 bg-dark-800 border border-white/20 rounded text-xs font-mono text-center"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
              <div className="grid grid-cols-13 gap-1 mb-4">
                {[
                  "caps",
                  "A",
                  "S",
                  "D",
                  "F",
                  "G",
                  "H",
                  "J",
                  "K",
                  "L",
                  ";",
                  "'",
                  "return",
                ].map((key, i) => (
                  <kbd
                    key={i}
                    className="px-2 py-1 bg-dark-800 border border-white/20 rounded text-xs font-mono text-center"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
              <div className="grid grid-cols-13 gap-1">
                {[
                  "shift",
                  "Z",
                  "X",
                  "C",
                  "V",
                  "B",
                  "N",
                  "M",
                  ",",
                  ".",
                  "/",
                  "shift",
                ].map((key, i) => (
                  <kbd
                    key={i}
                    className="px-2 py-1 bg-dark-800 border border-white/20 rounded text-xs font-mono text-center"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Communicate More Section (after keyboard shortcuts) */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center overflow-hidden bg-dark-900">
        {/* Animated Dots Background */}
        <motion.svg
          className="absolute inset-0 w-full h-full z-0"
          style={{ pointerEvents: "none" }}
        >
          {[...Array(60)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1400}
              cy={Math.random() * 400}
              r={Math.random() * 2 + 1.5}
              fill="#7dd3fc"
              initial={{ opacity: 0, cy: Math.random() * 400 }}
              animate={{
                opacity: [0, 0.7, 0],
                cy: [
                  Math.random() * 400,
                  Math.random() * 400 + 40,
                  Math.random() * 400,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 6 + Math.random() * 4,
                delay: i * 0.08,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.svg>
        <div className="relative z-10 w-full flex flex-col items-center justify-center pt-12 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
            Communicate more,
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
              with less.
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-4 text-center max-w-xl">
            Driven by delightfully smart interactions.
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-400">Press</span>
            <kbd className="px-2 py-0.5 bg-dark-800 border border-white/20 rounded text-base font-mono text-white">
              D
            </kbd>
            <span className="text-gray-400">anytime to get started</span>
          </div>
        </div>
        {/* Floating Chat Card (only in this section) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="z-10 mt-4"
        >
          <div className="glass-effect rounded-xl p-3 flex items-start gap-2 shadow-xl min-w-[220px] max-w-[90vw]">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Tejas"
              className="w-7 h-7 rounded-full border border-white/20"
            />
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="font-semibold text-white text-sm">Tejas</span>
                <span className="text-xs text-gray-400">1:14 PM</span>
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              </div>
              <div className="text-gray-200 text-sm mb-1">
                Our Command K menu doesn't trigger when I'm focused on a text
                field.
              </div>
              <button className="px-2.5 py-1 border border-white/20 rounded-lg text-white bg-white/10 hover:bg-white/20 transition-all text-xs font-medium flex items-center gap-1">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#7dd3fc"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="#7dd3fc"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Create issue on Linear
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Magic Sprinkled Section */}
      <section className="py-20 px-4 bg-dark-900 relative overflow-hidden">
        {/* Subtle background dots */}
        <motion.svg
          className="absolute inset-0 w-full h-full z-0"
          style={{ pointerEvents: "none" }}
        >
          {[...Array(40)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1600}
              cy={Math.random() * 600}
              r={Math.random() * 1.5 + 1}
              fill="#7dd3fc"
              initial={{ opacity: 0, cy: Math.random() * 600 }}
              animate={{
                opacity: [0, 0.3, 0],
                cy: [
                  Math.random() * 600,
                  Math.random() * 600 + 30,
                  Math.random() * 600,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 8 + Math.random() * 4,
                delay: i * 0.12,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.svg>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            With magic{" "}
            <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
              sprinkled throughout.
            </span>
          </motion.h2>
          <p className="text-xl text-gray-300 mb-12">
            Just to make work feel exciting again.
          </p>
          {/* Animated Card Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Notification/Task Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 flex flex-col gap-3 shadow-xl"
            >
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  "Task assigned to you",
                  "Deployment",
                  "Deployed to Vercel",
                  "Force pushed",
                  "8/8 checks passed",
                  "GitHub Release",
                ].map((task, i) => (
                  <motion.div
                    key={task}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2"
                  >
                    <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 10l4 4 6-8"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-white/90">{task}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    stroke="#fff"
                    strokeWidth="2"
                    opacity=".3"
                  />
                  <path
                    d="M12 8v4l3 3"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-medium text-white">Notifications</span>
                <span className="text-xs text-gray-400">
                  You're always in sync.
                </span>
              </div>
            </motion.div>
            {/* Teams/Peek Views/Context Sharing Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 flex flex-col gap-3 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                {["mail", "chat", "users", "cloud"].map((icon, i) => (
                  <span
                    key={icon}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                      i === 2 ? "bg-white/10 border border-white/20" : ""
                    }`}
                  >
                    {/* Replace with real icons as needed */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#7dd3fc"
                        strokeWidth="2"
                        opacity=".3"
                      />
                    </svg>
                  </span>
                ))}
              </div>
              <div className="bg-white/5 rounded-xl p-4 mb-4 text-left">
                <div className="font-medium text-white mb-1">Teams</div>
                <div className="text-gray-300 text-sm">
                  Acme issue{" "}
                  <span className="text-xs text-gray-500">3 days</span>
                </div>
                <div className="text-xs text-gray-400">
                  oguzyagizkara commented on the issue: Landing
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#fff"
                    strokeWidth="2"
                    opacity=".3"
                  />
                  <path
                    d="M8 12h8M8 16h8"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-medium text-white">Peek Views</span>
                <span className="text-xs text-gray-400">
                  Everything you need. At a peek.
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#fff"
                    strokeWidth="2"
                    opacity=".3"
                  />
                  <path
                    d="M16 12H8m0 0v4m0-4V8"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-medium text-white">Context Sharing</span>
                <span className="text-xs text-gray-400">
                  Share information. No links. No copy paste.
                </span>
              </div>
            </motion.div>
            {/* Code/Terminal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 flex flex-col gap-3 shadow-xl text-left"
            >
              <div className="bg-white/5 rounded-xl p-4 font-mono text-xs text-gray-200 leading-relaxed relative overflow-x-auto">
                <div className="mb-1">
                  15:49:01.090 Previous build cache not av...
                </div>
                <div>15:49:02.041 Cloning completed: 1.074s</div>
                <div>15:49:02.247 Running "vercel build"</div>
                <div>15:49:02.749 Vercel CLI 31.1.1</div>
                <div>15:49:02.984 Installing dependencies...</div>
                <div className="bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 text-white px-2 py-1 rounded mt-2 font-bold">
                  15:49:04.554 Error: No Next.js version o...
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code, but better Section */}
      <section className="py-20 px-4 bg-dark-800 relative overflow-hidden">
        {/* Subtle background lines/dots */}
        <motion.svg
          className="absolute inset-0 w-full h-full z-0"
          style={{ pointerEvents: "none" }}
        >
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1600}
              cy={Math.random() * 600}
              r={Math.random() * 1.5 + 1}
              fill="#a78bfa"
              initial={{ opacity: 0, cy: Math.random() * 600 }}
              animate={{
                opacity: [0, 0.2, 0],
                cy: [
                  Math.random() * 600,
                  Math.random() * 600 + 30,
                  Math.random() * 600,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 10 + Math.random() * 4,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.svg>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Code,{" "}
            <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
              but better.
            </span>
          </motion.h2>
          <p className="text-xl text-gray-300 mb-12">
            The easiest way to browse your codebase.
          </p>
          {/* Code Explorer UI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 justify-center items-start mx-auto max-w-4xl"
          >
            {/* Sidebar */}
            <div className="glass-effect rounded-2xl p-4 w-full md:w-64 flex-shrink-0 shadow-xl text-left">
              <div className="font-mono text-xs text-gray-400 mb-2">
                dimensionhq/fleet
              </div>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-white/80">
                  <span>📁</span>.github
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span>📁</span>src
                  <ul className="ml-6 space-y-1">
                    <li className="flex items-center gap-2 text-white/60">
                      <span>📁</span>utils
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <span>📁</span>core
                    </li>
                    <li className="flex items-center gap-2 text-white/60">
                      <span>📁</span>cli
                    </li>
                  </ul>
                </li>
                <li className="flex items-center gap-2 text-white/90 bg-white/10 rounded px-2 py-1 mt-2">
                  <span>🦀</span>main.rs
                </li>
              </ul>
            </div>
            {/* Code Editor Area */}
            <div className="flex-1 min-w-0">
              {/* Tabs */}
              <div className="flex gap-2 mb-2">
                {["main.rs", "configure.rs", "mod.rs", "app.rs"].map(
                  (tab, i) => (
                    <div
                      key={tab}
                      className={`px-4 py-1 rounded-t-lg font-mono text-xs ${
                        i === 0
                          ? "bg-dark-900 text-white border-b-2 border-pink-400"
                          : "bg-dark-800 text-gray-400"
                      }`}
                    >
                      {tab}
                    </div>
                  )
                )}
              </div>
              {/* Code Box */}
              <div className="glass-effect rounded-b-2xl p-4 font-mono text-xs text-left text-gray-200 leading-relaxed shadow-xl overflow-x-auto min-h-[220px]">
                <div className="mb-2 text-gray-400">
                  18 lines (14 sloc) • 338 bytes
                </div>
                <pre className="whitespace-pre">
                  <code>
                    <span className="text-pink-400">1 </span>use anyhow::
                    <span className="text-blue-400">Result</span>;
                    <span className="text-pink-400">2 </span>use cli::
                    <span className="text-blue-400">app</span>::
                    <span className="text-blue-400">App</span>;
                    <span className="text-pink-400">3 </span>use human_panic::
                    <span className="text-blue-400">setup_panic</span>;
                    <span className="text-pink-400">4 </span>
                    <span className="text-pink-400">5 </span>
                    <span className="text-purple-400">pub mod cli</span>;
                    <span className="text-pink-400">6 </span>
                    <span className="text-purple-400">pub mod core</span>;
                    <span className="text-pink-400">7 </span>
                    <span className="text-purple-400">pub mod utils</span>;
                    <span className="text-pink-400">8 </span>
                    <span className="text-pink-400">9 </span>/// Entrypoint to
                    the CLI application
                    <span className="text-pink-400">10</span>{" "}
                    <span className="text-blue-400">fn main</span>() -&gt;{" "}
                    <span className="text-blue-400">Result</span>&lt;()&gt;{" "}
                    {"{"}
                    <span className="text-pink-400">11</span> // Human panic
                    messages are only shown in `release` mode
                    <span className="text-pink-400">12</span>{" "}
                    <span className="text-yellow-400">setup_panic</span>();
                    <span className="text-pink-400">13</span>
                    <span className="text-pink-400">14</span> #[cfg(windows)]
                    <span className="text-pink-400">15</span> let _ =
                    ansi_term::enable_ansi_support();
                    <span className="text-pink-400">16</span>
                    <span className="text-pink-400">17</span> App::new().run()
                    <span className="text-pink-400">18</span>
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Track everything with GitHub Sync Section */}
      <section className="py-20 px-4 bg-dark-900 relative overflow-hidden">
        {/* Subtle background lines/dots */}
        {/* Background Effects */}
        <motion.div className="absolute inset-0 z-0" aria-hidden="true">
          {/* Blurred color blobs */}
          <motion.div
            className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-pink-400 opacity-30 rounded-full filter blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500 opacity-30 rounded-full filter blur-2xl"
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating arcs */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[...Array(4)].map((_, i) => (
              <motion.path
                key={i}
                d={`M${100 + i * 200},0 Q800,400 ${1600 - i * 200},800`}
                fill="none"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1"
                animate={{
                  pathLength: [0, 1],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: i,
                }}
              />
            ))}
          </svg>

          {/* Sparkles */}
          <motion.svg
            className="absolute inset-0 w-full h-full z-0"
            style={{ pointerEvents: "none" }}
          >
            {[...Array(30)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 1600}
                cy={Math.random() * 800}
                r={Math.random() * 1 + 0.5}
                fill="white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5 + Math.random() * 3,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </motion.svg>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 via-yellow-300 to-purple-400 flex items-center justify-center shadow-lg">
                <span className="text-3xl">🟪</span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-dark-900 flex items-center justify-center shadow-lg border border-white/10">
                <span className="text-3xl">🐙</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Track everything
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
                with GitHub Sync.
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-2">
              Projects, tasks, milestones, cycles, and more.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2">
              <span>Press</span>
              <kbd className="px-2 py-0.5 bg-dark-800 border border-white/20 rounded text-base font-mono text-white">
                D
              </kbd>
              <span>anytime to get started</span>
            </div>
          </motion.div>
          {/* Glassmorphic GitHub Sync Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 flex flex-col gap-6 shadow-xl text-left mx-auto max-w-3xl mb-12"
          >
            <div className="font-semibold text-white text-lg mb-1 flex items-center gap-2">
              <span className="text-xl">🔗</span> GitHub Sync
            </div>
            <div className="text-gray-300 mb-4 text-sm">
              Live-sync with your GitHub issues, automatic branch management and
              more.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Left Issue Panel */}
              <div className="bg-dark-800/80 rounded-lg p-4 shadow-inner flex flex-col gap-2 border border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <img
                    src="https://randomuser.me/api/portraits/men/33.jpg"
                    alt="conrad"
                    className="w-6 h-6 rounded-full border border-white/10"
                  />
                  <span className="font-semibold text-white text-xs">
                    conrad
                  </span>
                  <span className="text-xs text-gray-400">
                    · 27 days ago · edited
                  </span>
                </div>
                <div className="text-xs text-gray-300 mb-1">
                  Describe the bug
                </div>
                <div className="text-xs text-gray-400 mb-1">
                  Just wanted to try fleet out, but getting an error even th...
                </div>
                <div className="bg-dark-900/80 rounded p-2 font-mono text-xs text-yellow-300 mb-1">
                  ⚡ Generate Fleet Config
                  <br />
                  Power is ready!
                  <br />
                  error: failed to run `rustc` to learn about target ...
                </div>
                <div className="text-xs text-gray-400">
                  To Reproduce
                  <br />
                  fleet build
                </div>
                <div className="text-xs text-gray-500">
                  OS: macOS 10.15
                  <br />
                  rustc: rustc 1.64.0-nightly (4d8cd03b0 2022-07-26)
                </div>
              </div>
              {/* Right Issue Panel */}
              <div className="bg-dark-800/80 rounded-lg p-4 shadow-inner flex flex-col gap-2 border border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <img
                    src="https://randomuser.me/api/portraits/men/34.jpg"
                    alt="supabase"
                    className="w-6 h-6 rounded-full border border-white/10"
                  />
                  <span className="font-semibold text-white text-xs">
                    supabase
                  </span>
                  <span className="text-xs text-gray-400">
                    · command3 · 4 hours ago
                  </span>
                </div>
                <div className="text-xs text-gray-300 mb-1">
                  Just wanted to try fleet build, but getting an error even
                  th...
                </div>
                <div className="bg-dark-900/80 rounded p-2 font-mono text-xs text-yellow-300 mb-1">
                  fleet build
                  <br />
                  OS: macOS 10.15
                  <br />
                  rustc: rustc 1.64.0-nightly (4d8cd03b0 2022-07-26)
                </div>
                <div className="text-xs text-purple-400">
                  Synchronized and seamless!
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Describe your comment..."
                className="flex-1 px-3 py-2 rounded-lg bg-dark-900/80 border border-white/10 text-white text-xs focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 text-white font-semibold shadow-lg hover:scale-105 transition">
                Submit
              </button>
            </div>
          </motion.div>
          {/* Roadmaps Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 flex flex-col gap-6 shadow-xl text-left mx-auto max-w-3xl mb-12"
          >
            <div className="font-semibold text-white text-lg mb-1 flex items-center gap-2">
              <span className="text-xl">🗺️</span> Roadmaps
            </div>
            <div className="text-gray-300 mb-4 text-sm">
              Plan, track, and launch your products.
            </div>
            {/* Timeline */}
            <div className="bg-dark-800/80 rounded-lg p-4 shadow-inner border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-xs text-gray-400">
                <span>August</span>
                <div className="flex-1 h-px bg-white/10 mx-2" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="bg-white/10 px-2 py-1 rounded text-xs text-white">
                    Beta Signup Page
                  </span>
                  <div className="flex-1 h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-white/10 px-2 py-1 rounded text-xs text-white">
                    Documentation and Support
                  </span>
                  <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-white/10 px-2 py-1 rounded text-xs text-white">
                    Updates & Bug Fixes
                  </span>
                  <div className="flex-1 h-1 bg-gradient-to-r from-green-400 to-yellow-400 rounded" />
                </div>
              </div>
            </div>
          </motion.div>
          {/* Cycles Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 flex flex-col gap-6 shadow-xl text-left mx-auto max-w-2xl"
          >
            <div className="font-semibold text-white text-lg mb-1 flex items-center gap-2">
              <span className="text-xl">⏳</span> Cycles
            </div>
            <div className="text-gray-300 mb-4 text-sm">
              Goal-focused efficiency for sustained productivity.
            </div>
            {/* Floating stack of cycle cards */}
            <div className="relative flex flex-col items-center justify-center h-52">
              {[2, 1, 0].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 * (2 - i) }}
                  whileInView={{ opacity: 0.3 + 0.35 * i, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className={`absolute left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-dark-900/80 border border-white/10 shadow-lg transition-all duration-300 ${
                    i === 2
                      ? "z-30 scale-105 opacity-100"
                      : i === 1
                      ? "z-20"
                      : "z-10"
                  }`}
                  style={{
                    filter: i === 2 ? "none" : "blur(3px)",
                    pointerEvents: i === 2 ? "auto" : "none",
                  }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
                    <span className="font-semibold text-white">Cycle 2</span>
                    <span className="ml-auto text-xs text-gray-400">
                      3 weekdays left
                    </span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 text-xs text-white">
                      Active
                    </span>
                  </div>
                  <div className="px-4 py-2 text-xs text-white/80">
                    <div className="flex justify-between mb-1">
                      <span>Scope</span>
                      <span>132 · +64%</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span>Started</span>
                      <span>82 · +88%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completed</span>
                      <span>48 · +44%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deployments Section */}
      <section className="py-20 px-4 bg-dark-900 relative overflow-hidden">
        {/* Subtle background dots */}
        <motion.svg
          className="absolute inset-0 w-full h-full z-0"
          style={{ pointerEvents: "none" }}
        >
          {[...Array(40)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1600}
              cy={Math.random() * 600}
              r={Math.random() * 1.5 + 1}
              fill="#7dd3fc"
              initial={{ opacity: 0, cy: Math.random() * 600 }}
              animate={{
                opacity: [0, 0.2, 0],
                cy: [
                  Math.random() * 600,
                  Math.random() * 600 + 30,
                  Math.random() * 600,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 8 + Math.random() * 4,
                delay: i * 0.12,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.svg>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 via-yellow-300 to-purple-400 flex items-center justify-center shadow-lg">
                <span className="text-3xl">☁️</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              All of your deployments
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
                in one place.
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-2">
              View, manage, and scale your cloud – all from Dimension.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2">
              <span>Press</span>
              <kbd className="px-2 py-0.5 bg-dark-800 border border-white/20 rounded text-base font-mono text-white">
                D
              </kbd>
              <span>anytime to get started</span>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Multi-cloud Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 flex flex-col gap-6 shadow-xl text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">☁️</span>
                <span className="font-semibold text-white text-lg">
                  Multi-cloud
                </span>
              </div>
              <div className="text-gray-300 mb-4">
                Deploy your codebase to a cloud provider of your choice.
              </div>
              <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs text-left text-gray-200 leading-relaxed shadow-inner mb-4">
                <pre className="whitespace-pre">
                  <code>{`1 const stage = document.querySelector('svg')
2 const hit = document.querySelector('di')
3 let mPos = {x:50, y:-50}
4 for (let x=1; x<10; x++)
5   for (let y=1; y<10; y++) makePt(x*10, y*10)
6 
7 function makePt(x,y){
8   const g = document.createElementNS('http://www.w3.org/2000/svg','g')
9   gsap.set(g, {x:x, y:y, attr:{class:'pt'}})
10  stage.append(g)
11 }
`}</code>
                </pre>
              </div>
              <div className="flex gap-3 mb-4">
                <button className="px-4 py-2 rounded-lg bg-dark-900 text-white border border-white/10 hover:bg-white/10 transition">
                  ☁️ Vercel
                </button>
                <button className="px-4 py-2 rounded-lg bg-dark-900 text-white border border-white/10 hover:bg-white/10 transition">
                  ☁️ Netlify
                </button>
                <button className="px-4 py-2 rounded-lg bg-dark-900 text-white border border-white/10 hover:bg-white/10 transition">
                  ☁️ Railway
                </button>
              </div>
              <div className="flex flex-col items-center">
                <button className="px-8 py-2 rounded-lg bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 text-white font-semibold shadow-lg hover:scale-105 transition">
                  Deploy
                </button>
              </div>
            </motion.div>
            {/* View/manage/edit deployments Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 flex flex-col gap-6 shadow-xl text-left relative overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🚀</span>
                <span className="font-semibold text-white text-lg">
                  View, manage, edit deployments
                </span>
              </div>
              <div className="text-gray-300 mb-4">
                Everything you need to scale your cloud.
              </div>
              {/* Dotted/line background */}
              <svg
                className="absolute inset-0 w-full h-full z-0"
                style={{ pointerEvents: "none" }}
              >
                {[...Array(8)].map((_, i) => (
                  <circle
                    key={i}
                    cx={Math.random() * 400 + 100}
                    cy={Math.random() * 300 + 50}
                    r={Math.random() * 2 + 1}
                    fill="#7dd3fc"
                    opacity="0.15"
                  />
                ))}
                {[...Array(4)].map((_, i) => (
                  <line
                    key={i}
                    x1={Math.random() * 400 + 100}
                    y1={Math.random() * 300 + 50}
                    x2={Math.random() * 400 + 100}
                    y2={Math.random() * 300 + 50}
                    stroke="#7dd3fc"
                    strokeWidth="1"
                    opacity="0.08"
                  />
                ))}
              </svg>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="bg-dark-900/80 rounded-xl p-4 shadow flex flex-col gap-1 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🌐</span>
                    <span className="font-semibold text-white">Landing</span>
                    <span className="ml-auto text-xs text-gray-400">1</span>
                  </div>
                  <div className="text-xs text-gray-400">dimension.dev</div>
                  <div className="text-xs text-gray-500">5h ago via Vercel</div>
                </div>
                <div className="bg-dark-900/80 rounded-xl p-4 shadow flex flex-col gap-1 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">📄</span>
                    <span className="font-semibold text-white">
                      Documentation
                    </span>
                    <span className="ml-auto text-xs text-gray-400">2</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    docs.dimension.dev
                  </div>
                  <div className="text-xs text-gray-500">
                    2s ago via Netlify
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmaps Section */}
      <section className="py-20 px-4 bg-dark-900 relative overflow-hidden">
        {/* Animated Lines Background */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full z-0"
          style={{ pointerEvents: "none" }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1={0}
              y1={100 + i * 80}
              x2={1200}
              y2={100 + i * 80}
              stroke="#7dd3fc"
              strokeWidth={1.5}
              strokeDasharray="8 8"
              animate={{
                x1: [0, 100, 0],
                x2: [1200, 1100, 1200],
              }}
              transition={{
                repeat: Infinity,
                duration: 10 + i * 2,
                delay: i * 0.5,
                ease: "linear",
              }}
            />
          ))}
        </motion.svg>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Better <span className="gradient-text">Roadmaps</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Plan, track, and launch your products with animated milestones and
              cycles.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cycle 2",
                progress: 0.68,
                milestones: [0.2, 0.5, 0.68],
                status: "Active",
                color: "bg-blue-500",
                delay: 0,
              },
              {
                title: "Scope",
                progress: 0.44,
                milestones: [0.1, 0.3, 0.44],
                status: "Started",
                color: "bg-green-500",
                delay: 0.1,
              },
              {
                title: "Completed",
                progress: 0.88,
                milestones: [0.3, 0.6, 0.88],
                status: "Done",
                color: "bg-purple-500",
                delay: 0.2,
              },
            ].map((roadmap, i) => (
              <motion.div
                key={roadmap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: roadmap.delay }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 flex flex-col gap-4 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-lg">{roadmap.title}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${roadmap.color} text-white`}
                  >
                    {roadmap.status}
                  </span>
                </div>
                <div className="relative h-4 w-full bg-dark-800 rounded-full overflow-hidden">
                  {/* Shimmer effect */}
                  <div
                    className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                    style={{ backgroundSize: "200% 100%" }}
                  />
                  <motion.div
                    className={`absolute top-0 left-0 h-4 rounded-full ${roadmap.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${roadmap.progress * 100}%` }}
                    transition={{ duration: 1.2, delay: roadmap.delay + 0.2 }}
                    viewport={{ once: true }}
                  />
                  {roadmap.milestones.map((m, idx) => (
                    <motion.div
                      key={idx}
                      className={`absolute w-4 h-4 ${roadmap.color} rounded-full border-2 border-white shadow-lg animate-bounce-dot`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: roadmap.delay + 0.4 + idx * 0.2,
                      }}
                      viewport={{ once: true }}
                      style={{
                        left: `calc(${m * 100}% - 8px)`,
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>{Math.round(roadmap.progress * 100)}% Complete</span>
                  <span>{roadmap.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 z-0"
        >
          <div className="w-full h-full bg-gradient-to-br from-primary-600 via-purple-600 to-primary-400 animate-gradient-move blur-2xl opacity-70" />
        </motion.div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to join a new{" "}
              <span className="gradient-text">Dimension?</span>
            </h2>
            <p className="text-xl mb-8 text-white/90">
              The delightfully smart collaboration platform. Get started - for
              free.
            </p>
            <div className="relative inline-block">
              {/* Rotating SVG lines */}
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <g className="animate-spin-slow origin-center">
                  <ellipse
                    cx="60"
                    cy="60"
                    rx="54"
                    ry="24"
                    stroke="#7dd3fc"
                    strokeWidth="2"
                    fill="none"
                  />
                </g>
                <g className="animate-spin-reverse origin-center">
                  <ellipse
                    cx="60"
                    cy="60"
                    rx="40"
                    ry="16"
                    stroke="#a78bfa"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>
              </svg>
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 32px 8px rgba(59,130,246,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  y: [0, -8, 0],
                  boxShadow: [
                    "0 0 24px 4px rgba(59,130,246,0.15)",
                    "0 0 32px 8px rgba(168,85,247,0.25)",
                    "0 0 24px 4px rgba(59,130,246,0.15)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="relative z-20 px-10 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-primary-500 via-purple-500 to-primary-400 text-white shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Join waitlist
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg" />
                <span className="text-xl font-bold">Dimension</span>
              </div>
              <p className="text-gray-400">
                The delightfully smart collaboration platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" /> Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Twitter className="w-4 h-4" /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Realm Software Inc. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
