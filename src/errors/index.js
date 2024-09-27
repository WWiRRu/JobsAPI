import {StatusCodes} from "http-status-codes";

// Custom error for unauthorized requests
export class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnauthorizedError";
        this.statusCode = StatusCodes.UNAUTHORIZED;
    };
}