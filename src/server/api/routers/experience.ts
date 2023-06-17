import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const experienceRouter = createTRPCRouter({
  getAll: publicProcedure.query( async ({ ctx }) => {
    const experiences = await ctx.prisma.experience.findMany({
      include: { stacks: true, media: true }
    })
    return experiences
  }),

  getOne: publicProcedure.input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;
      const experience = await ctx.prisma.experience.findUnique({
        where: { id },
        include: { stacks: true, media: true }
      });
      if (!experience) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No experience with id '${id}'`,
        });
      }
      return experience;
    }),
});
