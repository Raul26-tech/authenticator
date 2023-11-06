import { User } from "@modules/users/infra/typeorm/entities/User";
import { IProfileDTO } from "../dto/IProfileDTO";

interface IProfileRepository {
  showProfile(id: string): Promise<User>;
  updateProfile(data: IProfileDTO): Promise<User>;
}

export { IProfileRepository };
