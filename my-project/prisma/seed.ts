import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.item.createMany({
    data: [
      {
        name: "🌟 Magic Sword",
        description: "A sword that glows with magic. +10 Power",
        imageUrl: "/images/magic-sword.png",
        price: 50,
      },
      {
        name: "🛡️ Shield of Valor",
        description: "Protect yourself with this legendary shield.",
        imageUrl: "/images/shield.png",
        price: 40,
      },
      {
        name: "💎 Gem Pack",
        description: "Get 10 gems to unlock special rewards.",
        imageUrl: "/images/gems.png",
        price: 20,
      },
      {
        name: "🍎 Health Potion",
        description: "Restores health after a tough task.",
        imageUrl: "/images/health-potion.png",
        price: 10,
      },
    ],
  });

  console.log("Database seeded!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
