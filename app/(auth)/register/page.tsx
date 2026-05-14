"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  ArrowRight,
  LockKeyhole,
  Mail,
  Phone,
  Sparkles,
  User2,
  ShieldCheck,
} from "lucide-react";

// ============================
// Zod Schema
// ============================

const registerSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name is required",
    }),

    email: z.email({
      message: "Invalid email",
    }),

    phone: z.string().regex(/^[6-9]\d{9}$/, {
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

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setLoading(true);
    setServerError("");

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();

    setLoading(false);

    if (!res.ok) {
      setServerError(result.error || "Something went wrong");
      return;
    }

    router.push("/login");
  };

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#020617]">
      {/* ================================= */}
      {/* BACKGROUND */}
      {/* ================================= */}

      <div className="absolute inset-0 bg-[#020617]" />

      {/* Gradient Orbs */}
      <div className="absolute -top-40 left-[-120px] h-[550px] w-[550px] rounded-full bg-fuchsia-600/20 blur-3xl" />

      <div className="absolute bottom-[-180px] right-[-100px] h-[550px] w-[550px] rounded-full bg-cyan-600/20 blur-3xl" />

      <div className="absolute top-1/3 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* ================================= */}
      {/* LEFT SECTION */}
      {/* ================================= */}

      <div className="relative z-10 hidden w-1/2 flex-col justify-center px-20 lg:flex">
        <div className="max-w-xl">
          {/* Heading */}
          <h1 className="text-6xl font-black leading-tight text-white">
            Define Your
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {" "}
              Style
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Discover premium footwear crafted for comfort, elegance, and
            everyday confidence.
          </p>

          {/* Stats */}
          <div className="mt-10 flex items-center gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white">10K+</h2>
              <p className="text-zinc-500">Businesses Connected</p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <h2 className="text-3xl font-bold text-white">256-bit</h2>
              <p className="text-zinc-500">Security Encryption</p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <h2 className="text-3xl font-bold text-white">AI</h2>
              <p className="text-zinc-500">Driven Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* RIGHT SECTION */}
      {/* ================================= */}

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-2">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
            {/* Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10" />

            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10" />

            {/* Content */}
            <div className="relative z-10">
              {/* Logo */}
              <div className="mb-4 flex justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-linear-to-br from-fuchsia-500 via-violet-500 to-cyan-500 shadow-2xl shadow-fuchsia-500/30">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Heading */}
              <div className="text-center">
                <h1 className="text-4xl font-black text-white">
                  Create Account
                </h1>

                <p className="mt-3 text-zinc-400">
                  Begin your premium SPARSH experience
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 focus-within:border-fuchsia-500/50 focus-within:bg-white/10">
                    <User2 className="h-5 w-5 text-zinc-500 group-focus-within:text-fuchsia-400" />

                    <input
                      placeholder="Full Name"
                      {...register("name")}
                      className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
                    />
                  </div>

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 focus-within:border-cyan-500/50 focus-within:bg-white/10">
                    <Mail className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-400" />

                    <input
                      type="email"
                      placeholder="Email Address"
                      {...register("email")}
                      className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 focus-within:border-violet-500/50 focus-within:bg-white/10">
                    <Phone className="h-5 w-5 text-zinc-500 group-focus-within:text-violet-400" />

                    <input
                      placeholder="Phone Number"
                      {...register("phone")}
                      className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
                    />
                  </div>

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 focus-within:border-fuchsia-500/50 focus-within:bg-white/10">
                    <LockKeyhole className="h-5 w-5 text-zinc-500 group-focus-within:text-fuchsia-400" />

                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                      className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
                    />
                  </div>

                  {errors.password && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 focus-within:border-cyan-500/50 focus-within:bg-white/10">
                    <ShieldCheck className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-400" />

                    <input
                      type="password"
                      placeholder="Confirm Password"
                      {...register("confirmPassword")}
                      className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
                    />
                  </div>

                  {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Server Error */}
                {serverError && (
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                    {serverError}
                  </div>
                )}

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-fuchsia-500 via-violet-500 to-cyan-500 px-5 py-4 font-semibold text-white shadow-2xl shadow-fuchsia-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]"
                >
                  <span>
                    {loading ? "Creating account..." : "Create Premium Account"}
                  </span>

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              {/* Footer */}
              <p className="mt-8 text-center text-sm text-zinc-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-semibold text-fuchsia-400 transition hover:text-fuchsia-300"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
