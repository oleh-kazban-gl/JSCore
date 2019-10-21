'use strict';

var ENGINE_STATUS = {
	stopped: 'stopped',
	started: 'started',
};

function Vehicle(type, color, power, manufacturer, model) {
	this.type = type;
	this.color = color;
	this.power = power;
	this.manufacturer = manufacturer;
	this.model = model;
	this.engineStatus = ENGINE_STATUS.stopped;

	this.startEngine = function() {
		this.engineStatus = ENGINE_STATUS.started;
		this.logger(
			`ENGINE STATUS: ${this.manufacturer}: ${this.model} - ${this.engineStatus}`
		);
	};
	this.stopEngine = function() {
		this.engineStatus = ENGINE_STATUS.stopped;
		this.logger(
			`ENGINE STATUS: ${this.manufacturer}: ${this.model} - ${this.engineStatus}`
		);
	};
	this.brake = function() {
		var _that = this;
		this.stopEngine();
		switchOff();

		function switchOff() {
			console.log('switchOff: ', this);
			console.log('switchOff: ', _that);
		}
	};
	this.logger = function(msg) {
		console.log(msg);
	};
}

function logger(msg) {
	console.log('EXTERNAL LOGGER: ' + msg);
}

// var vehicle = new Vehicle('truck', 'black', '200', 'MAN', 'TGS 8x8');

// vehicle.startEngine();
// vehicle.logger = logger;
// vehicle.stopEngine();
// vehicle.brake();

// var _vehicle = {
// 	type: 'truck',
// 	color: 'black',
// 	power: '200',
// 	manufacturer: 'MAN',
// 	model: 'TGS 8x8',
// 	engineStatus: ENGINE_STATUS.stopped,
// };

// _vehicle.startEngine = function() {
// 	this.engineStatus = ENGINE_STATUS.started;
// 	console.log(
// 		`ENGINE STATUS: ${this.manufacturer}: ${this.model} - ${this.engineStatus}`
// 	);
// };
// _vehicle.stopEngine = function stopEngine() {
// 	console.log('stop engine: ', this);
// };

// _vehicle.startEngine();
// _vehicle.stopEngine();

// console.log('vehicle: ', vehicle);
// console.log('_vehicle: ', _vehicle);

function getContext() {
	var internal = 'internal';

	return this;
}

var _getContext = function() {
	var internal = 'internal';

	return this;
};

// console.log(getContext());
// console.log(_getContext());

var testContext = {
	internal: 'internal',
};

// console.log(getContext.call(testContext));
// console.log(getContext.bind(testContext)());
// console.log(getContext.apply(testContext));

var admin = {
	name: 'Oleh',
	age: 39,
	role: 'GLOBAL_ADMIN',
	signIn: function(msg) {
		console.log(
			'USER: ' + this.name + ', Role: ' + this.role + ' LOGGED IN'
		);

		if (!!msg) {
			console.info('MSG: ', msg);
		}
	},
	signOut: function() {
		console.log(
			'USER: ' + this.name + ', Role: ' + this.role + ' LOGGED OUT'
		);
	},
};
var user = {
	name: 'Leeloo',
	age: 38,
	role: 'REGULAR_USER',
};

admin.signIn();
// user.signIn();
admin.signIn.call(user, 'USER LOGGED IN');
admin.signIn.apply(user, ['USER LOGGED IN']);
admin.signIn.bind(user, 'USER LOGGED IN')();

///////

var users = [1990, 1965, 1937, 2005, 1998, 2001];

function arrayCalc(arr, fn) {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		result.push(fn(arr[i]));
	}
	return result;
}

function calculateAge(el) {
	return 2019 - el;
}

function isFullAge(limit, element) {
	return element >= limit;
}

var ages = arrayCalc(users, calculateAge);
var full = arrayCalc(ages, isFullAge.bind(this, 21));
var semi = arrayCalc(ages, isFullAge.bind(this, 18));

console.log(ages);
console.log('full: ', full);
console.log('semi: ', semi);
