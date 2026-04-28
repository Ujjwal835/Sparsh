import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
//  npx ts-node -P tsconfig.scripts.json scripts/seedDeveloper.ts   

const prisma = new PrismaClient();

async function main() {
  const email = process.env.DEV_MAIL!;
  const password = process.env.DEV_PASSWORD!;
  const mobile = process.env.DEV_MOBILE!;
  const name = process.env.DEV_NAME!;

  const exists = await prisma.user.findUnique({ where: { email } });

  if (exists) return console.log("Already exists");

  await prisma.user.create({
    data: {
      name,
      phone:mobile,
      email,
      password: await bcrypt.hash(password, 10),
      role: "DEVELOPER",
      provider: "credentials",
      emailVerified: new Date(),
    },
  });

  console.log("Developer created");
}

main();
