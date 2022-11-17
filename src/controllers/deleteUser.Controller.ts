import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.Service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userDelete = await deleteUserService(id);
    return res.status(200).json({ message: userDelete });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default deleteUserController;
