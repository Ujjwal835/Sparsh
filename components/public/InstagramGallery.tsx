export default function InstagramGallery() {
  const images = [
    "/instaGallery/second.jpg",
    "/instaGallery/third.jpg",
    "/instaGallery/fourth.jpg",
    "/instaGallery/fifth.jpg",
  ];

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
              Instagram
            </p>

            <h2 className="text-6xl font-black mt-4">Fashion In Motion</h2>
          </div>

          <p className="text-zinc-400">@sparshfootwear</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-[30px]">
              <img
                src={img}
                className="h-[350px] w-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
