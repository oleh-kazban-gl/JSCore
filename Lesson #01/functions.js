
console.log('1, 2 = ', add(1, 2));
console.log('"Hello", "World" = ', add("Hello", "World"));
console.log('true, false = ', add(true, false));


// console.log('0, false = ', 0 + false);
// console.log('0, true = ', 0 + true);

function add(a, b) {
	return a + b;
}

var multiply = function (a, b) {
	return a * b;
};

// console.log('10, 2', multiply(10, 2));

// var arrow = (a, b) => a + b;
// console.log(arrow(10, 20));
