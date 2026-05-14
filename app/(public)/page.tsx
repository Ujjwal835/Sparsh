// import Features from "@/components/public/Features";
// import Footer from "@/components/public/Footer";
// import Hero from "@/components/public/Hero";
// import Navbar from "@/components/public/Navbar";
// import InfiniteMovingCards from "@/components/ui/InfiniteMovingCards";

// const footwears = [
//   {
//     title: "Traditional Juti",
//     src: "/jutiyan/first.png",
//   },
//   {
//     title: "Traditional Juti2",
//     src: "/jutiyan/first.png",
//   },
//   {
//     title: "Traditional Juti3",
//     src: "/jutiyan/first.png",
//   },
//   {
//     title: "Traditional Juti4",
//     src: "/jutiyan/first.png",
//   },
//   {
//     title: "Traditional Juti5",
//     src: "/jutiyan/first.png",
//   },
// ];

// export default function Page() {
//   return (
//     <main className="bg-white min-h-screen">
//       <Navbar />
//       <Hero />
//       <div className=" rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] bg-[linear-gradient(120deg,#a25c3d,#a25c3d,#a25c3d)] items-center justify-center relative overflow-hidden">
//         <InfiniteMovingCards items={footwears} direction="right" speed="slow" />
//       </div>
//       <Features />
//       <Footer />
//     </main>
//   );
// }

import CollectionShowcase from "@/components/public/CollectionShowcase";
import CraftSection from "@/components/public/CraftSection";
import Footer from "@/components/public/Footer";
import Hero from "@/components/public/Hero";
import InstagramGallery from "@/components/public/InstagramGallery";
import Navbar from "@/components/public/Navbar";
// import InfiniteMovingCards from "@/components/ui/InfiniteMovingCards";

const footwears = [
  {
    title: "Traditional Juti",
    src: "/jutiyan/first.png",
  },
  {
    title: "Traditional Juti2",
    src: "/jutiyan/first.png",
  },
  {
    title: "Traditional Juti3",
    src: "/jutiyan/first.png",
  },
  {
    title: "Traditional Juti4",
    src: "/jutiyan/first.png",
  },
  {
    title: "Traditional Juti5",
    src: "/jutiyan/first.png",
  },
];

export default function Page() {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-hidden">
      <Navbar />
      <Hero />
      {/* <LuxuryStatement /> */}
      {/* <CollectionShowcase /> */}
      <CollectionShowcase footwears={footwears} />
      <CraftSection />
      <InstagramGallery />
      <Footer />
    </main>
  );
}
