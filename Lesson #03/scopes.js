var global_a = 'global a';
var global_b = 'global b';

function getGlobalVariable(name) {
	console.log(name);
}

function concat() {
	return global_a + ', ' + global_b;
}

getGlobalVariable(global_a);
getGlobalVariable(global_b);

console.log(concat());

function greet() {
	var _name = 'Oleh';

	return function() { console.log(`Hi ${_name}`); };
}

_name = 'John';

var greeting = greet();
greeting();

function externalGreet(name) {
	console.log(`Hi ${name}!`);
	internalGreet(name);

	function internalGreet(name) {
		console.log(`${name}, you won't see me from the outside ;)`);
	}
}

externalGreet('Oleh');
// internalGreet('Oleh');