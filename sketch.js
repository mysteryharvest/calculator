let val;
let resultP;
let submitButton;

function setup() {
  createCanvas(400, 400);

  val = createInput();
  val.position(20, 65);

  submitButton = createButton('Submit');
  submitButton.position(val.x + val.width, 65);
  submitButton.mousePressed(calculate);

  resultP = createP('');
  resultP.position(20, 100);
}

function calculate() {
  let word = val.value();
  word = word.toUpperCase();
  let result = 0;
  
  for (let i = 0; i < word.length; i++) {
    console.log("index i:" + i);
    console.log("char: " + word[i]);
    console.log("result: " + result);
    

    // if second of a double letter (OO, TT, MM, DD, etc),
    // just skip.
    if (word[i] == word[i-1] && word[i] != 'O' && word[i] != 'E') {
      break;
    }
    switch (word[i]) {
      case 'A':
        result += 10;
        break;
      case 'E':
        if (word[i - 1] == 'E') { // Preceding 'E' handled, skip
          break;
        }
        else if (word[i + 1] == 'E') { // deal with double EE
          result += 50;
        }
        else {
          result += 20;
        }
        break;
      case 'I':
        result += 30;
        break;
      case 'O':
        if (word[i - 1] == 'O') { // Preceding 'O' handled, skip
          break;
        }
        else if (word[i + 1] == 'O') { // deal with double OO
          result += 60;
        }
        else {
          result += 40;
        }
        break;
      case 'U':
        result += 70;
        break;
      case 'G':
        result += 80;
        break;
      case 'M':
        result += 90;
        break;
      case 'N':
        result += 100;
        break;
      case 'H':
        if (word[i - 1] == 'C' || word[i - 1] == 'S'|| word[i - 1] == 'T' || word[i - 1] == 'P') {
          break; // Let the s, c, t, p deal with it.
        } else {
          result += 5;
        }
        break;
      case 'S':
        if (word[i + 1] == 'H') {
          result += 2;
        } else {
          result += 3;
        }
        break;
      case 'Z':
        result += 4;
        break;
      case 'F':
        result += 6;
        break;
      case 'R':
        result += 7;
        break;
      case 'Y':
        result += 8;
        break;
      case 'J':
        result += 9;
        break;
      case 'B':
        result += 1;
        break;
      case 'P':
        if (word[i + 1] == 'H') {
          result += 6;
        } else {
          result += 2;
        }
        break;
      case 'D':
        result += 4;
        break;
      case 'K':
        result += 5;
        break;
      case 'L':
        result += 6;
        break;
      case 'W':
        result += 7;
        break;
      case 'V':
        result += 8;
        break;
      case 'C':
        if (word[i + 1] == 'H') {
          result += 1;
        } else {
          result += 5;
        }
        break;
      case 'Q':
        result += 12;
        break;
      case 'X':
        result += 8;
        break;
      case 'T':
        if (word[i + 1] == 'H') {
          result += 9;
        } else {
          result += 3;
        }
        break;
    }
  }
  resultP.html('Result: ' + result);
}
