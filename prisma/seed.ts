import { PrismaClient } from "@prisma/client";
// npx ts-node prisma/seed.ts   

const prisma = new PrismaClient();

async function main() {
  await prisma.product.create({
    data: {
      name: "Nike Air Max",
      brand: "Nike",
      images: ["https://via.placeholder.com/300"],
      variants: {
        create: [
          {
            size: 8,
            color: "Black",
            price: 4999,
            stock: 10,
            sku: "NAM-BLK-8",
          },
          {
            size: 9,
            color: "Black",
            price: 4999,
            stock: 15,
            sku: "NAM-BLK-9",
          },
        ],
      },
    },
  });
}

main();