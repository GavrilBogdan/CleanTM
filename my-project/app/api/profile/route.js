import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Get userId from JWT cookie
function getUserIdFromRequest(req) {
  try {
    const cookieHeader = req.headers.get("cookie") || "";
    const match = cookieHeader.match(/token=([^;]+)/);
    if (!match) return null;

    const token = match[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    return decoded.userId;
  } catch (err) {
    console.error("getUserIdFromRequest error", err);
    return null;
  }
}

// GET /api/profile  → return current user profile
export async function GET(req) {
  const userId = getUserIdFromRequest(req);
  if (!userId) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      points: true,
      username: true,
      avatarUrl: true,
    },
  });

  if (!user) {
    return NextResponse.json({ user: null }, { status: 404 });
  }

  return NextResponse.json({ user });
}

// PUT /api/profile  → update username / avatarUrl
export async function PUT(req) {
  try {
    const userId = getUserIdFromRequest(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { username, avatarUrl } = body;

    const updated = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(username !== undefined ? { username } : {}),
        ...(avatarUrl !== undefined ? { avatarUrl } : {}),
      },
      select: {
        id: true,
        email: true,
        points: true,
        username: true,
        avatarUrl: true,
      },
    });

    return NextResponse.json({ user: updated });
  } catch (err) {
    console.error("PUT /api/profile error", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
