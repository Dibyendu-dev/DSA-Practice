// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("promise pending");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise resolved");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("async func 2 is completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("promise 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({
//       username: "biki",
//       address: "malda",
//     });
//   }, 1000);
// });

// promiseThree.then((inputs) => {
//   console.log(inputs);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "dibyendu",
//         loc: "wb",
//       })
//     } else {
//       reject("somthing went wrong is promiseFour");
//     }
//   });
// });

// promiseFour
//   .then((user) => {
//     return user.loc;
//   })
//   .then((loc) =>{
//     console.log(loc)
//   })
//   .catch(()=>{
//     console.log("something went wrong")
//   })
//   .finally(()=>{
//     console.log("promise four completed")
//   })

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "Dibyendu-dev",
        language: "javascript",
      });
    } else {
      reject("somthing went wrong is promiseFive");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

const redPromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(console.log("red promise resolved"))
  },1000)
})

const bluePromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(console.log("blue promise resolved"))
  },3000)
})

const yellowPromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(console.log("yellow promise resolved"))
  },5000)
})

const allPromise = Promise.all([redPromise,bluePromise,yellowPromise])
 allPromise.then((v)=>{
    console.log(v);
 })