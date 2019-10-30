export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export const arrowAdd = (a, b) => a + b;
export const arrowMultiply = (a, b) => a * b;
export const fabrique = (userName, age, sex) => ({
  userName: userName,
  age: age,
  sex: sex
});

const singleArg = arg => 'pre ' + arg;

const greetUser = user => {
  if (user) {
    console.log(`Greetings, ${user}`);

    return 'Handshake';
  } else {
    console.log(`Tell me your name first!`);
  }
};

// console.log('singleArg: ', singleArg(123));

// greetUser('Oleh');
// console.log(greetUser('Oleh'));

// greetUser();
// console.log(greetUser());

// console.log(fabrique('Oleh'));
