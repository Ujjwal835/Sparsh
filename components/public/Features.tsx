// import { Truck, ShieldCheck, BadgeCheck } from "lucide-react";

// export default function Features() {
//   return (
//     <div className="bg-white py-6 border-t flex justify-around text-center text-sm">
//       <div className="flex flex-col items-center gap-2">
//         <Truck size={20} />
//         <p>Free Shipping</p>
//       </div>

//       <div className="flex flex-col items-center gap-2">
//         <ShieldCheck size={20} />
//         <p>Secure Payment</p>
//       </div>

//       <div className="flex flex-col items-center gap-2">
//         <BadgeCheck size={20} />
//         <p>Premium Quality</p>
//       </div>
//     </div>
//   );
// }

import { Truck, ShieldCheck, BadgeCheck } from "lucide-react";

export default function Features() {
  return (
    <div className="bg-white py-6 border-t flex justify-around text-center text-sm">
      <div className="flex flex-col items-center gap-2">
        <Truck size={20} />
        <p className="font-medium">Free Shipping</p>
        <span className="text-gray-500 text-xs">On all orders</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <ShieldCheck size={20} />
        <p className="font-medium">Secure Payment</p>
        <span className="text-gray-500 text-xs">100% secure checkout</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <BadgeCheck size={20} />
        <p className="font-medium">Premium Quality</p>
        <span className="text-gray-500 text-xs">Crafted for comfort</span>
      </div>
    </div>
  );
}
