// --- Object configuration ---
// Object.freeze()

// --- Get configuration ---
// Object.isFrozen()

var user = {
	firstName: 'Oleh',
	lastName: 'Kazban',
	age: 39,
	sex: 'M',
	email: 'mail@box.com'
};

user.isAdmin = true;

console.log('--- Defaults ---');
console.log('isFrozen: ', Object.isFrozen(user));
console.log('properties: ', Object.keys(user));


Object.freeze(user);
user.isAdmin = false;
user.isGlobalAdmin = false;

delete(user.isAdmin);

console.log('isAdmin: ', user.isAdmin);
console.log('isGlobalAdmin: ', user.isGlobalAdmin);

console.log('isFrozen: ', Object.isFrozen(user));
console.log('properties: ', Object.keys(user));
