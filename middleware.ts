import { getToken } from "next-auth/jwt";
import {NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/", "/login", "/register"];

export async function middleware(req:NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ Allow public routes without auth
  if (
    PUBLIC_ROUTES.includes(pathname) ||
    pathname.startsWith("/api/register") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  const token = await getToken({ req });
  // console.log("token",token);
  

  // 🔒 Require login for protected routes
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const role = token.role;

  // 🔐 Role-based access
  if (pathname.startsWith("/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/developer") && role !== "DEVELOPER") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/employee") && role !== "EMPLOYEE") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}