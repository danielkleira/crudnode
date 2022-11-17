import { Request, Response } from "express";
import { IUser, IUserCreate } from "../interfaces/user";
import updateUserService from "../services/updateUser.Service";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, age } = req.body;
    const user = await updateUserService({ id, name, email, age, password });
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

export default updateUserController;
