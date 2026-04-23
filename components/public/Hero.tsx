export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#f5f1eb,#e7dfd7,#d6cdc4)]" />

      {/* Light beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-white/40 blur-3xl rounded-full" />

      {/* Left blur plant */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-64 bg-green-200/30 blur-3xl rounded-full" />

      {/* Bottom stage */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-[#e9e3dc] rounded-t-[100%]" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <p className="tracking-[0.4em] text-sm text-gray-600">
          STEP INTO COMFORT
        </p>

        <h1
          className="text-[100px] md:text-[150px] leading-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Sparsh
        </h1>

        <p className="mt-4 text-gray-600 tracking-widest">FOOTWEAR BY AASTHA</p>

        <button className="mt-8 bg-black text-white px-8 py-3 rounded-xl">
          Shop Now
        </button>
      </div>

      {/* Shoes */}
      {/* <img src="/juti1.png" className="absolute left-[-5%] bottom-0 w-[38%]" />
      <img
        src="/right-shoe.png"
        className="absolute right-[-5%] bottom-0 w-[38%]"
      /> */}
      {/* products */}
    </section>
  );
}
