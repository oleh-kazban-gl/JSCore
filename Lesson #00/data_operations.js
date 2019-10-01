// Primitives
// Numbers
var int1 = 1;
var int2 = 2;

console.log('int1 + int2 = ', int1 + int2);
console.log('int1 - int2 = ', int1 - int2);
console.log('int1 / int2 = ', int1 / int2);
console.log('int1 * int2 = ', int1 * int2);

console.log('int1 inversion = ', -int1);

console.log('int1 / 0 = ', int1 / 0);
console.log('-int1 / 0 = ', -int1 / 0);
console.log('"0" / 0 = ', '0' / 0);
console.log('"10" / 0 = ', '10' / 0);
console.log('0 / 0 = ', 0 / 0);
console.log('"Hello" + true = ', "Hello" + true);

// Strings
var str1 = 'Hello';
var str2 = 'World';
var str3;

console.log('str1 + str2 = ', str1 + str2);
console.log('"0" + str1 = ', '0' + str1);
console.log('"0" - 2 = ', '0' - 2);

// Booleans
var positive = true;
var negative = false;
var negativeInf = -Infinity;

console.log('true && true: ', positive && positive);
console.log('true && false: ', positive && negative);
console.log('false && false: ', negative && negative);

console.log('true || true: ', positive || positive);
console.log('true || false: ', positive || negative);
console.log('false || false: ', negative || negative);

console.log('inverted false: ', !false);
console.log('inverted true: ', !true);

console.log('boolean conversion: !!str1: ', !!str1);
console.log('boolean conversion: !!str3: ', !!str3);
console.log('boolean conversion: 0: ', !!0);
console.log('boolean conversion: 1: ', !!1);
console.log('boolean conversion: null: ', !!null);
console.log('boolean conversion: undefined: ', !!undefined);
console.log('boolean conversion: +Infinity: ', !!Infinity);
console.log('boolean conversion: -Infinity: ', !!negativeInf);
console.log('boolean conversion: NaN: ', !!NaN);
