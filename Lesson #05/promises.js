'use strict';

var promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('result');
	}, 1000);
});

promise
	.then(
		result => {
			console.info('Fulfilled: ' + result);
		},
		error => {
			console.error('Rejected: ' + error);
		}
	);

var order;
var payment;
var shipment;

function getPayment() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			var dec = Math.random();

			if (dec >= 0.25) {
				resolve({
					cardHolder: 'Oleh Kazban',
					cardNumber: '1234567890',
					cvv2: '123'
				});
			} else {
				reject('Connection timeout');
			}
		}, 2000);
	});
}

function getShipmentInfo() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			var dec = Math.random();

			if (dec >= 0.25) {
				resolve({
					address: 'Kharkiv, Ukraine',
					sender: 'Oleh Kazban',
					recepient: 'Ludmila Kazban',
					phone: '000000'
				});
			} else {
				reject('Connecton timeout');
			}
		}, 3000);
	});
}

function makeOrder() {
	var subscriptions = [processShipment(), processPayment()];
	Promise.all(subscriptions).then(() => {
		console.log('Order was placed successfully');
		processOrder();
	}, () => {
		console.log('Order process failed');
	});
}

function processPayment() {
	return new Promise((resolve, reject) => {
		if (!payment) {
			getPayment()
				.then((result) => {
					console.log('Payment received');
					storePayment(result, resolve);
				})
				.catch((error) => {
					console.log('Payment process failed: ', error);
					getPayment().then((result) => {
						console.log('Payment received');
						storePayment(result, resolve);
					});
				});
		}
	});
}

function storePayment(payment, resolve) {
	console.log('payment info: ', payment);
	payment = Object.assign({}, payment);
	resolve();
}

function processShipment() {
	return new Promise((resolve, reject) => {
		if (!shipment) {
			getShipmentInfo()
				.then((result) => {
					console.log('Shipment received');
					storeShipment(result, resolve);
				})
				.catch((error) => {
					console.log('Shipment process failed: ', error);
					getShipmentInfo().then((result) => {
						console.log('Shipment received');
						storeShipment(result, resolve);
					});
				});
		}
	});
}

function storeShipment(shipment, resolve) {
	console.log('Shipment info: ', shipment);
	shipment = Object.assign({}, shipment);
	resolve();
}

function processOrder() {
	if (!payment && !shipment) {
		console.error('Error: Please provide with necessary data');
	} else {
		console.log('Success: prder was successfully created');
		console.log('payment: ', payment);
		console.log('shipment: ', shipment);
	}

}

makeOrder();