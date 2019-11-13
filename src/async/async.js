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

// promise2
//   .then((result) => {
//     console.log('result: ', result);
//   })
//   .catch((error) => console.error('error: ', error));

// Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log('result: ', result);
//   })
//   .catch((error) => console.error('error: ', error));

// function getAllPromises() {
//   return Promise.all([promise1, promise2, promise3]);
// }

// async function getPromise() {
//   const result1 = await promise1;
//   const result2 = await promise2;
//   const result3 = await promise3;

//   console.log('getPromise await result1: ', result1);
//   console.log('getPromise await result2: ', result2);
//   console.log('getPromise await result3: ', result3);
//   return result1;
// }

// async function getPromises() {
//   const result = await getAllPromises();

//   console.log('getPromises await result: ', result);
// }

// getPromise();
// getPromises();
// console.log('sync');
