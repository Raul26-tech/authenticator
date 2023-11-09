import { CustomerRepository } from "../infra/typeorm/repositories/CustomersRepository";

class ListCustomersService {
  async execute() {
    const listCustomersRepository = new CustomerRepository();

    const customers = await listCustomersRepository.listCustomers();

    return customers;
  }
}

export { ListCustomersService };
