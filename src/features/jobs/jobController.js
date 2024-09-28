import { StatusCodes } from "http-status-codes";

export const dashboard = async (req, res) => {
  res.status(StatusCodes.OK).json({message: "Welcome on the dashboard!"});
};
