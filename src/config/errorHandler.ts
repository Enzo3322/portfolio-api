import type { FastifyInstance } from "fastify";

const configureErrorHandler = (fastify: FastifyInstance) => {
  const defaultErrorHandler = fastify.errorHandler;

  fastify.setErrorHandler(async function errorHandler(error, request, reply) {
    if (error.validation) {
      const { message, statusCode, validation } = error;
      const errorDetails = {
        type: "invalid-request-body",
        title: "Request body is not in the required format",
        status: statusCode,
        detail: message,
        validation,
      };

      reply.status(statusCode ?? 500).send(errorDetails);
      return;
    }
    defaultErrorHandler(error, request, reply);
  });
};

export { configureErrorHandler };
