/* eslint-disable import/prefer-default-export */
export const weakMap = new WeakMap();

const users = [
  { name: 'Oleh' },
  { name: 'Ludmila' },
  { name: 'Dima' },
  { name: 'Veronica' },
];

// Set values
weakMap
  .set(users[0], { active: true, name: users[0].name })
  .set(users[1], { active: true, name: users[1].name })
  .set(users[2], { active: true, name: users[2].name })
  .set(users[3], { active: true, name: users[3].name });
// weakMap.set('123', 123);

// console.log('weakMap: ', weakMap);

// Has value
// console.log('weakMap has value', weakMap.has(users[0]));
// weakMap.has('123');

// Get value
// console.log('weakMap get value', weakMap.get(users[0]));

// Delete values
// console.log('weakMap: ', weakMap.get(users[0]));
// weakMap.delete(users[0]);
// console.log('weakMap: ', weakMap.get(users[0]));

// Difference between map and weak map
// console.log('weakMap 0: ', weakMap.get(users[0]));
// users.splice(0, 1);
// console.log('weakMap 0: ', weakMap.get(users[0]));
