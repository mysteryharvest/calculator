let input;

function setup() {
  input = createInput();
  input.position(20, 65);

  button = createButton("Submit");
  button.position(input.x + input.width, 65);
  button.mousePressed(calculateValue);
}

function calculateValue() {
  let word = input.value();
  word = word.toUpperCase();
  let value = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.substring(i, i + 2) === "CH") {
      value += 1;
    } else if (word.substring(i, i + 2) === "SH") {
      value += 2;
    } else if (word[i] === "S") {
      value += 3;
    } else if (word[i] === "Z") {
      value += 4;
    } else if (word[i] === "H") {
      value += 5;
    } else if (word[i] === "F") {
      value += 6;
    } else if (word[i] === "R") {
      value += 7;
    } else if (word[i] === "Y") {
      value += 8;
    } else if (word[i] === "J") {
