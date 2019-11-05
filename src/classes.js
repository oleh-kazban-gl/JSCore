/* eslint-disable max-classes-per-file */
export class User {
  constructor({name, age, sex}) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

export class Person extends User {
  constructor(user, email, authorities) {
    super(user);

    this.email = email;
    this.authorities = authorities;
  }
}

const user = new User({ name: 'Oleh', age: 39, sex: 'M'});
// const person = new Person('Oleh', 39, 'M', 'mail@bvox.com', []);
const person = new Person(user, 'mail@bvox.com', []);

console.log('user: ', user);
console.log('person: ', person);
