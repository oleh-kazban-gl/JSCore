/* eslint-disable max-classes-per-file */
export const person = {
  firstName: 'Oleh',
  lastName: 'Kazban',
  get fullName() {
    console.log('context: ', this);
    return `${this.firstName} ${this.lastName}`;
  },
};

export const user = {
  roles: ['USER', 'SYSTEM_USER', 'ADMIN'],
  authorities: ['CREATE', 'EDIT', 'DELETE'],
};

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class User {
  constructor(person, roles, authorities) {
    this.person = person;
    this.roles = roles;
    this.authorities = authorities;
  }
}

const personInstance = new Person('Oleh', 'Kazban');
const userInstance = new User(personInstance, ['USER', 'SYSTEM_USER', 'ADMIN'], ['CREATE', 'EDIT', 'DELETE']);

// Object.setPrototypeOf(userInstance, personInstance);

// console.log('person: ', personInstance.getFullName());
// console.log('user: ', userInstance.getFullName());

// --- Object.assign() ---
// Merge
// const mergedObj1 = Object.assign(person, user);

// console.log('person: ', person);
// console.log('user: ', user);
// console.log('mergedObj1: ', mergedObj1);
// console.log('mergedObj1 === person : ', mergedObj1 === person);

// Copy
// const personCopy = Object.assign({}, person);
// const personCopy = Object.assign({}, person, user);

// console.log('personCopy: ', personCopy);
// console.log('person === personCopy: ', person === personCopy);

// Shallow Copy
// const shallowCopy = Object.assign({}, person, user);

// console.log('shallowCopy: ', shallowCopy);
// console.log('shallowCopy deep ref: ', shallowCopy.roles === user.roles);

// Instance of & proto
// console.log('personInstance: ', personInstance instanceof Person);
// console.log('userInstance: ', userInstance instanceof User);

// const mergedInstance = Object.assign(personInstance, userInstance);

// console.log('mergedInstance instance of Person: ', mergedInstance instanceof Person);
// console.log('mergedInstance instance of User: ', mergedInstance instanceof User);

// console.log('person: ', person);
// console.log('user: ', user);

// console.log(personInstance.__proto__ === Person.prototype);
// console.log(userInstance.__proto__ === User.prototype);
// console.log(mergedInstance.__proto__ === Person.prototype);
// console.log(mergedInstance.__proto__ === User.prototype);

// --- Object.setPrototypeOf ---
// console.log(user.__proto__ === Object.prototype);
// console.log(person.__proto__ === Object.prototype);

// Object.setPrototypeOf(person, user);

// console.log('person.fullName: ', person.fullName);
// console.log('user.fullName: ', user.fullName);

// console.log(user.__proto__ === Object.prototype);
// console.log(person.__proto__ === Object.prototype);
// console.log(user.__proto__ === user);
// console.log(person.__proto__ === user);

// console.log(user.__proto__);

// --- Object.keys() ---
// console.log('user keys: ', Object.keys(user));

// --- Object.values() ---
// console.log('user values: ', Object.values(user));

// --- Computed properties ---
// const propertyName = 'make';
// const laptop = {
//   [propertyName]: 'Apple',
// };
// console.log('laptop: ', laptop);

// const propertyName = 'make';
// let i = 0;
// const laptop = {
//   [propertyName + ++i]: 'Apple',
//   [propertyName + ++i]: 'Apple',
//   [propertyName + ++i]: 'Apple',
// };
// console.log('laptop: ', laptop);

// --- Shorthands ---
// function getLaptop(make, model, year) {
//   return {
//     make, model, year,
//   };
// }

// const getLaptop = (make, model, year) => ({
//     make, model, year,
// });

// console.log(getLaptop('Asus', 'ROG', 2019));
