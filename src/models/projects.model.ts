import { PrismaClient } from "@prisma/client";
import ProjectAlreadyExists from "../errors/ProjectAlreadyExists";
import { ProjectProps } from "../types/project";
import ProjectNotExists from "../errors/ProjectNotExists";

export class ProjectsModel {
  constructor(private readonly projectsModel: PrismaClient["projects"]) {}
  async createProject(params) {
    const alreadyExists = await this.projectsModel.findFirst({
      where: {
        name: params.name,
      },
    });

    if (alreadyExists) {
      throw new ProjectAlreadyExists();
    }

    return this.projectsModel.create({ data: params });
  }

  async getAllProjects() {
    return this.projectsModel.findMany();
  }

  async getProjectById(id: number) {
    return this.projectsModel.findUnique({
      where: {
        id: id,
      },
    });
  }

  async updateProjectById(params: { id: number; data: ProjectProps }) {
    const notExists = await this.projectsModel.findFirst({
      where: { id: params.id },
    });

    if (notExists) {
      throw new ProjectNotExists();
    }

    return this.projectsModel.update({
      where: {
        id: params.id,
      },
      data: params.data,
    });
  }
}
