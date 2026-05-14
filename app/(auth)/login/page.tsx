"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ArrowRight, LockKeyhole, Mail, Sparkles } from "lucide-react";

// ============================
// Schema
// ============================

const loginSchema = z.object({
  email: z.email({ message: "Invalid email" }),
  password: z.string().min(6, "Minimum 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    setAuthError("");

    const res = await signIn("credentials", {
      ...data,
      redirect: false,
      callbackUrl,
    });

    setLoading(false);

    if (res?.error) {
      setAuthError("Invalid email or password");
    } else {
      router.push(callbackUrl);
    }
  };

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#020617]">
      {/* ========================= */}
      {/* BACKGROUND */}
      {/* ========================= */}

      <div className="absolute inset-0 bg-[#020617]" />

      {/* Gradient Blobs */}
      <div className="absolute -top-32 left-[-100px] h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-600/20 blur-3xl" />

      <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* ========================= */}
      {/* LEFT SIDE */}
      {/* ========================= */}

      <div className="relative z-10 hidden w-1/2 flex-col justify-center px-20 lg:flex">
        <div className="max-w-xl">
          <h1 className="text-6xl font-black leading-tight text-white">
            Welcome to
            <span className="bg-linear-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              SPARSH
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Experience a premium and luxury footwear.
          </p>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white">500+</h2>
              <p className="text-zinc-500">Premium Designs</p>
            </div>
            <div className="h-12 w-px bg-white/10" />

            <div>
              <h2 className="text-3xl font-bold text-white">10K+</h2>
              <p className="text-zinc-500">Happy Customers</p>
            </div>
            <div className="h-12 w-px bg-white/10" />

            <div>
              <h2 className="text-3xl font-bold text-white">24/7</h2>
              <p className="text-zinc-500">Fast Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================= */}
      {/* RIGHT SIDE */}
      {/* ========================= */}

      <div className="relative z-10 flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Glass Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
            {/* Card Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10" />

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-white/10" />

            {/* Content */}
            <div className="relative z-10">
              {/* Logo */}
              <div className="mb-8 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-fuchsia-500 via-violet-500 to-cyan-500 shadow-2xl shadow-fuchsia-500/30">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
              </div>

              {/* Heading */}
              <div className="text-center">
                <h1 className="text-4xl font-black text-white">Welcome Back</h1>

                <p className="mt-3 text-zinc-400">
                  Login to continue your journey with SPARSH
                </p>
              </div>

              {/* Google Login */}
              <button
                onClick={() => signIn("google", { callbackUrl })}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/10"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="h-5 w-5"
                />

                <span className="font-medium">Continue with Google</span>
              </button>

              {/* Divider */}
              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-sm text-zinc-500">
                  OR CONTINUE WITH EMAIL
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email */}
                <div>
                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 focus-within:border-fuchsia-500/50 focus-within:bg-white/10">
                    <Mail className="h-5 w-5 text-zinc-500 group-focus-within:text-fuchsia-400" />

                    <input
                      type="email"
                      placeholder="Enter your email"
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

                {/* Password */}
                <div>
                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 focus-within:border-cyan-500/50 focus-within:bg-white/10">
                    <LockKeyhole className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-400" />

                    <input
                      type="password"
                      placeholder="Enter your password"
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

                {/* Error */}
                {authError && (
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                    {authError}
                  </div>
                )}

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-fuchsia-500 via-violet-500 to-cyan-500 px-5 py-4 font-semibold text-white shadow-2xl shadow-fuchsia-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]"
                >
                  <span>
                    {loading ? "Logging in..." : "Login to Dashboard"}
                  </span>

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              {/* Footer */}
              <p className="mt-8 text-center text-sm text-zinc-400">
                Don&apos;t have an account?{" "}
                <a
                  href="/register"
                  className="font-semibold text-fuchsia-400 transition hover:text-fuchsia-300"
                >
                  Create Account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
