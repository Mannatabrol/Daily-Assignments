/**Objective: Develop a program that calculates grades based on a score.
Instructions:Ask the user for their score using prompt().Use if/else if to assign a grade (A, B, C, D, F) based on the score.Display the grade with alert() or console.log().*/


alert("Let us know your grade")
let score = parseInt(prompt("Enter your score"))

if (score >= 90) {
    alert("Your grade is A")
}
else if (score < 90 && score >= 80) {
    alert("Your grade is B")
}
else if (score < 80 && score >= 70) {
    alert("Your grade is C")
}
else if (score < 70 && score >= 60) {
    alert("Your grade is D")
}
else if (score < 60 && score >= 50) {
    alert("Your grade is E")
}
else if (score < 50 && score >= 40) {
    alert("Your grade is F")
}

else {
        alert("You have failed this exam")
}