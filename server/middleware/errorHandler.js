import { CustomApiError } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (error, req, resp, next) => {
  if (error instanceof CustomApiError) {
    return resp.status(error.statusCode).json({ msg: error.message });
  }

  return resp.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
}

export default errorHandlerMiddleware;
