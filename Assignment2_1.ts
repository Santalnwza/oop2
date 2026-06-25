type Student = [string, number];

let students: Student[] = [
    ["Alice", 85],
    ["Bob", 72],
    ["Charlie", 48],
    ["David", 65],
    ["Emma", 92]
];

function calculateGrade(score: number): string {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
}

for (const student of students) {
    const [name, score] = student; 
    const grade = calculateGrade(score);
    
    console.log(`${name} received ${score} and grade ${grade}`);
}