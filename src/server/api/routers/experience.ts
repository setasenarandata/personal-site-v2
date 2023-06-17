import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const experienceRouter = createTRPCRouter({
  getAll: publicProcedure.query( async ({ ctx }) => {
    const experience = await ctx.prisma.experience.findMany()
    return experience
  }),
  getWorks: publicProcedure.query( async ({ ctx }) => {
    const works = await ctx.prisma.experience.findMany({
      where: {
        type: "WORK"
      }
    })

    return works
  }),

  getProjects: publicProcedure.query( async ({ ctx }) => {
    const projects = await ctx.prisma.experience.findMany({
      where: {
        type: "PROJECT"
      }
    })

    return projects
  }),

  getOrganizations: publicProcedure.query( async ({ ctx }) => {
    const organizations = await ctx.prisma.experience.findMany({
      where: {
        type: "ORGANIZATION"
      }
    })

    return organizations
  }),
});
