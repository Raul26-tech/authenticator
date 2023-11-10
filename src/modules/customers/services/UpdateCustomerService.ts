import { IUpdateCustomerDTO } from "../dto/IUpdateCustomerDTO";
import { CustomerRepository } from "../infra/typeorm/repositories/CustomersRepository";

class UpdateCustomerService {
  async execute({ id, name, email }: IUpdateCustomerDTO) {
    const customerRepository = new CustomerRepository();

    const customer = await customerRepository.findById(id);
    const userEmail = await customerRepository.findByEmail(email);

    if (!customer) {
      throw new Error("Usuário informado não foi encontrado");
    }

    if (userEmail && email === customer.email) {
      throw new Error(
        "Já existe um usuário cadastrado no sistema com esse e-mail, por favor digite um e-mail válido"
      );
    }

    customer.name = name;
    customer.email = email;

    await customerRepository.updateCustomer({ id, name, email });

    return customer;
  }
}

export { UpdateCustomerService };
