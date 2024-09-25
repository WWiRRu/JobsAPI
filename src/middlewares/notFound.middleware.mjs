import { StatusCodes } from "http-status-codes";

export const notFound = (_req, res) => res.status(StatusCodes.NOT_FOUND).json({ message: "The selected route was not found." });