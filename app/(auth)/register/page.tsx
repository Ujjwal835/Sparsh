"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ✅ Zod Schema
const registerSchema = z
  .object({
    name: z.string().min(2, { message: "Name is required" }),

    email: z.email({ message: "Invalid email" }),

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

    // ✅ Redirect to login after success
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-5">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Create Account</h1>
          <p className="text-sm text-gray-500">Join Sparsh to continue</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Name */}
          <div>
            <input
              placeholder="Full Name"
              {...register("name")}
              className="w-full border rounded-lg px-3 py-2"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

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

          {/* Phone (optional) */}
          <div>
            <input
              placeholder="Phone (optional)"
              {...register("phone")}
              className="w-full border rounded-lg px-3 py-2"
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
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

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full border rounded-lg px-3 py-2"
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Server Error */}
          {serverError && (
            <p className="text-sm text-red-500 text-center">{serverError}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
