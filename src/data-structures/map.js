// eslint-disable-next-line import/prefer-default-export
export const map = new Map();

const testRef = {};

// Set entries
map.set('primary', 'Primary');
map.set('secondary', 'Secondary');
map.set('user', {
  firstName: 'Oleh',
  lastName: 'Kazban',
});
map.set('documents', []);
map.set('roles', ['USER', 'SYSTEM_USER', 'ADMIN', 'GLOBAL_ADMIN'])
  .set(true, 'boolean')
  .set(1, 'number');
map.set(testRef, {});

// Structure
// console.log('map: ', map);

// Has value
// console.log('has key: primary: ', map.has('primary'));
// console.log('has key: wrong name: ', map.has('primery'));

// Get value by key name
// console.log('get key: primary: ', map.get('primary'));
// console.log('get key: wrong name: ', map.get('primery'));

// Entries
// console.log('keys: ', map.keys());
// console.log('values: ', map.values());
// console.log('entries: ', map.entries());

// Size
// console.log('size: ', map.size);

// Delete entries
// console.log('get key: documents: ', map.get('documents'));
// map.delete('documents');
// console.log('get key: documents: ', map.get('documents'));

// Iterate over all entries
// map.forEach((value, key, currentMap) => {
//   console.log('value: ', value);
//   console.log('key: ', key);
//   console.log('currentMap: ', currentMap);
// });

// Clear
// console.log('map: ', map);
// map.clear();
// console.log('map: ', map);
