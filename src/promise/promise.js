/* eslint-disable import/prefer-default-export */
// export const testPromise = new Promise((resolve, reject) => {
//   // resolve('resolve immidiatelly');
//   // reject('reject immidiatelly');
//   setTimeout(() => {
//     // resolve('Done');
//     reject('Failed');
//   }, 3000);
// });

// export function getPromise(seconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       seconds++;

//       console.log('resolve: ', seconds);

//       resolve(seconds);
//     }, 1000);
//   });
// }

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('resolve 1');

//     resolve('resolved 1');
//   }, 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('resolve 2');
//     // console.log('rejected 2');

//     resolve('resolved 2');
//     // reject('rejected 2');
//   }, 2000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('resolve 3');

//     resolve('resolved 3');
//   }, 3000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log('result: ', result);
//   })
//   .catch((error) => console.error('error: ', error));

// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log('result: ', result);
//   })
//   .catch((error) => console.error('error: ', error));

// testPromise.then(value => {
//   console.log('resolved with: ', value);

//   return 'new value';
// }).then(value => {
//   console.log('chained with: ', value);
// });

// testPromise
//   .then((value) => {
//     console.log('resolved with: ', value);

//     return 'new value';
//   })
//   .catch((error) => {
//     console.log('error: ', error);
//   });

// console.log('after subscription');

// testPromise.then(value => {
//   console.log('resolved with: ', value);

//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('value for chain');
//     }, 3000);
//   });
// }).then(value => {
//   console.log('chained with: ', value);
// });

// testPromise
//   .then(
//     (result) => {
//       console.log('finished with result: ', result);
//     },
//     (error) => {
//       console.log('finished with error: ', error);
//     }
//   )
//   .then(
//     (result) => {
//       console.log('chained with result: ', result);
//     },
//     (error) => {
//       console.log('chained with error: ', error);
//     }
//   );

// getPromise(10)
//   .then(getPromise)
//   .then(result => {
//     console.log('finally resolved: ', result);
//   });
