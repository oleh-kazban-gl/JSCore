// Primitives
// Numbers
var integer = 123;
var decimal = 1.23;

var positiveInfinity = Infinity;
var negativeInfinity = -Infinity;
var notNumber = NaN;

// Strings
var string1 = 'Hello';
var string2 = "World";
var templateString = `Here you can use placeholders: ${string1}, ${string2}!`;

// Booleans
var negativeConditionResult = false;
var positiveConditionResult = true;

// Null
var nullable = null;

// Undefined
var undef = undefined;

// References
// Objects
var person1 = {
	firstName: 'first1',
	lastName: 'last1',
	age: 21,
	email: 'mail@.mailbox.com'
};
var person2 = {
	firstName: 'first2',
	lastName: 'last2',
	age: 25,
	email: 'mail@.mailbox.com'
};
var person3 = {
	firstName: 'first3',
	lastName: 'last3',
	age: 28,
	email: 'mail@.mailbox.com'
};
var user = {
	person: person1,
	isRegestered: true,
	agreementAccepted: false,
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	},
	setAge: function(age) {
		this.age = age;

		return this.age;
	}
};

// Arrays
var users = [ person1, person2, person3 ];
var suggestResult = [ 'first', 'second', 'third' ];
