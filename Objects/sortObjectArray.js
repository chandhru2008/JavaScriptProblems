const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

users.sort((a, b) => a.age - b.age);

console.log("Sorted array by age:", users);