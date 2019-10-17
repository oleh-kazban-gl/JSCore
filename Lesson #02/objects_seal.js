'use strict';

// --- Object configuration ---
// Object.seal()

// --- Get configuration ---
// Object.isSealed()

var user = {
	firstName: 'Oleh',
	lastName: 'Kazban',
	age: 39,
	sex: 'M',
	email: 'mail@box.com'
};

user.isAdmin = true;

console.log('--- Defaults ---');
console.log('isSealed: ', Object.isSealed(user));
console.log('properties: ', Object.keys(user));


Object.seal(user);
user.isAdmin = false;
user.isGlobalAdmin = false;

delete(user.isAdmin);

console.log('isAdmin: ', user.isAdmin);
console.log('isGlobalAdmin: ', user.isGlobalAdmin);

console.log('isSealed: ', Object.isSealed(user));
console.log('properties: ', Object.keys(user));
