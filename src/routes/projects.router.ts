import { FastifyInstance } from "fastify";
import * as controllers from "../controllers";

async function projectsRouter(fastify: FastifyInstance) {
  fastify.get("/", {
    handler: controllers.getAllProjects,
  });

  fastify.get("/:id", {
    handler: controllers.getProjectsById,
  });

  fastify.patch("/:id", {
    handler: controllers.updateProjectById,
  });

  fastify.post("/", {
    handler: controllers.createProject,
  });
}

export default projectsRouter;
