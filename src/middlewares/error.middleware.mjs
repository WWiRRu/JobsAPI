import {StatusCodes} from "http-status-codes";

export const errorMiddlewares = (error, _req, res, _next) => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong.', error: error.stack });