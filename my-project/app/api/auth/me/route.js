import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function GET(req) {
  try {
    const cookieHeader = req.headers.get("cookie") || "";
    const tokenMatch = cookieHeader.match(/token=([^;]+)/);
    if (!tokenMatch) return NextResponse.json({ user: null });

    const token = tokenMatch[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    if (!user) return NextResponse.json({ user: null });

    return NextResponse.json({
      user: { id: user.id, email: user.email, points: user.points },
    });
  } catch (err) {
    return NextResponse.json({ user: null });
  }
}
