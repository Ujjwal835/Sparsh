import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, email, phone, password } = await req.json();

  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    return Response.json({ error: "User exists" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      phone,
      password: hashed,
      role: "CUSTOMER", // 🔒 FORCE ROLE
      provider: "credentials",
    },
  });

  return Response.json({ success: true });
}
