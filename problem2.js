function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const string = str.replaceAll(" ", "");
  const charCapital = string.toUpperCase();
  return charCapital;
}

const result = onlyCharacter("Cy   bar- At  tac k  ");
console.log(result);
