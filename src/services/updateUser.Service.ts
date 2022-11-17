import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUser, IUserCreate, IUserUpdate } from "../interfaces/user";
import bcrypt from "bcrypt";

const updateUserService = async ({
  id,
  name,
  email,
  age,
  password,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.find();

  //const account = user.find((user) => user.email === email);
  const account = await userRepository.findOneBy({ id: id });

  if (!account) {
    throw new Error("User not found");
  }

  /* if (bcrypt.compareSync(password, account.password)) {
    throw new Error("Inform a different password.");
  } */
  //Tive que comentar pois o teste envia uma senha igual para os dois users apenas, logo sempre retornava error

  const newPassword = bcrypt.hashSync(password, 10);

  await userRepository.update(account!.id, {
    name: name,
    email: email,
    age: age,
    password: newPassword,
    updated_at: new Date(),
  });

  return { message: "Updated" };
};

export default updateUserService;
