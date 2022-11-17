import { Request, Response } from "express";
import listUserService from "../services/listUsers.Service";

const listUsersController = async (req: Request, res: Response) => {
  try {
    const users = await listUserService();
    return res.status(200).json(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default listUsersController;
