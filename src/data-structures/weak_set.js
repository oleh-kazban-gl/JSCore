/* eslint-disable import/prefer-default-export */
export const weakSet = new WeakSet();

const users = [
  { name: 'Oleh' },
  { name: 'Ludmila' },
  { name: 'Dima' },
  { name: 'Veronica' },
];

// Set values
weakSet
  .add(users[0], { active: true, name: users[0].name })
  .add(users[1], { active: true, name: users[1].name })
  .add(users[2], { active: true, name: users[2].name })
  .add(users[3], { active: true, name: users[3].name });
// weakSet.add('123', 123);

// console.log('weakSet: ', weakSet);

// Has value
// console.log('weakSet has value', weakSet.has(users[0]));
// weakSet.has('123');

// Get value
// console.log('weakSet get value', weakSet.get(users[0]));

// Delete values
// console.log('weakSet: ', weakSet.has(users[0]));
// weakSet.delete(users[0]);
// console.log('weakSet: ', weakSet.has(users[0]));

// Difference between map and weak map
// console.log('weakSet 0: ', weakSet.has(users[0]));
// users.splice(0, 1);
// console.log('weakSet 0: ', weakSet.has(users[0]));
