// --- Object configuration ---
// Object.defineProperty()

// --- Get configuration ---
// Object.isExtensible()
// Object.isFrozen()
// Object.isSealed()

var user = {
	firstName: 'Oleh',
	lastName: 'Kazban',
	age: 39,
	sex: 'M',
	email: 'mail@box.com'
};

console.log('--- Defaults ---');
console.log('isExtensible: ', Object.isExtensible(user));
console.log('isFrozen: ', Object.isFrozen(user));
console.log('isSealed: ', Object.isSealed(user));
console.log('properties: ', Object.keys(user));

// console.log('--- defineProperty ---');
// Object.defineProperty(user, 'isAdmin', {
// 	value: true,
// 	writable: true,
// 	enumerable: true,
// 	configurable: true
// });
// console.log('properties: ', Object.keys(user));
// console.log('user: ', user);

// console.log('--- set read-only ---');
// Object.defineProperty(user, 'isAdmin', {
// 	__proto__: null,
// 	value: true,
// 	writable: false,
// });
// console.log('user: ', user);
// user.isAdmin = false;
// console.log('user: ', user);

// console.log('--- set non-enumerable ---');
// Object.defineProperty(user, 'isAdmin', {
// 	__proto__: null,
// 	value: true,
// 	writable: true,
// 	enumerable: false
// });
// console.log('isAdmin: ', user.isAdmin);
// console.log('user: ', user);
// console.log('properties: ', Object.keys(user));

// console.log('--- set non-configurable ---');
// Object.defineProperty(user, 'isAdmin', {
// 	__proto__: null,
// 	value: true,
// 	writable: true,
// 	enumerable: true,
// 	configurable: false
// });
// console.log('isAdmin: ', user.isAdmin);
// console.log('user: ', user);
// console.log('properties: ', Object.keys(user));
// // user.isAdmin = false;
// // delete(user.isAdmin);
// console.log('user: ', user);
// console.log('properties: ', Object.keys(user));

// console.log('--- Getter/Setter function ---');
// Object.defineProperty(user, 'fullName', {
// 	get: function() { return this.firstName + ' ' + this.lastName; },
// 	enumerable: false,
// 	configurable: false
// });
// Object.defineProperty(user, '_isAdmin', {
// 	value: true,
// 	enumerable: false,
// 	configurable: false,
// 	writable: true
// });
// Object.defineProperty(user, 'isAdmin', {
// 	get: function() { return this._isAdmin; },
// 	set: function(value) {
// 		console.log('this: ', this);
// 		if (this._isAdmin !== value) {
// 			this._isAdmin = value;
// 		}
// 	},
// 	enumerable: false,
// 	configurable: false
// });

// console.log('user: ', user);
// console.log('properties: ', Object.keys(user));

// console.log('fullName: ', user.fullName);
// console.log('isAdmin: ', user.isAdmin);

// user.isAdmin = false;
// console.log('isAdmin: ', user.isAdmin);
