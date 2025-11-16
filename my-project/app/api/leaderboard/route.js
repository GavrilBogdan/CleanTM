import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        points: true,
        username: true,
        avatarUrl: true,
      },
      orderBy: { points: "desc" },
    });

    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    console.error("Leaderboard GET error:", err);
    return NextResponse.json(
      { error: "Failed to load leaderboard", users: [] },
      { status: 500 }
    );
  }
}
