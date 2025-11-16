import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function GET(req) {
  try {
    const cookieHeader = req.headers.get("cookie") || "";
    const tokenMatch = cookieHeader.match(/token=([^;]+)/);
    if (!tokenMatch) return NextResponse.json({ purchases: [] });

    const decoded = jwt.verify(tokenMatch[1], JWT_SECRET);
    const userId = decoded.userId;

    const purchases = await prisma.purchase.findMany({
      where: { userId },
      include: { item: true },
    });

    return NextResponse.json({ purchases });
  } catch (err) {
    console.error("Error fetching purchases:", err);
    return NextResponse.json({ purchases: [] });
  }
}
