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
console.log(result);
