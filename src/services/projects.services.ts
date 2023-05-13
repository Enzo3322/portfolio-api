import { PrismaClient } from "@prisma/client";
import { ProjectsModel } from "../models/projects.model";
import { ProjectProps } from "../types/project";

export default class ProjectsService {
  async getProjectsById(id: number) {
    const prisma = new PrismaClient();
    const projectHandler = new ProjectsModel(prisma.projects);

    const projects = await projectHandler.getProjectById(id);

    return projects;
  }

  async getAllProjects() {
    const prisma = new PrismaClient();
    const projectHandler = new ProjectsModel(prisma.projects);

    const projects = await projectHandler.getAllProjects();

    return projects;
  }

  async updateProjectById(params: { id: number; data: ProjectProps }) {
    const prisma = new PrismaClient();
    const projectHandler = new ProjectsModel(prisma.projects);

    const projects = await projectHandler.updateProjectById(params);

    return projects;
  }

  async createProject(params: ProjectProps) {
    const prisma = new PrismaClient();
    const projectHandler = new ProjectsModel(prisma.projects);

    const projects = await projectHandler.createProject(params);

    return projects;
  }
}
