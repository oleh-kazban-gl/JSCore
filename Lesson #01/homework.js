// Explain the answers:

[4] * [4]					// 16
[] * []						// 0
[] * {}						// NaN
[4, 4] * [4, 4]				// NaN
({}*{})						// NaN
true + false				// 1
12 / "6"					// 2
"number" + 15 + 3			// 'number153'
15 + 3 + "number"			// '18number'
[1] > null					// true
"foo" + +"bar"				// 'fooNaN'
'true' == true				// false
false == 'false'			// false
null == ''					// false
!!"false" == !!"true"		// true
['x'] == 'x'				// true 
[] + null + 1				// 'null1'
[1, 2, 3] == [1, 2, 3]		// false
{} + [] + {} + [1]			// '0[object Object]1'
!+[] + [] + ![]				// 'truefalse'
new Date(0) - 0				// 0
new Date(0) + 0				// 'Thu Jan 01 1970 02:00:00(EET)0'