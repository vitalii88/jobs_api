import CustomApiError from '../errors/CustomApiError.js';
import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, resp, next) => {
  if (err instanceof CustomApiError) {
    return resp.status(err.statusCode).json({ msg: err.message });
  }

  return resp.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
}

export default errorHandlerMiddleware;
