import { Repository } from "typeorm";
import { Customer } from "../entities/Customer";
import { AppDataSource } from "@shared/infra/typeorm";
import { ICustomerRepository } from "@modules/customers/irepositories/ICustomersRepositories";
import { ICreateCustomerDTO } from "@modules/customers/dto/ICreateCustomerDTO";
import { IUpdateCustomerDTO } from "@modules/customers/dto/IUpdateCustomerDTO";

class CustomerRepository implements ICustomerRepository {
  private repository: Repository<Customer>;

  constructor() {
    this.repository = AppDataSource.getRepository(Customer);
  }

  async create({ name, email }: ICreateCustomerDTO) {
    const customer = this.repository.create({
      name,
      email,
    });

    await this.repository.save(customer);

    return customer;
  }

  async findByName(name: string) {
    const customer = this.repository.findOne({
      where: {
        name,
      },
    });

    return customer;
  }

  async findById(id: string) {
    const customer = await this.repository.findOne({
      where: {
        id,
      },
    });

    return customer;
  }

  async findByEmail(email: string) {
    const customer = await this.repository.findOne({
      where: {
        email,
      },
    });

    return customer;
  }

  async listCustomers() {
    const customers = await this.repository.find();

    return customers;
  }

  async showCustomer(id: string) {
    const customer = await this.repository.findOne({
      where: {
        id,
      },
    });

    return customer;
  }

  async updateCustomer({ id, name, email }: IUpdateCustomerDTO) {
    const customer = await this.repository.findOneBy({ id });

    Object.assign(customer, {
      id,
      name,
      email,
    });

    await this.repository.save(customer);

    return customer;
  }

  async deleteCustomer(id: string) {
    const customer = await this.repository.findOne({ where: { id } });
    console.log(customer);

    await this.repository.remove(customer);
  }
}

export { CustomerRepository };
