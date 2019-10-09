// Explain the answers:
```
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
```

Create separate folder in your local repo, call it "string", inside file string.repeat.js for example with your implementation of task.

String:

- .repeat(times: number): string - Writes to console your string n times // 'test'.repeat(5)
- .replaceAt(substring: string, replacer: string): string - replaces a given substring by replacer if substring is present
- .countSymbols(symbol: string): number - return amount of symbols in a given string // 'test'.countSymbols('t')
- .repeatSubstring(substring: string, times): string - Returns a given substring if is present with multiplication by times
- .hasVowels(string: string): boolean - Returns true if string has vowels
- .hasСonsonants(string: string): boolean - Returns true if string has consonants
- .normalize(string: string): string - Returns a given substring in a lower case

Array
- .hasNumber(number: Array<number>): boolean - Returns true if a given array has a number from arguments
- .getOdd(): Array<number> - Returns a new array with only odd numbers
- .getEven(): Array<number> - Returns a new array with only even numbers
- .concatenate(Array<number>, ...): Array<number> - Returns a new array from all given arrays in arguments
- .concatenateUnique(Array<number | string>, ...): Array<number | string> - Returns a new array from all given arrays in arguments with unique records

Object
- .getKeys(): Array<string> - returns an array of objects keys (don't use Objects.keys() :))
- .getValues(): Array<any> - returns an array of values
- .getKeyValuePair(key: string): string - returns a key"value pair in the next format "[key] : value"
- .createShallowCopy(sourceObj: object): object - returns "shallow" copy of provided object. The references of the first level must be copied, if there are references deeped, provide a link, not a copy.
- .createDeepCopy(sourceObj: object): object - returns a deep copy of provided object. Assume that field may contain other references, they also must be deep copied. Do not use Object.assign() method.
- .createFlatObject(providedObj: object): object - returns a new object with "flat" structure - all field deeper than 1 level must be moved to the first level. If you have fields with the same names rename them using name of the parent as prefix:
```
	{
		field1: {
			name: 'User1',
			age: 20
		},
		field2: {
			name: 'User2',
			age: 22
		},
		field3: {
			name: 'User3',
			age: 24
		}
	}
	=>
	{
		field1_name: 'User1',
		field1_age: 20
		...
	}
```
- .getPropertyValue(obj: object): any - returns a value of provided key name. In case if you have duplicated results (see example above), return an array of values. Throw an exception in case if you don't have any results.