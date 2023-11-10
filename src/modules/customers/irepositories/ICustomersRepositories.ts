import { ICreateCustomerDTO } from "../dto/ICreateCustomerDTO";
import { IUpdateCustomerDTO } from "../dto/IUpdateCustomerDTO";
import { Customer } from "../infra/typeorm/entities/Customer";

interface ICustomerRepository {
  create({ name, email }: ICreateCustomerDTO): Promise<Customer>;
  findByName(name: string): Promise<Customer | undefined>;
  findById(id: string): Promise<Customer | undefined>;
  findByEmail(email: string): Promise<Customer | undefined>;
  listCustomers(): Promise<Customer[]>;
  showCustomer(id: string): Promise<Customer>;
  updateCustomer(data: IUpdateCustomerDTO): Promise<Customer>;
  deleteCustomer(id: string): Promise<void>;
}

export { ICustomerRepository };
