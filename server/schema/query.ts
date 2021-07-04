import { nullable, queryType, stringArg } from "nexus";

export const Query = queryType({
  definition(t) {
    t.string("hello", {
      resolve() {
        return "hello";
      },
    });

    t.list.field("users", {
      type: "User",
      args: {
        world: nullable(stringArg()),
      },
      resolve(_root, _args, ctx) {
        return ctx.prisma.user.findMany();
      },
    });
  },
});
