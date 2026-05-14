export default function CraftSection() {
  return (
    <section className="py-40 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-violet-500/10 blur-3xl rounded-full" />

            <img
              src="/jutiyan/first.png"
              className="relative z-10 rounded-[40px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
              Crafted With Passion
            </p>

            <h2 className="text-6xl font-black leading-tight mt-6">
              Tradition Meets
              <span className="block text-violet-400">Modern Luxury</span>
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-9">
              Our artisans carefully craft every pair using premium fabrics,
              intricate detailing, and comfort-focused construction to create
              footwear that feels luxurious in every step.
            </p>

            <button className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-semibold">
              Explore Craftsmanship
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
