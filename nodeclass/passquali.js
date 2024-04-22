
function checkPass(marks) {
    if (marks >= 55) {
        return "Pass in CSE316";
    } else if (marks >= 50) {
        return "Pass in CSE325";
    } else if (marks >= 45) {
        return "Pass in INT222";
    } else if (marks >= 40) {
        return "Pass in INT219";
    } else {
        return "Fail in All Courses";
    }
}

let studentMarks = 80;

console.log(checkPass(studentMarks));
