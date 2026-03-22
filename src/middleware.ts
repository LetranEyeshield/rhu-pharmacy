// // middleware.ts
// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(req: NextRequest) {
//   const token = await getToken({
//     req,
//     secret: process.env.NEXTAUTH_SECRET,
//   });

//   const isProtectedRoute = req.nextUrl.pathname.startsWith("/");

//   if (!token && isProtectedRoute) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/:path*"],
// };

// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  if (
    (!token && pathname === "/") ||
    (!token && pathname === "/vitamins") ||
    (!token && pathname === "/maintenance") ||
    (!token && pathname === "/patientForm") ||
    (!token && pathname === "/maintenanceForm") ||
    (!token && pathname === "/vitaminsForm")
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // if (token && pathname === "/") {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/maintenance/:path*",
    "/vitamins/:path*",
    "/patientForm",
    "/maintenanceForm",
    "/vitaminsForm",
  ],
};
//NEW CODE
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
//   const token = await getToken({
//     req,
//     secret: process.env.NEXTAUTH_SECRET,
//   });

//   const { pathname } = req.nextUrl;

//   const isProtected =
//     pathname.startsWith("/") ||
//     pathname.startsWith("/maintenance") ||
//     pathname.startsWith("/vitamins");

//   if (!token && isProtected) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   if (!token && req.nextUrl.pathname.startsWith("/")) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/:path*", "/vitamins/:path*", "/maintenance/:path*"],
// };
