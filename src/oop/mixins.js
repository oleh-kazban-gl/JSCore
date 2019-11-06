/* eslint-disable max-classes-per-file */
export const userGreetUtils = {
  greet() {
    console.log(`Hello, ${this.fullName}`);
  },
};
export const userByeUtils = {
  goAway() {
    console.log(`Bye, ${this.fullName}`);
  },
};

export class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');

    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export class Person extends User {
  constructor(user, adress, email) {
    super(user.firstName, user.lastName);
    this.adress = adress;
    this.email = email;
  }
}

Object.assign(Person.prototype, userGreetUtils);
Object.assign(Person.prototype, userByeUtils);

// const user = new User('Oleh', 'Kazban');
// const person = new Person(user, 'user address', 'mail@box.com');

// console.log('person: ', person);
// console.log('person full name: ', person.fullName);

// user.fullName = 'Ludmila Kazban';
// console.log('user full name: ', user.fullName);

// user.greet();
// user.goAway();
// user.fullName = 'Ludmila Kazban';
// console.log('user full name: ', user.fullName);

// person.greet();
// person.goAway();
