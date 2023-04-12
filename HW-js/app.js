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

function unique(arr) {
    return Array.from(new Set(arr));
}

const values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(values)); // Hare, Krishna, :-O
