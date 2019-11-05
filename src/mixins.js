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

Object.assign(User.prototype, userGreetUtils);
Object.assign(User.prototype, userByeUtils);

const user = new User('Oleh', 'Kazban');

console.log('user: ', user);
console.log('user full name: ', user.fullName);

user.greet();
user.goAway();
// user.fullName = 'Ludmila Kazban';
// console.log('user full name: ', user.fullName);
