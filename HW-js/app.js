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