import { Router } from "express";
import createUSerController from "../controllers/createUser.Controller";
import deleteUserController from "../controllers/deleteUser.Controller";
import listUserByIdController from "../controllers/listUserById.Controller";
import listUsersController from "../controllers/listUsers.Controller";
import updateUserController from "../controllers/updateUser.Controller";

const routes = Router();

routes.post("/users", createUSerController);
routes.get("/users",listUsersController);
routes.get("/users/:id",listUserByIdController);
routes.patch("/users/:id",updateUserController);
routes.delete("/users/:id",deleteUserController);

export default routes;
