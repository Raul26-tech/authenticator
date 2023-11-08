import { ICreateCustomerDTO } from "../dto/ICreateCustomerDTO";
import { Customer } from "../infra/typeorm/entities/Customer";

interface ICustomerRepository {
  create({ name, email }: ICreateCustomerDTO): Promise<Customer>;
  findByName(name: string): Promise<Customer | undefined>;
  findById(id: string): Promise<Customer | undefined>;
  findByEmail(email: string): Promise<Customer | undefined>;
}

export { ICustomerRepository };
