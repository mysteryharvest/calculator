let val;
let resultP;
let submitButton;


// preload JSON data
function preload(){
  myDictionary = loadJSON("words.json");
}

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
    // if second of a double letter (OO, TT, MM, DD, etc),
    // just skip.
    if (word[i] == word[i-1] && word[i] != 'O' && word[i] != 'E') {
      return;
    }
    switch (word[i]) {
      case 'A':
        result += 10;
      case 'E':
        if (word[i - 1] == 'E') { // Preceding 'E' handled, skip
          return;
        }
        else if (word[i + 1] == 'E') { // deal with double EE
          result += 50;
        }
        else {
          result += 20;
        }
      case 'I':
        result += 30;
      case 'O':
        if (word[i - 1] == 'O') { // Preceding 'O' handled, skip
          return;
        }
        else if (word[i + 1] == 'O') { // deal with double OO
          result += 60;
        }
        else {
          result += 40;
        }
      case 'U':
          result += 70;
      case 'G':
        result += 80;
      case 'M':
        result += 90;
      case 'N':
        result += 100;
      case 'H':
        if (word[i - 1] == 'C' || word[i - 1] == 'S'|| word[i - 1] == 'T' || word[i - 1] == 'P') {
          return; // Let the s, c, t, p deal with it.
        } else {
          result += 5;
        }
      case 'S':
        if (word[i + 1] == 'H') {
          result += 2;
        } else {
          result += 3;
        }
      case 'Z':
        result += 4;
      case 'F':
        result += 6;
      case 'R':
        result += 7;
      case 'Y':
        result += 8;
      case 'J':
        result += 9;
      case 'B':
        result += 1;
      case 'P':
        if (word[i + 1] == 'H') {
          result += 6;
        } else {
          result += 2;
        }
      case 'D':
        result += 4;
      case 'K':
        result += 5;
      case 'L':
        result += 6;
      case 'W':
        result += 7;
      case 'V':
        result += 8;
      case 'C':
        if (word[i + 1] == 'H') {
          result += 1;
        } else {
          result += 5;
        }
      case 'Q':
        result += 12;
      case 'X':
        result += 8;
      case 'T':
        if (word[i + 1] == 'H') {
          result += 9;
        } else {
          result += 3;
        }
    }
  }
 
  changeNumericalValue(result);
  changeCorrespondenceText(myDictionary[result]);
}
 
function changeNumericalValue(numericalValue) {
  var html = "<h3>Numerical Value:</h3>" + numericalValue;
  document.getElementById("numericalValue").innerHTML = html; 
}

function changeCorrespondenceText(words){
  var html = "<h3>Correspondences: </h3><ul>";
  words.forEach(function(word, index) {
    html = html + "<li>" + word + "</li>"; 
  });
  html = html + "</ul>";    
 
  document.getElementById("correspondences").innerHTML = html;
}
