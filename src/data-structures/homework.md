This code is not optimal:
```
user[Symbol.iterator] = function () {
  let index = 0;
  let _that = this;
  return {
    next: function() {
      return {
        done: index >= _that.roles.length ? true : false,
        value: _that.roles[index++]
      }
    }
  }
};
```
Please think about possible ways of optimization, the output result must be the same as this code.

---

The code from lecture iterates over the roles field. It is necessary to modify the iterator from the lecture and:
- iterate over all object fields
- in case if the field is an Object or an Array it is necessary to use custom iterator and iterate over their fields too. The level of nesting will be 1 - if there are arrays or objects inside their parents we won't iterate over their fields.

---

Play around Sets. Override the built-in iterator, that will skip in for-of cycle objects with the same unique field, for example - Id.
