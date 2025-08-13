function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const string = str.replaceAll(" ", "");
  const charCapital = string.toUpperCase();
  return charCapital;
}

const result = onlyCharacter("  h e llo wor   ld");
const result2 = onlyCharacter("Cy   bar- At  tac k  ");
const result3 = onlyCharacter(" ha ck m e 1 @ru.c  n  ");
const result4 = onlyCharacter("Serv er : : Do wn");
const result5 = onlyCharacter(["hack", "me"]);
const result6 = onlyCharacter(true);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
