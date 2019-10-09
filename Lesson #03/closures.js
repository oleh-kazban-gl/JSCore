// Simple example of closure
function getCounter() {
	var counter = 0;

	return function() {
		console.log('counter: ', counter);
		counter++;
	};
}

var counter = getCounter();

counter();
counter();
counter();
counter();
counter();

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

var timer = getTimer();

timer.start();
timer.start();
timer.stop();
timer.stop();

// IIFE
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
