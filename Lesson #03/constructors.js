'use strict';

function Person(
	firstName,
	lastName,
	age,
	sex,
	address
) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.sex = sex;
	this.address = address;
}

Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
};
Person.prototype.toString = function() {
	var keys = Object.keys(this);
	
	keys.forEach(key => {
		console.log(`${key} : ${this[key]}`);
	});
};

var person = new Person('Oleh', 'Kazban', 39, 'M', 'kazban.oleh@mailbox.com');
// person.__proto__.getFullName = function () {
// 	return `${this.lastName} ${this.firstName}`;
// };
// console.log('person: ', person);
// console.log('person fullname: ', person.getFullName());
// person.toString();

function User(person) {
	this.person = person;
}

Object.defineProperty(User.prototype, 'role', {
	value: 'user',
	writable: true,
	enumerable: false,
	configurable: false
});

User.prototype.getRole = function() {
	return this.role;
};
User.prototype.setRole = function(role) {
	this.role = role;
};

var user = new User(person);
user.setRole('globalAdmin');

console.log('person: ', person);
console.log('person full name: ', person.getFullName());
console.log('user: ', user);
console.log('user role: ', user.role);

function Creature(name) {
	this.name = name;
	this.applyCommand = function(command) {
		console.log(command);
	};

}
Creature.prototype = {
	alive: true
};
Creature.prototype.getName = function () {
	return this.name;
};

var creature = new Creature('creature');

function Dog(name) {
	this.name = name;
}
Dog.prototype = Object.create(Creature.prototype);
Dog.prototype.bark = function() {
	console.log(this.name, 'Bark');
};

function Shepherd() {

}
Shepherd.prototype = Object.create(Dog.prototype);
Shepherd.prototype.attack = function () {
	console.log('Attacking');
};
Shepherd.prototype.defense = function () {
	console.log('On duty: defense');
};
Shepherd.prototype.shepherd = function() {
	console.log('On duty: shepherd');
};
Shepherd.prototype.bark = function() {
	console.log('Bark very loudly');
};

// function Cat(name) {
// 	this.name = name;
// }
// Cat.prototype = Object.create(Creature.prototype);
// Cat.prototype.meow = function () {
// 	console.log(this.name, 'Meow');
// };

// function Rabbit(name) {
// 	this.name = name;
// }
// Rabbit.prototype = Object.create(Creature.prototype);
// Rabbit.prototype.jump = function () {
// 	console.log(this.name, 'Jump');
// };

// function Fish(name) {
// 	this.name = name;
// }
// Fish.prototype = Object.create(Creature.prototype);
// Fish.prototype.swim = function () {
// 	console.log(this.name, 'Swim');
// };

// function Bird(name) {
// 	this.name = name;
// }
// Bird.prototype = Object.create(Creature.prototype);
// Bird.prototype.fly = function () {
// 	console.log(this.name, 'fly');
// };

var dog = new Dog('Bucks');
var shepherd = new Shepherd('Max');

console.log(creature);
console.log(creature.getName());
console.log(creature.alive);
console.log(creature.applyCommand('seat'));


console.log(dog);
dog.bark();
console.log(dog.getName());
console.log(dog.alive);
// console.log(dog.applyCommand('seat'));

// console.log(shepherd);
// console.log(shepherd.alive);

// shepherd.attack();
// shepherd.defense();
// shepherd.bark();
// shepherd.shepherd();