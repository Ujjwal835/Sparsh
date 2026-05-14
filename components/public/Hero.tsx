// export default function Hero() {
//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(120deg,#f5f1eb,#e7dfd7,#d6cdc4)]" />

//       {/* Light beam */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-white/40 blur-3xl rounded-full" />

//       {/* Left blur plant */}
//       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-64 bg-green-200/30 blur-3xl rounded-full" />

//       {/* Bottom stage */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-[#e9e3dc] rounded-t-[100%]" />

//       {/* Content */}
//       <div className="relative z-10 text-center">
//         <p className="tracking-[0.4em] text-sm text-gray-600">
//           STEP INTO COMFORT
//         </p>

//         <h1
//           className="text-[100px] md:text-[150px] leading-none"
//           style={{ fontFamily: "var(--font-playfair)" }}
//         >
//           Sparsh
//         </h1>

//         <p className="mt-4 text-gray-600 tracking-widest">FOOTWEAR BY AASTHA</p>

//         <button className="mt-8 bg-black text-white px-8 py-3 rounded-xl">
//           Shop Now
//         </button>
//       </div>

//       {/* Shoes */}
//       {/* <img src="/juti1.png" className="absolute left-[-5%] bottom-0 w-[38%]" />
//       <img
//         src="/right-shoe.png"
//         className="absolute right-[-5%] bottom-0 w-[38%]"
//       /> */}
//       {/* products */}
//     </section>
//   );
// }

"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_40%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[0.4em] text-zinc-400 text-sm mb-6">
              Premium Handcrafted Footwear
            </p>

            <h1 className="text-[70px] md:text-[120px] leading-[0.9] font-black tracking-tight">
              Step Into
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white bg-clip-text text-transparent">
                Luxury
              </span>
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-xl leading-8">
              Crafted for elegance, comfort, and timeless fashion. Discover
              premium Punjabi jutis and footwear designed to elevate every step.
            </p>

            <div className="flex gap-5 mt-10">
              <button className="group bg-white text-black px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition">
                Shop Collection
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>

              <button className="border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl hover:bg-white/10 transition">
                Explore Lookbook
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute w-[500px] h-[500px] bg-violet-500/20 blur-3xl rounded-full" />

            {/* Shoe */}
            <img
              src="/jutiyan/first.png"
              className="relative z-10 w-[650px] object-contain rotate-[-18deg] drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] hover:scale-105 transition duration-700"
            />

            {/* Floating Card */}
            <div className="absolute bottom-0 left-120 z-20 animate-[float_5s_ease-in-out_infinite] backdrop-blur-3xl bg-black/30 border border-white/10 rounded-[28px] px-6 py-5 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              <p className="text-zinc-400 text-sm uppercase tracking-[0.25em]">
                Starting From
              </p>

              <div className="flex items-end gap-2 mt-2">
                <h3 className="text-4xl font-black text-white">₹1,999</h3>

                <span className="text-zinc-500 mb-1">only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
