import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { itemId, userId } = await req.json();

  // Fetch user & item
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const item = await prisma.item.findUnique({ where: { id: itemId } });

  if (!user || !item)
    return NextResponse.json(
      { error: "User or item not found" },
      { status: 404 }
    );
  if ((user.points || 0) < item.cost)
    return NextResponse.json({ error: "Not enough points" }, { status: 400 });

  // Deduct points & create purchase
  await prisma.user.update({
    where: { id: userId },
    data: { points: user.points - item.cost },
  });

  await prisma.purchase.create({
    data: { userId, itemId },
  });

  return NextResponse.json({
    success: true,
    pointsLeft: user.points - item.cost,
  });
}
