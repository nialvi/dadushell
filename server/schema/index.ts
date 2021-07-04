import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import path from "path";

import { User } from "./user";
import { Query } from "./query";

const schema = makeSchema({
  types: [Query, User],
  sourceTypes: {
    modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
  },
  outputs: {
    typegen: path.join(
      __dirname,
      "../node_modules/@types/nexus-typegen/index.d.ts"
    ),
    schema: path.join(__dirname, "../api.graphql"),
  },
  plugins: [nexusPrisma()],
  // contextType: {
  //   module: path.join(__dirname, "..", "context.ts"),
  //   export: "Context",
  // },
});

export default schema;
