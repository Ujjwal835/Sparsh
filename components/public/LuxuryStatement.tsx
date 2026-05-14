export default function LuxuryStatement() {
  return (
    <section className="relative py-40 bg-[#0A0A0A] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-6">
              Our Philosophy
            </p>

            <h2 className="text-6xl md:text-8xl font-black leading-[0.95]">
              Crafted To
              <span className="block text-violet-400">Define Elegance</span>
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="text-zinc-400 text-xl leading-10">
              Every pair at SPARSH is designed to blend traditional
              craftsmanship with modern elegance, delivering unmatched comfort,
              luxury, and timeless fashion.
            </p>

            <button className="mt-10 border border-white/10 bg-white/5 px-8 py-4 rounded-2xl hover:bg-white/10 transition">
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
