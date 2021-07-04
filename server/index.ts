import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Pikachu",
      email: "pikachu@gmail.com",
      password: "secret",
      boards: {
        create: { name: "todos" },
      },
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    prisma.$disconnect();
  });
