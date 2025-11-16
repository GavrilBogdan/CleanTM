import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req) {
  try {
    const { itemId } = await req.json();

    if (!itemId) {
      return NextResponse.json(
        { error: "No itemId provided" },
        { status: 400 }
      );
    }

    // Get token from cookies
    const cookieHeader = req.headers.get("cookie") || "";
    const tokenMatch = cookieHeader.match(/token=([^;]+)/);
    if (!tokenMatch) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const decoded = jwt.verify(tokenMatch[1], JWT_SECRET);
    const userId = decoded.userId;

    // Fetch user and item from DB
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const item = await prisma.item.findUnique({ where: { id: itemId } });

    if (!user || !item) {
      return NextResponse.json(
        { error: "User or item not found" },
        { status: 404 }
      );
    }

    const userPoints = Number(user.points || 0);
    const itemPrice = Number(item.price || 0);

    // Check affordability
    if (userPoints < itemPrice) {
      return NextResponse.json({ error: "Not enough points" }, { status: 400 });
    }

    // Deduct points
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { points: { decrement: itemPrice } },
    });

    // Record purchase
    await prisma.purchase.create({
      data: { userId, itemId },
    });

    return NextResponse.json({
      success: true,
      pointsLeft: Number(updatedUser.points),
    });
  } catch (err) {
    console.error("Error in buyItem:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
