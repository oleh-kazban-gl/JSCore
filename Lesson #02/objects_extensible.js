'use strict';

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
user.firstName = 'Dmytro';

delete user.sex;

// var user = Object.assign({}, user);
// console.log('isExtensible: ', Object.isExtensible(user));

console.log('isExtensible: ', Object.isExtensible(user));
console.log('properties: ', Object.keys(user));
console.log('user: ', user);
