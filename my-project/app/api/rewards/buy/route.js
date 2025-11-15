import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req) {
  try {
    const { itemId } = await req.json();

    const ITEMS = {
      1: 50,
      2: 200,
      3: 120,
    };

    const cost = ITEMS[itemId];
    if (!cost) {
      return NextResponse.json({ error: "Invalid item" }, { status: 400 });
    }

    // Read token from cookies
    const cookie = req.headers.get("cookie") || "";
    const tokenMatch = cookie.match(/token=([^;]+)/);
    if (!tokenMatch)
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

    const decoded = jwt.verify(tokenMatch[1], JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    if (user.points < cost)
      return NextResponse.json({ error: "Not enough points" }, { status: 403 });

    // Deduct points
    const updated = await prisma.user.update({
      where: { id: user.id },
      data: { points: user.points - cost },
    });

    return NextResponse.json({
      success: true,
      points: updated.points,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
