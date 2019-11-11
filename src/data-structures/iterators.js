/* eslint-disable import/prefer-default-export */
export const iterableArray = [0, 1, 2, 3, 4];

// console.log('iterableArray: ', iterableArray);
// console.log('iterableArray iterator: ', iterableArray[Symbol.iterator]);

// iterableArray[Symbol.iterator] = function() {
//   let nextValue = 0;

//   return {
//     next() {
//       nextValue++;

//       return {
//         done: nextValue > 3 ? true : false,
//         value: nextValue,
//       };
//     },
//   };
// };

// const iterator = iterableArray[Symbol.iterator]();

// console.log('iterator: ', iterator);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (let value of iterableArray) {
//   console.log('value: ', value);
// }

const user = {
  firstName: 'Oleh',
  lastName: 'Kazban',
  roles: ['USER', 'SYSTEM_USER', 'ADMIN'],
};

user[Symbol.iterator] = function () {
  let index = 0;
  let _that = this;
  return {
    next: function() {
      return {
        done: index >= _that.roles.length ? true : false,
        value: _that.roles[index++]
      }
    }
  }
};

// for (let value of user) {
//   console.log('value: ', value);
// }
