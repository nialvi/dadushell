import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Pikachu",
      email: "pikachu@gmail.com",
      password: "secret",
      boards: {
        create: { name: "Games" },
      },
    },
  });

  await prisma.list.create({
    data: {
      name: "inprogress",
      order: 1,
      boardId: 1,
      card: {
        create: {
          name: "DOTA",
          genre: "moba",
          platform: "PC",
          releaseDate: new Date(2013, 6, 9),
        },
      },
    },
  });

  await prisma.list.create({
    data: {
      name: "done",
      order: 1,
      boardId: 1,
      card: {
        create: {
          name: "Half Life",
          genre: "FPS",
          platform: "PC",
          releaseDate: new Date(1998, 10, 19),
        },
      },
    },
  });

  await prisma.list.create({
    data: {
      name: "abandoned",
      order: 1,
      boardId: 1,
      card: {
        create: {
          name: "Apex Legends",
          genre: "FPS",
          platform: "PC",
          releaseDate: new Date(2019, 1, 4),
        },
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
