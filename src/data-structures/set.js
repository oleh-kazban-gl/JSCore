export const set = new Set();
const user = { name: 'Oleh' };
// Add entries
set
  .add({ name: 'Oleh' })
  .add({ name: 'Ludmila' })
  .add({ name: 'Dima' })
  .add({ name: 'Veronica' });

// Structure
// console.log('set: ', set);

// Get size
// console.log('set size: ', set.size);

// Get already existing value
// set.add({ name: 'Oleh' });
// console.log('set size: ', set.size);
// set.add(user);
// console.log('set size: ', set.size);
// set.add(user);

// Entries
// console.log('set values: ', set.values());
// console.log('set keys: ', set.keys());
// console.log('set entries: ', set.entries());

// Has value
// console.log('set has value: ', set.has(user));
// console.log('set has value: ', set.has({ name: 'Oleh' }));

// Iterate over all entries
// set.forEach((value, key, currentSet) => {
//   console.log('value: ', value);
//   console.log('key: ', key);
//   console.log('currentSet: ', currentSet);
// });

// Delete value
// console.log('set.size: ', set.size);
// set.delete(user);
// console.log('set.size: ', set.size);

// Clear set
// console.log('set.size: ', set.size);
// set.clear();
// console.log('set.size: ', set.size);
