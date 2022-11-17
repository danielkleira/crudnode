import { Request, Response } from "express";
import listByIdService from "../services/listUserById.Service";

const listUserByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await listByIdService(id);
    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default listUserByIdController;
