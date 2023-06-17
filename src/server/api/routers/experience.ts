import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const experienceRouter = createTRPCRouter({
  getAll: publicProcedure.query( async ({ ctx }) => {
    const experience = await ctx.prisma.experience.findMany({
      include: { stacks: true, media: true }
    })
    return experience
  }),
});
