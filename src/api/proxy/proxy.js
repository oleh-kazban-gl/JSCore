export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Without traps
// const person = new Person('Oleh', 39);
// const simplePersonProxy = new Proxy(person, {});

// simplePersonProxy.test = 'test';
// simplePersonProxy.testRef = {
//   a: 'a',
//   b: 'b'
// };

// console.log('simplePersonProxy.test: ', simplePersonProxy.test);
// console.log('person.test: ', person.test);
// console.log(
//   'person.test === simplePersonProxy.test: ',
//   person.test === simplePersonProxy.test
// );

// for (let field in person) {
//   console.log(`${field} : ${person[field]}`);
// }

// for (let field in simplePersonProxy) {
//   console.log(`${field} : ${simplePersonProxy[field]}`);
// }

// [[Get]]
// const person = new Person('Oleh', 39);
// const personProxy = new Proxy(person, {
//   get: function(target, property, receiver) {
//     console.log('target: ', target);
//     console.log('property: ', property);
//     console.log('receiver: ', receiver);

//     return 'Something else';
//   },
// });
// const checkPersonProxy = new Proxy(person, {
//   get: function(target, property, receiver) {
//     if (target[property]) {
//       return target[property];
//     } else {
//       return 'Something else';
//     }
//   },
// });

// console.log('age: ', personProxy.age);
// console.log('name: ', personProxy.name);

// console.log('age: ', checkPersonProxy.age);
// console.log('name: ', checkPersonProxy.name);
// console.log('name: ', checkPersonProxy.test);

// [[Set]] invariant
// const person = new Person('Oleh', 39);
// const personProxy = new Proxy(person, {
//   set: function(target, property, value, receiver) {
//     if (target[property]) {
//       target[property] = value;

//       return true;
//     } else {
//       return false;
//     }
//   },
// });

// personProxy.age = 13;
// personProxy.name = 'Dima';
// // personProxy.test = 'test';

// console.log('age: ', personProxy.age);
// console.log('name: ', personProxy.name);
// // console.log('name: ', personProxy.test);

// [[ownKeys]]
// [[getOwnPropertyDescriptor]]
// let person = new Person('Oleh', 39);
// person._private = 'private field';

// // const personOwnKeysProxy
// person = new Proxy(person, {
//   ownKeys(target) {
//     console.log('keys: ', Object.keys(target));

//     return Object.keys(target).filter((key) => !key.startsWith('_'));
//   },
//   // getOwnPropertyDescriptor(target, property) {
//   //   if (target[property] && property.startsWith('_')) {
//   //     return {
//   //       enumerable: true,
//   //       configurable: true,
//   //     };
//   //   }
//   // },
// });

// for (let key in person) {
//   console.log(`${key} : ${person[key]}`);
// }

// console.log('keys: ', Object.keys(person));

// [[deleteProperty]]
// let person = new Person('Oleh', 39);
// person._secret = 'secret';

// person = new Proxy(person, {
//   // get
//   // set
//   // ownKeys
//   deleteProperty(target, property) {
//     if (property.startsWith('_')) {
//       throw new Error('Access denied');
//     } else {
//       delete target[property];

//       return true;
//     }
//   }
// });

// console.log(person);
// delete person.age;
// console.log(person);
// delete person._secret;
// console.log(person);

// [[Has]]
// let range = {
//   start: 1,
//   end: 10
// };

// range = new Proxy(range, {
//   has(target, property) {
//     return property >= target.start && property <= target.end;
//   }
// });

// console.log(5 in range);
// console.log(50 in range);

// [[Apply]]
// function delay(f, ms) {
//   return new Proxy(f, {
//     apply(target, thisArg, args) {
//       setTimeout(() => target.apply(thisArg, args), ms);
//     }
//   });
// }

// function sayHello(user) {
//   console.log(`Hello, ${user}`);
// }

// sayHello = delay(sayHello, 3000);

// console.log(sayHello.length);

// sayHello("Oleh");
