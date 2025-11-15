import { PrismaClient } from "@prisma/client";

// Create a single Prisma Client instance
const prisma = global.prisma || new PrismaClient();

// Prevent creating multiple instances during development (hot reloads)
if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
