function totalFine(fare) {
  if (typeof fare !== "number") {
    return "Invalid";
  } else if (fare <= 0) {
    return "Invalid";
  } else {
    const fine = fare + fare * (20 / 100) + 30;
    return fine;
  }
}

const result = totalFine(200);
const result2 = totalFine(0);
const result3 = totalFine(50);
const result4 = totalFine(552);
const result5 = totalFine(-35);
const result6 = totalFine("65");
const result7 = totalFine("Gorib tai taka nai");
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
