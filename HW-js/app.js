// Q1


//////////////////////////////////////////////////////////////

// function topSalary(salaries) {
//     let topSal = 0;
//     let topSalPerson = [];
//     for (const [name, salary] of Object.entries(salaries)) {
//         if (salary > topSal) {
//             topSal = salary;
//             topSalPerson = [name];
//         } else if (salary === topSal)
//             topSalPerson.push(name);
//     }
//     return [topSal, topSalPerson];
// }


// const [topSal, topSalPerson] = topSalary(salaries);
// console.log(topSal);
// console.log(...topSalPerson);




// Q2


// const makeFlat = arr => {
//     let numbers = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i]))
//             numbers = numbers.concat(makeFlat(arr[i]));
//         else
//             numbers.push(arr[i]);
//     }
//     return numbers;
// }

// const sort = arr => {
//     return arr.sort((a, b) => a - b).reverse();
// }

// console.log(sort(makeFlat([1, 2, [6, 7, 8, 9], 3, 4, 5, [1, 2, 3, [23, 54, 66, -1, -12]]])));



// Q3

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// const values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// console.log(unique(values)); // Hare, Krishna, :-O


//  Q4

// function aclean2(arr) {
//     const map = new Map();
//     for (const word of arr) {
//         const sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted, word);
//     }
//     return [...map.values()];
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean2(arr));



//  Q5

let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
// keys.push("more");


/// Answer : becuase map.keys() just return an itrable of keys not an array

let keys2 = [...map.keys()];
keys2.push("more");
console.log(keys2);