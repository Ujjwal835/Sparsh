"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

type CardItem = {
  title: string;
  src: string;
  price?: string;
};

type Props = {
  items: CardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export default function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: Props) {
  const duration =
    speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max gap-8 py-4",
          "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{
          animationDuration: duration,
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {/* ORIGINAL */}
        {items.map((item, i) => (
          <LuxuryCard key={`a-${i}`} item={item} />
        ))}

        {/* DUPLICATE */}
        {items.map((item, i) => (
          <LuxuryCard key={`b-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- */
/* LUXURY CARD */
/* -------------------------------- */

function LuxuryCard({ item }: { item: CardItem }) {
  return (
    <div className="group relative w-[340px] md:w-[380px] h-[520px] flex-shrink-0 overflow-hidden rounded-[40px] bg-[#151515] border border-white/5">
      {/* Glow */}
      <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/5 transition duration-700" />

      {/* Premium Badge */}
      <div className="absolute top-6 left-6 z-20">
        <span className="bg-black/40 backdrop-blur-2xl border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] text-white">
          Premium
        </span>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

      {/* Image */}
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 z-20 p-8 w-full">
        <h3 className="text-3xl font-black text-white">{item.title}</h3>

        <p className="text-zinc-400 mt-2 leading-7">
          Handcrafted luxury footwear designed for elegance and comfort.
        </p>

        <div className="flex items-center justify-between mt-8">
          <div>
            <p className="text-zinc-500 text-sm">Starting From</p>

            <h4 className="text-3xl font-black text-white">
              {item.price || "₹2,499"}
            </h4>
          </div>

          <button className="bg-white text-black px-5 py-3 rounded-2xl text-sm font-semibold hover:scale-105 transition">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
}
