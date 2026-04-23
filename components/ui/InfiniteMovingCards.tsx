"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

type CardItem = {
  title: string;
  src: string;
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
        "relative overflow-hidden max-w-7xl",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max gap-4",
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
          <Card key={`a-${i}`} item={item} />
        ))}

        {/* DUPLICATE (required for seamless loop) */}
        {items.map((item, i) => (
          <Card key={`b-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- CARD ---------------- */

function Card({ item }: { item: CardItem }) {
  return (
    <div className="w-[350px] md:w-[300px] flex-shrink-0 rounded-2xl bg-transparent shadow-md border border-gray-200">
      <div className="relative h-[200px] w-full">
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-contain rounded-2xl"
        />
      </div>
    </div>
  );
}
