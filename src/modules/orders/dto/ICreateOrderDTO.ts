import { Customer } from "@modules/customers/infra/typeorm/entities/Customer";

interface ICreateOrderDTO {
  customer: Customer;
  products: {
    id: string;
    price: number;
    quantity: number;
  }[];
}

export { ICreateOrderDTO };
