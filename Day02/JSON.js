//JSON
//{key:value}

console.log("JSON Intro")
let student = {regno:'2021/ICT/60',name:'Dilki',age:23,course:'IT',skills:['java','JS','c++']}
console.log(student)
console.log(student.name)

//Define 10 students JSON
//Store it in an Array
//Find the female students
//Find the students who are following IT course
//Find the max and average GPA among the students

console.log("Question:")
let students = [
{regno:'2021/ICT/01',name:'Emy',age:21,gender:'Female',course:'IT',gpa:3.6},
{regno:'2021/ICT/02',name:'John',age:22,gender:'Male',course:'IT',gpa:2.4},
{regno:'2021/ICT/03',name:'Ama',age:21,gender:'Male',course:'Bio',gpa:3.7},
{regno:'2021/ICT/04',name:'Emma',age:23,gender:'Female',course:'Maths',gpa:3.1},
{regno:'2021/ICT/05',name:'Rose',age:22,gender:'Female',course:'IT',gpa:3.8},
{regno:'2021/ICT/06',name:'Liso',age:22,gender:'Male',course:'Bio',gpa:2.7},
{regno:'2021/ICT/07',name:'James',age:21,gender:'Male',course:'Bio',gpa:3.4},
{regno:'2021/ICT/08',name:'Safia',age:22,gender:'Female',course:'IT',gpa:3.8},
{regno:'2021/ICT/09',name:'Ann',age:22,gender:'Female',course:'Maths',gpa:3.9},
{regno:'2021/ICT/10',name:'Mark',age:23,gender:'Male',course:'Maths',gpa:2.9},
]
console.log(students)

let femaleStudents = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].gender == 'Female') {
        femaleStudents.push(students[i]);
    }
}
console.log("Female Students:", femaleStudents);

let itStudents = [];
for (let j = 0; j < students.length;j++) {
    if (students[j].course == 'IT') {
        itStudents.push(students[j]);
    }
}
console.log("IT Students:", itStudents);

let totalGPA = 0;
let maxGPA = students[0].gpa;

for (let k = 0; k < students.length; k++) {
    totalGPA += students[k].gpa;
    if (students[k].gpa > maxGPA) {
        maxGPA = students[k].gpa;
    }
}

let avgGPA = totalGPA / students.length;
console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));