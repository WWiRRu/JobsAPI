import {StatusCodes} from "http-status-codes";

// Middleware to handle errors in the application.
export const errorMiddlewares = (error, _req, res, _next) => {
    const customError = {
        message: error.message || "An error occurred.",
        statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    };
    if(error.code === 11000) {
        return res.status(StatusCodes.CONFLICT).json({message: "Email already exists."});
    }
    res.status(customError.statusCode).json({message: customError.message, statusCode: customError.statusCode});
};
