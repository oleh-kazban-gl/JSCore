// var vs let & const

export function testVar() {
  var test = 'test var';

  if (test) {
    var test = 'changed var';
  }

  console.log('test: ', test);
}

export function testLet() {
  let test = 'test let';

  if (test) {
    let test = 'changed let';
  }

  test = 'changed again let';

  console.log('test: ', test);
}

export function testConst() {
  const test = 'test const';

  if (test) {
    const test = 'changed const';
  }

  // test = 'changed again const';

  console.log('test: ', test);
}
