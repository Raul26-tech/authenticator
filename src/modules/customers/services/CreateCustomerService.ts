import { ICreateCustomerDTO } from "../dto/ICreateCustomerDTO";
import { CustomerRepository } from "../infra/typeorm/repositories/CustomersRepository";

class CreateCustomerService {
  async execute({ name, email }: ICreateCustomerDTO) {
    const customerReposityory = new CustomerRepository();

    const customerName = await customerReposityory.findByName(name);
    const customerEmail = await customerReposityory.findByEmail(email);

    if (customerName) {
      throw new Error("Este cliente já existe");
    }

    // if(customerEmail){
    //     throw new Error('Um cliente já foi cadastrado com e-mail')
    // }

    const customer = await customerReposityory.create({ name, email });

    return customer;
  }
}

export { CreateCustomerService };
