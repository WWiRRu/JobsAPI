import { StatusCodes } from "http-status-codes";

const notFound = (_req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({ message: "The selected route was not found." });
}

export default notFound;