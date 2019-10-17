// Simple example of closure
function getCounter(counterName) {
	var counter = 0;
	var name = counterName;

	return function() {
		console.log(`Counter: ${name}: ${counter}`);
		counter++;
	};
}

// var counter = getCounter('counter#1');
// var counter2 = getCounter('counter#2');

// counter();
// counter();
// counter();

// counter2();
// counter2();
// counter2();

// Example with simple API
function getTimer() {
	var status = 'stopped';
	var timer = {
		start: start,
		stop: stop
	};

	function start() {
		if (status != 'started') {
			status = 'started';

			console.log(`Timer status: ${status}`);
		} else {
			console.log(`Timer is already started: status: ${status}`);
		}
	}

	function stop() {
		if (status != 'stopped') {
			status = 'stopped';

			console.log(`Timer status: ${status}`);
		} else {
			console.log(`Timer is already stopped: status: ${status}`);
		}
	}

	return timer;
}

// var timer = getTimer();

// timer.start();
// timer.start();
// timer.stop();
// timer.stop();

// IIFE -> (function(arg) { ... })(123);
(function(arg) {
	var timer = getTimer();

	timer.start();
	timer.stop();

	console.log(`I have passed arguments: ${arg}`);
})(10);
(function (arg) {
	var timer = getTimer();

	timer.start();
	timer.stop();
	timer.start();
	timer.stop();

	console.log(`I have passed arguments: ${arg}`);
})(100);
