import { CustomerRepository } from "../infra/typeorm/repositories/CustomersRepository";

class ShowCustomerService {
  async execute(id: string) {
    const showCustomerRepository = new CustomerRepository();

    if (!id) {
      throw new Error("Id do usuário não foi indentificado");
    }

    const customer = await showCustomerRepository.findById(id);

    if (!customer) {
      throw new Error("O Usuário informado não encontrado");
    }

    return customer;
  }
}

export { ShowCustomerService };
