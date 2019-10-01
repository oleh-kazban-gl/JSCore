var arr1 = [1,2,3,4,5,6,7,8,9,10];
var arr2 = [-10,1,2,3,4,5,6,7,8,9,10];

arr1.forEach(function(elem, index) {
	console.log(`element: ${elem}, index: ${index}`);
});

var even = arr1.filter(function(elem) {
	return elem % 2 === 0;
});

var odd = arr1.filter(function(elem) {
	return elem % 2 !== 0;
});

// arr1.every()

// console.log('arr: ', arr1);
console.log('even: ', even);
console.log('odd: ', odd);

console.log('positive: ', arr2.every(function(elem) { return elem >= 0; }));
console.log('negative: ', arr2.some(function(elem) { return elem < 0; }));
console.log(arr1.map(function(elem) { return elem * 10; }));