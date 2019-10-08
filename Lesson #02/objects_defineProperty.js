// --- Object configuration ---
// Object.defineProperty()

// TODO: check specs on MDN
// enumerable: false
// configurable: true
// extensible: true

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
// 	value: true,
// 	writable: false,
// 	enumerable: true
// });
// console.log('user: ', user);
// user.isAdmin = false;
// console.log('user: ', user);
// console.log('user isAdmin: ', user.isAdmin);

// console.log('--- set non-enumerable ---');
// // Object.defineProperty(user, 'isAdmin', {
// // 	value: true,
// // 	writable: true,
// // 	enumerable: false
// // });
// Object.defineProperty(user, 'isAdmin', {
// 	value: true,
// 	writable: true
// });
// console.log('isAdmin: ', user.isAdmin);
// console.log('user: ', user);
// console.log('properties: ', Object.keys(user));

// console.log('--- set non-configurable ---');
// Object.defineProperty(user, 'isAdmin', {
// 	value: true,
// 	writable: true,
// 	enumerable: true,
// 	configurable: false
// });
// console.log('isAdmin: ', user.isAdmin);
// console.log('user: ', user);
// console.log('properties: ', Object.keys(user));
// user.isAdmin = false;
// delete(user.isAdmin);
// console.log('user: ', user);
// console.log('properties: ', Object.keys(user));

console.log('--- Getter/Setter function ---');
Object.defineProperty(user, 'fullName', {
	// value: 'Oleh Kazban', -> Exception will be trown
	// writable: false, -> Exception will be trown
	get: function() { return this.firstName + ' ' + this.lastName; },
	enumerable: true,
	configurable: false
});
Object.defineProperty(user, '_isAdmin', {
	value: true,
	enumerable: false,
	configurable: false,
	writable: true
});
Object.defineProperty(user, 'isAdmin', {
	get: function() { return this._isAdmin; },
	set: function(value) {
		// if (this._isAdmin !== value) {
			this._isAdmin = value;
		// }
	},
	enumerable: true,
	configurable: false
});
// Object.defineProperty(user, 'isAdmin', { // Maximum call stack exceeded exception will be thrown
// 	get: function() { return this.isAdmin; },
// 	set: function(value) {
// 		this.isAdmin = value;
// 	},
// 	enumerable: false,
// 	configurable: false
// });

console.log('user: ', user);
console.log('properties: ', Object.keys(user));

console.log('fullName: ', user.fullName);
console.log('isAdmin: ', user.isAdmin);

user.isAdmin = false;
console.log('isAdmin: ', user.isAdmin);
