
const student = {
  name: "John",
  grade: "A"
};

const hasGrade = student.hasOwnProperty("grade");
const hasAge = student.hasOwnProperty("age");

console.log("Has 'grade'?", hasGrade); 
console.log("Has 'age'?", hasAge); 