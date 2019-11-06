export const shortFabrique = (userName, age, sex) => ({ userName, age, sex });
// export function shortFabrique(userName, age, sex) {
//   return {
//     userName: userName,
//     age: age,
//     sex: sex
//   };
// }
export const destructionArray = ([first, second, rest]) => {
  console.log('first: ', first);
  console.log('second: ', second);
  console.log('rest: ', rest);
};
export const destructionObject = ({ name, age, sex }) => {
  console.log('name: ', name);
  console.log('age: ', age);
  console.log('sex: ', sex);
};

// console.log(shortFabrique('Oleh', 39, 'M'));
// destructionArray(['abc', 39, ['READ', 'WRITE', 'DELETE']]);
// destructionArray(['abc', 39]);
// destructionObject({
//   sex: 'M',
//   age: 39,
//   name: 'Oleh',
// });
// destructionObject({
//   firstName: 'Oleh',
//   lastName: 'Kazban',
//   middleName: 'Yuri',
//   age: 39,
//   sex: 'M'
// });

// Spread & rest
export const spreadOperator = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

export const restOperator = (userName, age, ...args) => {
  console.log('--- rest ---');
  console.log('userName: ', userName);
  console.log('age: ', age);
  console.log('args: ', args);
};

// restOperator(
//   'Oleh',
//   39,
//   'mail@box.com',
//   ['READ', 'WRITE', 'DELETE'],
//   ['USER', 'SYSTEM_USER']
// );
// restOperator('Oleh', 39);

const user = {
  firstName: 'Oleh',
  lastName: 'Kazban',
  age: 39,
  sex: 'M',
};
const system = {
  email: 'mail@box.com',
  authorities: ['READ', 'WRITE', 'DELETE'],
  roles: ['USER', 'SYSTEM_USER'],
};
// const systemUser = spreadOperator(user, system);
const userCopy = { ...user };

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];

const filtered = arr1.filter(val => val % 2 === 0);

// console.log(arr3);

// const checkRef = (obj1, obj2) => obj1 === obj2;

// console.log('userCopy: ', userCopy);
// console.log('checkRef: ', checkRef(user, userCopy));

// console.log('systemUser: ', systemUser);

let counter = {
  value: 3600,
  count: function () {
    setTimeout(function() {
      console.log(this);
    }.bind(this), 1000);
  }
};
let counterArrow = {
  value: 3600,
  count: () => {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
};

// counter.count();
// counterArrow.count();
