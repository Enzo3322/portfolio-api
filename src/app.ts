import sensible from "@fastify/sensible";
import cookie, { FastifyCookieOptions } from "@fastify/cookie";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";
import loadConfig from "./config";
import projectsRouter from "./routes/projects.router";
import { configureErrorHandler } from "./config/errorHandler";

export type AppOptions = {} & Partial<AutoloadPluginOptions>;

const options: AppOptions = {
  options: {
    cors,
  },
};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  loadConfig();
  configureErrorHandler(fastify);
  void fastify.register(cors, {
    origin: ["localhost"],
  });

  fastify.register(cookie, {
    parseOptions: {},
  } as FastifyCookieOptions);

  fastify.register(sensible);

  fastify.register(helmet);

  fastify.register(projectsRouter, { prefix: "/api/projects" });
};

export default app;
export { app, options };
