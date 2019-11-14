/* eslint-disable import/prefer-default-export */
export const arr1 = Array(5);
export const arr2 = Array.of(5, 10, 15);
export const arr3 = [5, 10, 15];
export const users = [
  { name: 'Oleh', age: 39 },
  { name: 'Mike', age: 30 },
  { name: 'Dima', age: 13 },
  { name: 'Veronica', age: 8 },
  { name: 'Ludmila', age: 38 },
];

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

// --- Copy & Modify ---
// const result = [].concat(arr3);
// const result = Array.from(arr3);
// const result = arr3.copyWithin(2, 0);
// const result = arr3.copyWithin(1, 0, 2);

// const result = Array.from(arr3, value => value * 10);

// console.log('result: ', result);
// console.log('result ref: ', result === arr3);

// --- Fill ---
// arr3.fill(100);
// arr3.fill(100, 0, 2);
// console.log('arr3', arr3);

// --- Find ---
// const result = users.find(user => user.age > 35);
// console.log(result);

// Iterator & Entries
// const iterator = arr3.entries();
// console.log('iterator: ', iterator.next());
// console.log('iterator: ', iterator.next());

// Includes
// console.log(arr3.includes(10));
// console.log(arr3.includes(20));
// --- console.log(users.includes(user => user.age === 39));
