import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/index.js";

export const authMiddleware = (req, _res, next) => {
    const token = req.signedCookies.authToken || null;
    if(!token) throw new UnauthorizedError("No token provided.");
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decodedToken
        req.user = { id, username };
        next();
    }catch (error) {
        throw new UnauthorizedError("Invalid token.");
    }
}