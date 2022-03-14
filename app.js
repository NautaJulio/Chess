let P = document.getElementsByName("Piece");
let S = document.getElementsByClassName("Space");
let Pa = [];
let selected = false;

//Initial placement
for (i = 0; i < P.length; i++) {
  if (i <= 7) {
    Pa.push(i + 1);
    P[i].setAttribute("Index", i + 1);
  } else if (i > 7 && i <= 15) {
    P[i].style.gridRowStart = 2;
    Pa.push(i + 1);
    P[i].setAttribute("Index", i + 1);
  } else if (i > 15 && i <= 23) {
    P[i].style.gridRowStart = 7;
    Pa.push(i + 33);
    P[i].setAttribute("Index", i + 33);
  } else if (i > 23) {
    P[i].style.gridRowStart = 8;
    Pa.push(i + 33);
    P[i].setAttribute("Index", i + 33);
  }

  P[i].addEventListener("click", Death(P[i].getAttribute("Index")));

  console.log(Pa[i]);
}

for (i = 0; i < S.length; i++) {
  S[i].setAttribute("Index", i + 17);
}

//Toggles turns
let turn = "white";

//Enforces turn toggle
function SMove(rpi, rpc) {
  selected = true;
  if (turn == "white" && rpc.charAt(0) != "B") {
    console.log(rpi);
    turn = "black";
    Move(rpi, rpc);
  } else if (turn == "black" && rpc.charAt(0) != "W") {
    console.log(rpi);
    turn = "white";
    Move(rpi, rpc);
  }
}

//Moves a piece
function Move(rpi, rpc) {
  let mPiece = document.getElementById(rpi);
  let gPosition;

  for (i = 0; i < 32; i++) {
    if (P[i] == mPiece) {
      gPosition = Pa[i];
    }
  }
  let aPosition = GTranslate(gPosition);
  console.log(aPosition);
  console.log(gPosition);
}

//Translates from Grid Index to Row/Column
function GTranslate(gPosition) {
  let row = Math.ceil(gPosition / 8);
  let column = gPosition % 8;

  if (column == 0) {
    column = 8;
  }

  return "" + row + "" + column;
}

//Reverse GTranslate
function RTranslate(row, column) {
  return gPosition;
}

//Kills a piece
function Death(index) {
  if (selected == true) {
    console.log();
    selected = false;
  }
}
