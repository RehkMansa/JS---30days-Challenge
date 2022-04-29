let letters = ["A", "B", "C", "D", "E", "F"];
let finalColor = "";
let finalColorArray = [];
var click = 1;
let btn = document.getElementById("btn");
let cardRow = document.getElementById("row-deck");
let randomInteger;
btn.addEventListener("click", () => {
  randomInteger = randInt(9, 2);
  printColors(randomInteger);
  cardRow.innerHTML = "";
  for (let i = 0; i < randomInteger; i++) {
    let div = document.createElement("div");
    let hexCode = document.createElement("p");
    hexCode.innerHTML = finalColorArray[i];
    div.classList.add("card__content");
    div.appendChild(hexCode);
    cardRow.appendChild(div);
    div.style.backgroundColor = finalColorArray[i];
  }
});

function randInt(max, min = 2) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function printColors(num) {
  let temp = 0;
  finalColor = "";
  if (num < 0) {
    return finalColorArray;
  } else {
    for (let i = 0; i <= 5; i++) {
      temp = randInt(9);
      if (temp % 2 == 0 && temp <= 5) {
        finalColor += letters[temp];
      } else {
        finalColor += temp;
      }
    }

    finalColorArray.push("#" + finalColor);
    return printColors(num - 1);
  }
}
