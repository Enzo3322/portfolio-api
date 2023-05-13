import CustomError from "./CustomError";

export default class ProjectNotExists extends CustomError {
  constructor() {
    super({
      message: "PROJECT NOT EXISTS!",
      statusCode: 400,
    });
  }
}
