// 1. Convert the given JavaScript into ES6 syntax using an arrow function and filter.

const arr = [
    {"name":"chevy", "count": 2},
    {"name":"ford", "count": 5},
    {"name":"acura", "count": 3},
    {"name":"honda", "count": 16},
];

const newArr => [].filter();

for(let i= 0; i < arr.length; i++){
    if(arr[i].name === "ford" ){
        newArr.push(arr[i]);
    }
}

console.log("Filter results:", newArr);

_______________________________________________________________________________

// 2. Given the function, use the ES6 we covered to combine the two arrays.
// (Hint! You will need to use the spread operator)

const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = [...arr, 'Andrew', 'Tasha', 'Carol', 'George'];

function addNewStudent(array, newArray) {
for(let i = 0; i < newArray.length; i++) {
    array.push(newArray[i]);
}
}

addNewStudent(arr, newStudents);
