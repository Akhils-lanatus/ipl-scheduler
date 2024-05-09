// let arr = [
//   {
//     id: 1,
//     name: "ramesh",
//     age: 11,
//   },
//   {
//     id: 2,
//     name: "suresh",
//     age: 12,
//   },
//   {
//     id: 3,
//     name: "prakash",
//     age: 40,
//   },
// ];

// let obj = {
//   name: "rahul",
//   age: 23,
//   country: "India",
//   village: "Sathamba",
// };

// for each - array==============
// arr.forEach(element => {
//     console.log(element);
// });

// for of - array==============
// for (const iterator of arr) {
//     console.log(iterator);
// }

// for in - array , object==============
// for (const keys in arr) {
//     console.log(arr[keys]);
// }

// for (const key in obj) {
//     console.log(key , " : " , obj[key]);
// }

// let map = new Map();
// map.set("Akhil", "Gujarat");
// map.set("Sarthak", "Karachi");
// map.set("Kevish", "Gandhar");
// map.set("Nikhil", "Chinese USA");

// map.forEach(values => console.log(values))
// for (const iterator in Object.keys(map)) {
//     console.log(iterator);
// }

let mainArray = {
  labels: ["Abc", "Abc", "Def", "Def", "Abc", "Ghi"],
  xfield: { id: 1 },
  yfield: { id: 2 },
};

let counts = {};
mainArray.labels.forEach((label, index) => {
  if (!(label in counts)) {
    counts[label] = { count: 1, index: [] };
  } else {
    counts[label].count++;
  }
  counts[label].index.push(index);
});

Object.keys(counts).forEach((label) => {
  if (counts[label].count > 1) {
    counts[label].index.forEach((index, i) => {
      mainArray.labels[index] = `${i + 1} ${label}`;
    });
  }
});

counts = {};

console.log(mainArray);
