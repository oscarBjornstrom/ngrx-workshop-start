export class Profile {
  username: string;
  age: string;
  email: string;
  description: string;

  constructor(username: string,
              age: string,
              email: string,
              description: string) {
    this.username = username;
    this.age = age;
    this.email = email;
    this.description = description;
  }
}
