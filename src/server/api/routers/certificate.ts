import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const certificateRouter = createTRPCRouter({
  getAll: publicProcedure.query( async ({ ctx }) => {
    const certificates = await ctx.prisma.certificates.findMany()
    return certificates
  }),

  getOne: publicProcedure.input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;
      const certificate = await ctx.prisma.certificates.findUnique({
        where: { id },
      });
      if (!certificate) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No experience with id '${id}'`,
        });
      }
      return certificate;
    }),
});
