import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

async function main() {
  const email = process.env.DEV_MAIL!;
  const password = process.env.DEV_PASSWORD!;

  const exists = await prisma.user.findUnique({ where: { email } });

  if (exists) return console.log("Already exists");

  await prisma.user.create({
    data: {
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
