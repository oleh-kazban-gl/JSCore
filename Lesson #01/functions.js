// Function declaration
function addDec(arg1, arg2) {
	return arg1 + arg2;
}

// Function expression
var addExp = function (arg1, arg2) {
	return arg1 + arg2;
};

// Self-defining function
var selfDef = function () {
	console.log('Initialization');
	console.log('Phaze 1');

	selfDef = function () {
		console.log('Phaze 2');

		selfDef = function () {
			console.log('Phaze 3');
		};
	};
};

selfDef();
selfDef();
selfDef();

// IIFE - Immediately Invoked Function Expression
(function (n) {
	var result = 1;

	for (var i = 1; i <= n; i++) {
		result *= i;
	}

	console.log("Factorial of " + n + " = " + result);
}(4));

// Functions-constructors
function Vehicle(type, color) {
	var status = 'stopped';
	var self = this;
	// var arrLogger = () => {
	// 	console.log(`${this.type} status: ${status}`);
	// };

	this.type = type;
	this.color = color;
	this.startEngine = function () {
		status = 'started';
		// logger();
		arrLogger();
	};
	this.stopEngine = function () {
		status = 'stopped';
		// logger();
		arrLogger();
	};

	// function logger() {
	// 	console.log(`${self.type} status: ${status}`);
	// }
}

var vehicle = new Vehicle('abstract vehicle', 'black');
console.log('vehicle instance: ', vehicle);
vehicle.startEngine();
vehicle.stopEngine();
