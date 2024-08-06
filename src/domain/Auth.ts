export class Auth {
  email: string;
  password: string;

  constructor(data: Partial<Auth>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
