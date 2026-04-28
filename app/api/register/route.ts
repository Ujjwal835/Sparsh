import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ Zod Schema (same as frontend)
const registerSchema = z
  .object({
    name: z.string().min(2, { message: "Name is required" }),

    email: z.email({ message: "Invalid email" }),

    phone: z
      .string()
      .regex(/^[6-9]\d{9}$/, {
        message: "Enter valid 10-digit Indian phone number",
      }),

    password: z.string().min(6, {
      message: "Minimum 6 characters",
    }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Validate input
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, password } = parsed.data;

    // ✅ Check existing user
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user (FORCE SAFE VALUES)
    await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role: "CUSTOMER",           // 🔒 never trust client
        provider: "credentials",   // track auth type
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
