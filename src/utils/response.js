class ResponseHandler {
  static success(reply, data, statusCode = 200) {
    return reply.code(statusCode).send({
      success: true,
      data,
    });
  }

  static created(reply, data) {
    return reply.code(201).send({
      success: true,
      data,
    });
  }

  static error(reply, message, statusCode = 500) {
    return reply.code(statusCode).send({
      success: false,
      error: message,
    });
  }
}

module.exports = ResponseHandler;
