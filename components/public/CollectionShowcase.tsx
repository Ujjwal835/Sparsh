import { Truck, ShieldCheck, BadgeCheck } from "lucide-react";
import InfiniteMovingCards from "../ui/InfiniteMovingCards";

export default function CollectionShowcase({ footwears }) {
  return (
    // <div className="bg-white py-6 border-t flex justify-around text-center text-sm">
    //   <div className="flex flex-col items-center gap-2">
    //     <Truck size={20} />
    //     <p className="font-medium">Free Shipping</p>
    //     <span className="text-gray-500 text-xs">On all orders</span>
    //   </div>

    //   <div className="flex flex-col items-center gap-2">
    //     <ShieldCheck size={20} />
    //     <p className="font-medium">Secure Payment</p>
    //     <span className="text-gray-500 text-xs">100% secure checkout</span>
    //   </div>

    //   <div className="flex flex-col items-center gap-2">
    //     <BadgeCheck size={20} />
    //     <p className="font-medium">Premium Quality</p>
    //     <span className="text-gray-500 text-xs">Crafted for comfort</span>
    //   </div>
    // </div>
    <section className="py-32 bg-[#0f0f0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
              Collections
            </p>

            <h2 className="text-6xl font-black mt-4 text-white">
              Featured Footwear
            </h2>
          </div>

          <button className="text-zinc-400 hover:text-white transition">
            View All
          </button>
        </div>
      </div>

      {/* Infinite Cards */}
      <InfiniteMovingCards items={footwears} direction="left" speed="slow" />
    </section>
  );
}
