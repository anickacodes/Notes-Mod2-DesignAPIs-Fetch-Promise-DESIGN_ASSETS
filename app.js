// setTimeout(() => {
//   console.log("I should happen first");
// }, 1000); //1000 milliseconds = 1sec

// setTimeout(() => {
//   console.log("I should happen second");
// }, 5000); //5000 mllisecinds = 5sec

// setTimeout(() => {
//   console.log("I should happen third");
// }, 3000); //3000 milliseconds = 3 sec

// console.log("I should happen last");



const birthday = new Date("December 17, 1995 03:24:00")
console.log(birthday)

// setTimeout(() => {
//     console.log("I should happen first");
//     setTimeout(() => {
//       console.log("I should happen second");
//       setTimeout(() => {
//         console.log("I should happen third");
//         console.log("I should happen last");
//       }, 3000);
//     }, 5000);
//   }, 1000);

// const h1attopofpage = document.querySelector("h1");
// console.log(h1attopofpage);

// const promiseToWait = new Promise((resolve, reject) => {
    
// })
const promiseToWait = new Promise(() => {
    setTimeout(() => {
      return "I promise to wait";
    }, 1000);
  });

console.log("no params", promiseToWait) // if we do nothing to it/don't specify, it will be pending

const otherpromiseToWait = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("I promise to wait");
      }
      {
        reject("Something went wrong");
      }
    }, 1000);
  });
  
  console.log(otherpromiseToWait);

//   otherpromiseToWait.then(() => {})
  otherpromiseToWait.then((response) => {console.log("best case, resolve",response)})


const promiseToWait2 = new Promise(() => {
    setTimeout(() => {
      return "I promise to wait";
    }, 1000);
  });

console.log("no params", promiseToWait2) // if we do nothing to it/don't specify, it will be pending

const otherpromiseToWait2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve("I promise to wait");
      }
      {
        reject("Error: Something went wrong");
      }
    }, 1000);
  });
  
  console.log(otherpromiseToWait2);

//   otherpromiseToWait.then(() => {})
  otherpromiseToWait2.then((response) => {console.log("worst case" ,response)})