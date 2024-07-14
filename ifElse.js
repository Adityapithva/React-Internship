function assignGrade(score) {
    let grade;

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return grade;
}

let score1 = 95;
let score2 = 82;


console.log(`Score: ${score1}, Grade: ${assignGrade(score1)}`); 
console.log(`Score: ${score2}, Grade: ${assignGrade(score2)}`);
