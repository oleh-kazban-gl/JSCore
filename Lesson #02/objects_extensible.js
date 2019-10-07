// --- Object configuration ---
// Object.preventExtensions()

// --- Get configuration ---
// Object.isExtensible()

var user = {
	firstName: 'Oleh',
	lastName: 'Kazban',
	age: 39,
	sex: 'M',
	email: 'mail@box.com'
};

console.log('--- Defaults ---');
console.log('isExtensible: ', Object.isExtensible(user));
console.log('properties: ', Object.keys(user));

Object.preventExtensions(user);
user.isAdmin = true;

console.log('isExtensible: ', Object.isExtensible(user));
console.log('properties: ', Object.keys(user));
