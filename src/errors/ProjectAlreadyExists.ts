import CustomError from "./CustomError";

export default class ProjectAlreadyExists extends CustomError {
  constructor() {
    super({
      message: "PROJECT NAME ALREADY EXISTS!",
      statusCode: 400,
    });
  }
}
