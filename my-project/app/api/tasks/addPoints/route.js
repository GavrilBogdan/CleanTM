import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function POST(req) {
  console.log("📥 /addPoints API CALLED");

  try {
    const body = await req.json();
    console.log("📦 Received body:", body);

    const { points } = body;

    // Check body
    if (!points) {
      console.log("❌ No points sent");
      return NextResponse.json(
        { error: "No points provided" },
        { status: 400 }
      );
    }

    // Read cookie
    const cookie = req.headers.get("cookie") || "";
    console.log("🍪 Cookie header:", cookie);

    const match = cookie.match(/token=([^;]+)/);
    if (!match) {
      console.log("❌ No token found in cookie");
      return NextResponse.json({ error: "No token" }, { status: 401 });
    }

    const token = match[1];
    console.log("🔑 Extracted token:", token);

    // Decode token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
      console.log("🧩 Decoded token:", decoded);
    } catch (err) {
      console.log("❌ Token verification failed:", err);
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Fetch user from DB
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    console.log("👤 Fetched user:", user);

    if (!user) {
      console.log("❌ User not found in database");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update points
    const updated = await prisma.user.update({
      where: { id: user.id },
      data: { points: user.points + points },
    });

    console.log("✅ Updated user:", updated);

    return NextResponse.json({
      user: { email: updated.email, points: updated.points },
    });
  } catch (err) {
    console.log("🔥 SERVER ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
