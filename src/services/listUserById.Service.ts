import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const listByIdService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userID = await userRepository.findOneBy({ id: id });

  if (!userID) {
    throw new Error("User not found");
  }

  return userID;
};

export default listByIdService;
