export class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

export const config = {
  greet(name) {
    if (!!name) {
      console.log(`Hello, ${name}, from ${this.firstName} ${this.lastName}`);
    } else {
      console.log('Hello!');
    }
  },
  getContext() {
    return this;
  },
};

class BasicPerson {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.basicGreet = () => {
      console.log('Hello');
    };
  }
}

class ExtendedPerson extends BasicPerson {
  constructor(firstName, lastName, age, address) {
    super(firstName, lastName);

    this.age = age;
    this.address = address;

    this.greet = (name) => {
      console.log(`Hello, ${name}, from ${this.firstName} ${this.lastName}`);
    };
  }
}

// [[Reflect.construct]]
// const person = Reflect.construct(Person, []);
// const person = Reflect.construct(Person, ['Oleh', 'Kazban', 39]);
// console.log('person: ', person);
// console.log('person: ', person instanceof Person);

// [[Reflect.setPrototypeOf]]
// [[Reflect.getPrototypeOf]]
// const person = new Person('Oleh', 'Kazban', 39);
// Reflect.setPrototypeOf(person, config);

// console.log(Reflect.getPrototypeOf(person));

// person.greet();
// console.log(person.getContext());

// [[Reflect.get]]
// let person = new Person('Oleh', 'Kazban', 39);
// person = new Proxy(person, {
//   get(target, property) {
//     if(property === 'fullName') {
//       return `${target.firstName} ${target.lastName}`;
//     }
//   }
// });
// console.log('fullName', person.fullName);
// console.log(Reflect.get(person, 'firstName'));
// console.log(Reflect.get(person, 'fullName'));

// [[Reflect.set]]
// let person = new Person('Oleh', 'Kazban', 39);
// person = new Proxy(person, {
//   get(target, property) {
//     if (property === 'fullName') {
//       return `${target.firstName} ${target.lastName}`;
//     }
//   },
//   set(target, property, value) {
//     if (property === 'fullName') {
//       const parts = value.split(' ');
//       target.firstName = parts[0];
//       target.lastName = parts[1];

//       return true;
//     }

//     return false;
//   },
// });

// Reflect.set(person, 'fullName', 'John Doe');
// console.log('person: ', person);

// [[Reflect.defineProperty]]
// [[Reflect.getOwnPropertyDescriptor]]
// [[Reflect.has]]
// [[Reflect.isExtensible]]
// [[Reflect.preventExtensions]]
// const person = Reflect.construct(Person, ['Oleh', 'Kazban', 39]);

// if (Reflect.defineProperty(person, 'address', {
//   enumerable: false,
//   value: {
//     contry: 'Ukraine',
//     street: 'Academician Walter str'
//   }
// })) {
//   console.log('Successfully created');
// } else {
//   console.log('Error');
// }

// console.log('person: ', person);
// console.log('person.address: ', person.address);
// console.log('person.address descriptor: ', Reflect.getOwnPropertyDescriptor(person, 'address'));
// console.log('isExtensible person.address: ', Reflect.isExtensible(person, 'address'));
// console.log('preventExtensions person.address: ', Reflect.preventExtensions(person, 'address'));
// console.log('isExtensible person.address: ', Reflect.isExtensible(person, 'address'));
// console.log('has person.address: ', Reflect.has(person, 'address'));

// [[Reflect.deleteProperty]]
// const person = Reflect.construct(Person, ['Oleh', 'Kazban', 39]);
// person.address = 'Ukraine, Ac. Walter str.';

// if (Reflect.deleteProperty(person, 'address')) {
//   console.log('Successfully created');
// } else {
//   console.log('Error');
// }

// console.log('person: ', person);
// console.log('person.address: ', person.address);

// [[Reflect.ownKeys]]
// const extendedPerson = new ExtendedPerson(
//   'Oleh',
//   'Kazban',
//   39,
//   'Ukraine, Ac. Walter str.'
// );

// extendedPerson.greet('Dima');
// extendedPerson.basicGreet();

// console.log(Reflect.ownKeys(extendedPerson));

// function ParentClass() {}
// ParentClass.prototype.inheritedMethod = function() {};

// function ChildClass() {
//   this.property = 5;
//   this.method = function() {};
// }
// ChildClass.prototype = new ParentClass();
// ChildClass.prototype.prototypeMethod = function() {};

// console.log(Object.getOwnPropertyNames(new ChildClass()));
// console.log(Reflect.ownKeys(new ChildClass()));

// const child = new ChildClass();
// child.inheritedMethod();

// [[Reflect.apply]]
// const person = Reflect.construct(Person, ['Oleh', 'Kazban', 39]);
// Reflect.setPrototypeOf(person, config);
// Reflect.apply(person.greet, person, ['Dima']);
