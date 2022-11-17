import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userDelete = await userRepository.findOneBy({ id: id });

  if (!userDelete) {
    throw new Error("User not found");
  }

  await userRepository.delete(userDelete);

  return "Deleted";
};

export default deleteUserService;
