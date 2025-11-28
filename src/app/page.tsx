"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/guitar-background.png"
          alt="Background"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/40" />
      </div>

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full px-4 sm:px-6 lg:px-8 py-6"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="font-[var(--font-display)] text-xl sm:text-2xl tracking-wider text-white">
              Josh J. Carey Music
            </span>
                      </div>
        </motion.nav>

        {/* Hero Section */}
        <div className="flex-1 flex items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left: Text Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-[var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] text-white tracking-tight"
              >
                HOSH
                <br />
                <span className="text-[#ff4d00]">TUNES</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-[var(--font-mono)] text-white/60 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed"
              >
                Original music and lyrics written by Josh Carey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  className="bg-[#ff4d00] hover:bg-[#ff6b2c] text-black font-[var(--font-mono)]
                             text-sm tracking-wider px-8 h-12 rounded-full transition-all
                             hover:shadow-[0_0_30px_rgba(255,77,0,0.4)]"
                >
                  START LISTENING
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/5 hover:bg-white/10 font-[var(--font-mono)] text-sm tracking-wider
                             px-8 h-12 rounded-full text-white border-white/20 hover:border-white/30
                             backdrop-blur-sm transition-all"
                >
                  EXPLORE CATALOG
                </Button>
              </motion.div>
            </div>

            {/* Right: Now Playing Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=""
            >
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff4d00] to-[#ff6b2c]
                                  flex items-center justify-center">
                    <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] text-xl text-white tracking-wide">NOW PLAYING</h3>
                    <p className="font-[var(--font-mono)] text-white/50 text-sm">Acoustic Sessions</p>
                  </div>
                </div>

                {/* Waveform */}
                <div className="flex items-end justify-center gap-[3px] h-20">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const maxHeight = 50 + Math.cos(i * 0.3) * 30;
                    return (
                      <motion.div
                        key={i}
                        className="w-1 bg-gradient-to-t from-[#ff4d00] to-[#ff6b2c] rounded-full origin-bottom"
                        initial={{ scaleY: 0.4 }}
                        animate={{
                          scaleY: [0.4, 0.9, 0.4],
                        }}
                        style={{ height: `${maxHeight}%` }}
                        transition={{
                          duration: 2.5 + (i % 7) * 0.3,
                          repeat: Infinity,
                          delay: i * 0.08,
                          ease: "easeInOut",
                        }}
                      />
                    );
                  })}
                </div>

                {/* Track info */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-[var(--font-display)] text-lg text-white">Wonderful Tonight</span>
                    <span className="font-[var(--font-mono)] text-white/40 text-sm">3:42</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#ff4d00] to-[#ff6b2c] rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6 pt-2">
                  <button className="text-white/50 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                    </svg>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-[#ff4d00] flex items-center justify-center
                                     hover:bg-[#ff6b2c] transition-all hover:scale-105">
                    <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  <button className="text-white/50 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12"
        >
          <div className="text-center">
            <p className="font-[var(--font-mono)] text-white/50 text-sm tracking-widest uppercase">
              Music and lyrics coming soon
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
