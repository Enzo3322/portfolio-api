import { FastifyReply, FastifyRequest } from "fastify";
import ProjectsService from "../services/projects.services";
import { ProjectProps } from "../types/project";
import ProjectAlreadyExists from "../errors/ProjectAlreadyExists";

export const getAllProjects = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const service = new ProjectsService();
  try {
    const data = await service.getAllProjects();
    return reply.code(200).send(data);
  } catch (err) {
    reply.code(500).send(err.message);
  }
};

export const getProjectsById = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const service = new ProjectsService();
  const { id } = request.params as { id: number };

  try {
    const data = await service.getProjectsById(+id);
    return reply.code(200).send(data);
  } catch (err) {
    reply.code(500).send(err.message);
  }
};

export const updateProjectById = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const service = new ProjectsService();
  const { id } = request.params as { id: number };
  const data = request.body as ProjectProps;
  try {
    const res = await service.updateProjectById({ id: +id, data });
    return reply.code(200).send(res);
  } catch (err) {
    reply.code(500).send(err.message);
  }
};

export const createProject = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const service = new ProjectsService();
  try {
    const project = request.body as ProjectProps;
    const data = await service.createProject(project);
    return reply.code(200).send(data);
  } catch (err) {
    if (err instanceof ProjectAlreadyExists) {
      reply.code(err.statusCode).send(err.message);
    }
    reply.code(500).send(err.message);
  }
};
