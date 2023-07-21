import { experienceRouter } from "~/server/api/routers/experience";
import { createTRPCRouter } from "~/server/api/trpc";
import { certificateRouter } from "./routers/certificate";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  experience: experienceRouter,
  certificate: certificateRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
