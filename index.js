let array1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
let array2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

let uniqueSetOfUsersInArray1 = []; // Used to Store Unique Names In Array 1
let uniqueSetOfUsersInArray2 = []; // Used to Store Unique Names in Array 2
let commonUsersinArray1AndArray2 = []; // Used to Store Common Names in Both

for (let name1 of array1) {
  // Itrate Over Names In Array1
  if (array2.includes(name1)) {
    // It filters Unique Names in Array 1
    continue;
  } else {
    uniqueSetOfUsersInArray1.push(name1); // Pushes or add the unique names into uniqueSetOfUsersInArray1
  }
}

for (let name2 of array2) {
  // Itrate Over Names In Array2
  if (array1.includes(name2)) {
    // It filters Unique Names in Array 2
    continue;
  } else {
    uniqueSetOfUsersInArray2.push(name2); // Pushes or add the unique names into uniqueSetOfUsersInArray2
  }
}

for (let names of array1) {
  // Itrate Over Names In Array1
  if (array2.includes(names)) {
    // It filters Common Names in Array1 and Array2
    commonUsersinArray1AndArray2.push(names); // Pushes or add the unique names into commonUsersinArray1AndArray2
  }
}

console.log(uniqueSetOfUsersInArray1);
console.log(uniqueSetOfUsersInArray2);
console.log(commonUsersinArray1AndArray2);
