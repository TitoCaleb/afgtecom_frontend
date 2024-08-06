export class User {
  id: string;

  name: string;

  middleName?: string;

  lastName: string;

  motherLastName: string;

  phone: string;

  address: string;

  documentTypeId: string;

  documentNumber: string;

  birthdate: Date;

  civilStatusId: string;

  rolId: string;

  email: string;

  password: string;

  constructor(data: Partial<User>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
