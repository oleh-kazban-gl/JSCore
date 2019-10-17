'use strict';

// Numbers -> Strings
console.log('\n\rNumbers -> Strings');
console.log('(123).toString() = ', (123).toString());
console.log('(100 + 23).toString() = ', (100 + 23).toString());
console.log('String(123) = ', String(123));
console.log('String(100 + 23) = ', String(100 + 23));

console.log('"" + 123 = ', "" + 123);

// Strings -> Numbers
console.log('\n\rStrings -> Numbers');
console.log('+"0123.45" = ', +'0123.45');
console.log('+"0123q45" = ', +'0123q45');
console.log('"0123.45" * 1 = ', '0123.45' * 1);
console.log('"abc" * 1 = ', 'abc' * 1);
console.log('"0123.45" / 1= ', '0123.45' / 1);
console.log('"abc" / 1 = ', 'abc' / 1);

console.log('Number("123") = ', Number('123'));
console.log('Number("") = ', Number(''));
console.log('Number(" ") = ', Number(' '));
console.log('Number("abc") = ', Number('abc'));
console.log('Number("123.45") = ', Number('123.45'));
console.log('Number("123 45") = ', Number('123 45'));
console.log('Number("123q45") = ', Number('123q45'));

console.log('parseInt("abc") = ', parseInt('abc'));
console.log('parseInt("0123.45") = ', parseInt('0123.45'));
console.log('parseInt("123abc456") = ', parseInt('123abc456'));
console.log('parseInt("abc123") = ', parseInt('abc123'));

console.log('parseFloat("abc") = ', parseFloat('abc'));
console.log('parseFloat("0123.45") = ', parseFloat('0123.45'));
console.log('parseFloat("123abc456") = ', parseFloat('123abc456'));
console.log('parseFloat("abc123") = ', parseFloat('abc123'));

// Booleans -> Strings
console.log('\n\rBooleans -> Strings');
console.log('"" + false', '' + false);
console.log('"" + true', '' + true);
console.log('String(false) = ', String(false));
console.log('String(true) = ', String(true));

// Booleans -> Numbers
console.log('\n\rBooleans -> Numbers');
console.log('Number(true) = ', Number(true));
console.log('Number(false) = ', Number(false));
console.log('+true = ', +true);
console.log('+false = ', +false);
console.log('false * 1 = ', false * 1);
console.log('false / 1 = ', false / 1);
console.log('true * 1 = ', true * 1);
console.log('true / 1 = ', true / 1);

// Strings -> Booleans
console.log('\n\rStrings -> Booleans');

console.log('Boolean("000") = ', Boolean("000"));
console.log('Boolean("") = ', Boolean(""));
console.log('Boolean(" ") = ', Boolean(" "));
console.log('Boolean(0) = ', Boolean(0));
console.log('Boolean(-100) = ', Boolean(-100));
console.log('Boolean(Infinity) = ', Boolean(Infinity));
console.log('!!"true" = ', !!"true");
console.log('!!"false" = ', !!"false");
console.log('!!" " = ', !!" ");
console.log('!!"" = ', !!"");

// Automatic type conversion
console.log('\n\rAutomatic type conversion');
console.log('5 + null', 5 + null);
console.log('"5" + null', '5' + null);
console.log('"5" + 2', '5' + 2);
console.log('"5" - 2', '5' - 2);
console.log('"5" * "2"', '5' * '2');

// Original Value		Converted to Number		Converted to String		Converted to Boolean
// false				0						"false"					false
// true					1						"true"					true
// 0					0						"0"						false
// 1					1						"1"						true
// "0"					0						"0"						true
// "000"				0						"000"					true
// "1"					1						"1"						true
// NaN					NaN						"NaN"					false
// Infinity				Infinity				"Infinity"				true
// -Infinity			-Infinity				"-Infinity"				true
// ""					0						""						false
// "20"					20						"20"					true
// "twenty"				NaN						"twenty"				true
// []					0						""						true
// [20]					20						"20"					true
// [10, 20]				NaN						"10,20"					true
// ["twenty"]			NaN						"twenty"				true
// ["ten", "twenty"]	NaN						"ten,twenty"			true
// function() { } 		NaN						"function(){}"			true
// { } 					NaN						"[object Object]"		true
// null					0						"null"					false
