import { CustomerRepository } from "../infra/typeorm/repositories/CustomersRepository";

class DeleteCustomerService {
  async execute(id: string) {
    const customerRepository = new CustomerRepository();

    const customer = await customerRepository.findById(id);

    if (!customer) {
      throw new Error("Usuário não foi informado");
    }

    return await customerRepository.deleteCustomer(id);
  }
}

export { DeleteCustomerService };
