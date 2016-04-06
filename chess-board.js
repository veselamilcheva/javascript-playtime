function myChessBoard(char1, char2, sizing) {
  var output = "";
  for (var i = 0; i < sizing; i++) {
    for (var j = 0; j < sizing; j++) {
      if (j % 2 == 0 ^ i % 2 == 0) {
        output += char1;
      } else {
        output += char2;
      }
    }
    output += "\n";
  }
  
  return output;
}

console.log(myChessBoard("#", " ", 8));
