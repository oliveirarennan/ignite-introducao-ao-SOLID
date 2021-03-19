import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const findedUser = this.usersRepository.findById(user_id);

    if (!findedUser) {
      throw new Error("User does not exists");
    }

    const updadatedFindedUser = this.usersRepository.turnAdmin(findedUser);

    return updadatedFindedUser;
  }
}

export { TurnUserAdminUseCase };
