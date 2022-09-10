// import CustomApiError from '../errors/CustomApiError.js';
import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, resp, next) => {

  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later',
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered ${Object.keys(err.keyValue)  } field, please enter original value`;
    customError.statusCode = 400;
  }

  if (err.name === 'CustError') {
    customError.msg = `No item find with id ${err.value}`;
    customError.statusCode = 404;
  }

  return resp.status(customError.statusCode).json({ msg: customError.msg });
}

export default errorHandlerMiddleware;
