// "use client";

// import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import Link from "next/link";
// import { useSession, signOut } from "next-auth/react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const { data: session, status } = useSession();
//   console.log("session", session);

//   return (
//     <>
//       {/* NAVBAR */}
//       <motion.nav
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
//       >
//         <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-white/40 via-white/10 to-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
//           {/* sparkle */}
//           <div className="absolute -top-1 right-10 w-2 h-2 bg-white rounded-full blur-sm opacity-80" />

//           {/* top highlight */}
//           <div className="absolute inset-0 rounded-2xl pointer-events-none">
//             <div className="absolute top-0 left-0 w-full h-[1px] bg-white/60 opacity-70" />
//           </div>

//           <div className="rounded-2xl bg-white/20 backdrop-blur-xl px-4 md:px-6 py-3 flex items-center justify-between">
//             {/* LEFT */}
//             <div className="flex items-center gap-4 text-gray-800">
//               {/* MOBILE MENU BUTTON */}
//               <button onClick={() => setOpen(true)} className="md:hidden">
//                 <Menu className="w-6 h-6" />
//               </button>

//               {/* DESKTOP MENU */}
//               <div className="hidden md:flex gap-6 text-sm">
//                 <span>Men</span>
//                 <span>Women</span>
//                 <span>Kids</span>
//                 <span>Collections</span>
//                 <span>Offers</span>
//               </div>
//             </div>

//             {/* CENTER */}
//             <h1
//               className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-4xl font-semibold"
//               style={{ fontFamily: "var(--font-playfair)" }}
//             >
//               Sparsh
//             </h1>

//             {/* RIGHT */}
//             <div className="flex items-center gap-3 md:gap-4">
//               <Search className="w-5 h-5" />
//               <ShoppingBag className="w-5 h-5" />

//               {/* <Link
//                 href={"login"}
//                 className="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm"
//               >
//                 <User size={16} />
//                 Login
//               </Link> */}
//               {status === "authenticated" ? (
//                 <div className="relative group hidden md:block">
//                   <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm">
//                     <User size={16} />
//                     {session.user?.name}
//                   </button>

//                   {/* DROPDOWN */}
//                   <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl opacity-0 group-hover:opacity-100 transition p-2">
//                     <button
//                       onClick={() => signOut()}
//                       className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href="/login"
//                   className="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm"
//                 >
//                   <User size={16} />
//                   Login
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* MOBILE MENU OVERLAY */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-[60] bg-white flex flex-col p-6"
//           >
//             {/* CLOSE BUTTON */}
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-xl font-semibold">Menu</h2>
//               <button onClick={() => setOpen(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* MENU ITEMS */}
//             <div className="flex flex-col gap-6 text-lg">
//               <span>Men</span>
//               <span>Women</span>
//               <span>Kids</span>
//               <span>Collections</span>
//               <span>Offers</span>
//             </div>

//             {/* LOGIN BUTTON */}
//             {/* <Link
//               href={"login"}
//               className="mt-auto text-center bg-black text-white py-3 rounded-xl"
//             >
//               Login
//             </Link> */}
//             {status === "authenticated" ? (
//               <button
//                 onClick={() => signOut()}
//                 className="mt-auto text-center bg-black text-white py-3 rounded-xl"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 href="/login"
//                 className="mt-auto text-center bg-black text-white py-3 rounded-xl"
//               >
//                 Login
//               </Link>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import Link from "next/link";

import { useState } from "react";

import { useSession, signOut } from "next-auth/react";

import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();

  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Collections",
      href: "/collections",
    },
    {
      name: "New Arrivals",
      href: "/new-arrivals",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="backdrop-blur-2xl bg-black/30 border border-white/10 rounded-3xl px-6 py-4 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/">
              <div>
                <h1 className="text-2xl font-black tracking-tight text-white">
                  SPARSH
                </h1>

                <p className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
                  Luxury Footwear
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-sm text-white">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:text-violet-400 transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex items-center gap-5 text-white">
              <button className="hover:text-violet-400 transition">
                <Search size={20} />
              </button>

              <button className="hover:text-violet-400 transition">
                <Heart size={20} />
              </button>

              <button className="hover:text-violet-400 transition relative">
                <ShoppingBag size={20} />

                {/* Cart Count */}
                <span className="absolute -top-2 -right-2 bg-violet-500 text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center">
                  2
                </span>
              </button>

              {session ? (
                <div className="flex items-center gap-4">
                  <Link
                    href="/profile"
                    className="hover:text-violet-400 transition"
                  >
                    <User size={20} />
                  </Link>

                  <button
                    onClick={() => signOut()}
                    className="bg-white text-black px-5 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="bg-white text-black px-5 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition"
                >
                  Login
                </Link>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden text-white"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-[100] transition ${
          mobileMenu
            ? "pointer-events-auto bg-black/60"
            : "pointer-events-none bg-transparent"
        }`}
      >
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[300px] bg-[#111111] border-l border-white/10 p-8 transition-transform duration-300 ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-black text-white">SPARSH</h2>

            <button onClick={() => setMobileMenu(false)} className="text-white">
              <X />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-8 text-white">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="text-lg hover:text-violet-400 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Bottom */}
          <div className="absolute bottom-10 left-8 right-8">
            {session ? (
              <button
                onClick={() => signOut()}
                className="w-full bg-white text-black py-4 rounded-2xl font-semibold"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
