'use strict';

// https://api.github.com/users?since=135
// https://api.github.com/users/octocat

function getUser(username) {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', `https://api.github.com/users/${username}`, false);

	xhr.send();

	if (xhr.status != 200) {
		console.error(xhr.status + ': ' + xhr.statusText);
	} else {
		console.info(xhr.responseText);
	}
}

function getUsers(since) {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', `https://api.github.com/users?since=${since}`, false);

	xhr.send();

	if (xhr.status != 200) {
		console.error(xhr.status + ': ' + xhr.statusText);
	} else {
		console.info(xhr.responseText);
	}
}

// getUser('octocat');
// getUsers(135);

// https://api.github.com/users?since=135
// https://api.github.com/users/octocat

// https://api.github.com/users?since=number/{id}
// https://api.github.com/users

function processUsers(users) {
	users
		.map(user => {
			return {
				name: user.login,
				id: user.id,
				type: user.type
			};
		})
		.forEach(user => {
			console.log(`${user.id} : ${user.name} : ${user.type}`);
		});
}

function fetchUrl(url) {
	return new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();

		// xhr.timeout = 100;

		xhr.open('GET', url); // GET | POST | PUT | DELETE

		xhr.onreadystatechange = function (state) {
			console.log('onreadystatechange: ', state);
		};
		xhr.onprogress = function (state) {
			console.log('onprogress: ', state);
		};
		xhr.onloadstart = function (state) {
			console.log('onloadstart: ', state);
		};
		xhr.onload = function (state) {
			console.log('onload: ', state);
		};
		xhr.onloadend = function (state) {
			console.log('onloadend: ', state);
			console.log('response: ', xhr.response);
			console.log('response: ', xhr.responseText);
			console.log('response: ', xhr.responseType);

			var response = JSON.parse(xhr.response);

			resolve({
				response: Array.isArray(response) ? response : [response],
				responseType: xhr.responseType,
				reponseUrl: xhr.responseURL,
				status: xhr.status,
				statusText: xhr.statusText
			});
		};
		xhr.onerror = function (state) {
			console.log('onerror: ', state);
			reject({
				status: xhr.status,
				statusText: xhr.statusText
			});
		};
		xhr.onabort = function (state) {
			console.log('onabort: ', state);
			reject({
				statusText: 'Aborted'
			});
		};
		xhr.ontimeout = function (state) {
			console.log('ontimeout: ', state);
			reject({
				statusText: 'Timeout'
			});
		};
		xhr.send();
	});
}

function getAndProcessUsers() {
	fetchUrl('https://api.github.com/users/octocat') //ksdgfksdh
		.then((response) => {
			console.log('response: ', response);
			processUsers(response.response);
		})
		.catch(error => {
			console.error('ERROR: ', error);
		});
}

getAndProcessUsers();