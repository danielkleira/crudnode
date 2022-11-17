import { IUserCreate, IUser } from "../interfaces/user";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt";

const createUserService = async ({ name, email, password, age }: IUser) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }
  const hashed = await bcrypt.hash(password, 10);

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = hashed;
  user.age = age;

  userRepository.create(user);
  await userRepository.save(user);

  const userReturn = { ...user, password: undefined };

  return userReturn;
};

export default createUserService;
