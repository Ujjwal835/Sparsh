"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ✅ Schema
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
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-neutral-100 to-neutral-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-5">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Login to Sparsh</h1>
        </div>

        <button
          onClick={() => signIn("google", { callbackUrl })}
          className="w-full border rounded-lg py-2 hover:bg-gray-50"
        >
          Continue with Google
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full border rounded-lg px-3 py-2"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full border rounded-lg px-3 py-2"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Auth error */}
          {authError && (
            <p className="text-sm text-red-500 text-center">{authError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <a href="/register" className="font-medium">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
