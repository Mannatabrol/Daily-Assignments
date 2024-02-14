// Task 1 :-To create  an object
// Object Created
const student = {                        
    name: "Mannat Abrol",
    age: 21,
    grade: 10,
    subjects: ["C++", "Java", "JavaScript", "Operating System"],
    grades: {
        "C++": 80,
        "Java": 90,
        "JavaScript": 55,
        "Operating System": 70
      }
  };
  
  // Task 2: Bind, Apply, and Call
/* Here, we define a function displayInfo that takes a message as an argument 
 and logs the student's name, age, and grade to the console.*/
  function displayInfo(message) {
    // this is used here  to access properties (name, age, grade) of the object that the function is bound 
    // this is expected to refer to the student object
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Grade:", this.grade);
  }
  /*
   Here, we use the bind method to create a new function boundDisplayInfo that is bound to the student object.
    That is when boundDisplayInfo is called, this inside displayInfo
    will refer to the student object. We then call boundDisplayInfo and pass a message to display the student's information.
   */
  const boundDisplayInfo = displayInfo.bind(student);
  boundDisplayInfo("Student Information:");
  
//   Here, we define a function displayInfoWithMessage that takes a message as an argument. 
// Inside this function, we use the call and apply methods to invoke the displayInfo function with the object as its context.
//  This allows us to pass the message and display the student's information using both call and apply. 
  function displayInfoWithMessage(message) {
    console.log(message);
    displayInfo.call(student, "Student Information (called):");
    displayInfo.apply(student, ["Student Information (applied):"]);
  }
  
  displayInfoWithMessage("Additional Message:");

//    The main differnce between call and apply can be seen as above 
// call(): This method invokes the function with a specified this value and
//  individual arguments passed as arguments to the function.
// apply(): This method is similar to call(), but it accepts the arguments as an array.


// Task 3: Callbacks
// They are functions passed as arguments to other functions to be executed later, either synchronously or asynchronously. 
function processSubjects(subjects, callback) {
    subjects.forEach(callback);
  }
  
  function logSubject(subject) {
    console.log("Studying:", subject);
  }
  
  processSubjects(student.subjects, logSubject);
  
/*  Here, processSubjects() is a function that takes an array of subjects and a callback function as parameters.
 It iterates over each subject in the subjects array and invokes the callback function for each subject. 
 logSubject is a callback function passed to processSubjects, which simply logs each subject.*/

//  Task 4:  Map and Filter
/* Both map() and filter() are higher-order functions that iterate over an array and transform or filter its elements
//  based on the provided callback function. */

function doubleGrades(student) {
    const originalGrades = student.subjects.map(subject => student.grades[subject]);
    const doubledGrades = originalGrades.map(grade => grade * 2);
    console.log("Original Grades:", originalGrades);
    console.log("Doubled Grades:", doubledGrades);
  }
/* The above  function takes a student object as an argument.
It first uses the map() method on the student.subjects array to create a new array originalGrades. For each subject in student.subjects, it retrieves the corresponding grade from student.grades using the subject as the key.
Then, it uses another map() method on originalGrades to double each grade, resulting in a new array doubledGrades.
Finally, it logs both the original and doubled grades to the console. */
  
 function passingSubjects(student, minGrade) {
    const passedSubjects = student.subjects.filter(subject => student.grades[subject] >= minGrade);
    console.log("Subjects with grade >= " + minGrade + ":");
    passedSubjects.forEach(subject => {
      console.log(subject + ": " + student.grades[subject]);
    });
  }
  /*In the passingSubjects() function, it takes two arguments: student (an object) and minGrade (a number).
it filters the student.subjects array using the filter() method to create a new array passedSubjects. For each subject, it checks if the grade obtained from student.grades is greater than or equal to minGrade.
it then logs each subject along with its grade (from student.grades) to the console.*/
  
  doubleGrades(student);
  passingSubjects(student, 70);
  
/*These lines invoke the doubleGrades() and passingSubjects() functions with the student object as an argument and 
70 as the minimum passing grade.
this triggers the execution of the functions, and their respective output is logged to the console. */