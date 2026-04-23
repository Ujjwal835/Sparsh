"use client";

import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-white/40 via-white/10 to-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
          {/* sparkle */}
          <div className="absolute -top-1 right-10 w-2 h-2 bg-white rounded-full blur-sm opacity-80" />

          {/* top highlight */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/60 opacity-70" />
          </div>

          <div className="rounded-2xl bg-white/20 backdrop-blur-xl px-4 md:px-6 py-3 flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-4 text-gray-800">
              {/* MOBILE MENU BUTTON */}
              <button onClick={() => setOpen(true)} className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>

              {/* DESKTOP MENU */}
              <div className="hidden md:flex gap-6 text-sm">
                <span>Men</span>
                <span>Women</span>
                <span>Kids</span>
                <span>Collections</span>
                <span>Offers</span>
              </div>
            </div>

            {/* CENTER */}
            <h1
              className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-4xl font-semibold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Sparsh
            </h1>

            {/* RIGHT */}
            <div className="flex items-center gap-3 md:gap-4">
              <Search className="w-5 h-5" />
              <ShoppingBag className="w-5 h-5" />

              <button className="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm">
                <User size={16} />
                Login
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-6"
          >
            {/* CLOSE BUTTON */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button onClick={() => setOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-6 text-lg">
              <span>Men</span>
              <span>Women</span>
              <span>Kids</span>
              <span>Collections</span>
              <span>Offers</span>
            </div>

            {/* LOGIN BUTTON */}
            <button className="mt-auto bg-black text-white py-3 rounded-xl">
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
