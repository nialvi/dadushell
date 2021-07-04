import express from "express";
import { ApolloServer } from "apollo-server-express";
import { PrismaClient } from "@prisma/client";
import schema from "./schema";

const prisma = new PrismaClient();

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });

  apolloServer.applyMiddleware({ app });

  app.get("/", (_, res) => {
    res.send("hello world!");
  });

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);
  });
};

main().catch((e) => console.log(e));
