import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    include: { variants: true },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">SPARSH Store</h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {products.map((p) => (
          <div key={p.id} className="border p-4">
            <img src={p.images[0]} alt="" />
            <h2>{p.name}</h2>
            <p>{p.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
