function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let total = 0;
  let passSubjects = 0;
  let failSubjects = 0;

  for (const mark of marks) {
    total = total + mark;
    if (mark < 40) {
      failSubjects++;
    } else if (mark >= 40) {
      passSubjects++;
    }
  }
  const finalScore = Math.round(total / marks.length) || 0;
  const pass = passSubjects;
  const fail = failSubjects;
  return {
    finalScore: finalScore,
    pass: pass,
    fail: fail,
  };
}

const result2 = resultReport([]);
const result3 = resultReport([98, 87, 67, 91, 92, 33, 87]);
const result4 = resultReport([99, 87, 67, 12, 87]);
const result5 = resultReport([99]);
const result6 = resultReport(100);

console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
