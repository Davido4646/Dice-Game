var randomnumber1 = Math.floor(Math.random() * 6 + 1);
var imgrandomnumber1 = "images/dice" + randomnumber1 + ".png";
document.querySelector(".img1").setAttribute("src", imgrandomnumber1);

var randomnumber2 = Math.floor(Math.random() * 6 + 1);
var imgrandomnumber2 = "images/dice" + randomnumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imgrandomnumber2);

var randomnumber3 = Math.floor(Math.random() * 6 + 1);
var imgrandomnumber3 = "images/dice" + randomnumber3 + ".png";
document.querySelector(".img3").setAttribute("src", imgrandomnumber3);

if (randomnumber1 > randomnumber2 && randomnumber1 > randomnumber3) {
  document.querySelector("h1").innerHTML ="🚩Player 1 wins";
}
else if (randomnumber2 > randomnumber1 && randomnumber2 > randomnumber3) {
  document.querySelector("h1").innerHTML ="Player 2 wins🚩";
}
else if (randomnumber3 > randomnumber1 && randomnumber3 > randomnumber2) {
  document.querySelector("h1").innerHTML ="Player 3 wins🚩";
}
else if (randomnumber1 === randomnumber2 && randomnumber1 > randomnumber3) {
  document.querySelector("h1").innerHTML ="Player 1 & 2 wins🚩";
}
else if (randomnumber2 === randomnumber3 && randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML ="Player 2 & 3 wins🚩";
}
else if (randomnumber1 === randomnumber3 && randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML ="Player 1 & 3 wins🚩";
}
else {
  document.querySelector("h1").innerHTML ="Draw!";
}
