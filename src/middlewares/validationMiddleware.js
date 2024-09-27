import { z } from 'zod';
import { StatusCodes } from "http-status-codes";

const validate = (schema) => {
    return (req, res, next) => {
        // Validate the request body against the schema
        try {
            req.body = schema.parse(req.body);
            next();
        }catch (error) {
            if (error instanceof z.ZodError) {
                res.status(StatusCodes.BAD_REQUEST).json({ errors: error.errors });
            }
            next(error);
        }
    };
};
export default validate;