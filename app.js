let P = document.getElementsByName("Piece");
let S = document.getElementsByClassName("Space");
let Pa = [];

//Toggles selection
let selected = false;
let var1 = true;

let c = [...P, ...S];
let deathCount = 0;

//Values of Piece being moved
let cR;
let cC;
let cI;
let cID;

//Checkerboard
function Reload() {
  for (i = 0; i < 64; i++) {
    if (
      ((i + 1) % 2 == 0 && GTranslate(i).charAt(0) % 2 != 0) ||
      ((i + 1) % 2 != 0 && GTranslate(i + 1).charAt(0) % 2 == 0)
    ) {
      c[i].style.backgroundColor = "rgba(205,179,132,255)";
    } else {
      c[i].style.backgroundColor = "brown";
    }
  }
}

Reload();

//Toggles turns
let turn = "white";

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
}

for (i = 0; i < S.length; i++) {
  S[i].setAttribute("Index", i + 17);
}

//Enforces turn toggle
function SMove(rpi, rpc) {
  if (!selected) {
    cID = rpi;
    cI = document.getElementById(rpi).getAttribute("Index");
    cR = GTranslate(document.getElementById(rpi).getAttribute("Index")).charAt(
      0
    );
    cC = GTranslate(document.getElementById(rpi).getAttribute("Index")).charAt(
      1
    );
    if (turn == "white" && rpc.charAt(0) != "B") {
      console.log(rpi);
      selected = true;
      turn = "black";
      document.getElementById(rpi).style.backgroundColor = 'yellow'
    } else if (turn == "black" && rpc.charAt(0) != "W") {
      console.log(rpi);
      selected = true;
      turn = "white";
      document.getElementById(rpi).style.backgroundColor = 'yellow'
    }
  }
}

//Moves a piece
function Move(index) {
  let MPiece = document.getElementById(cID);
  MPiece.setAttribute("Index", index);
  MPiece.style.gridRowStart = GTranslate(index).charAt(0);
  MPiece.style.gridColumnStart = GTranslate(index).charAt(1);

  Reload();
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
  let gPosition = (8*row) - (8 - column);
  return gPosition;
}

//Kills a piece
function Death(rpi) {
  let dead = document.getElementById(rpi);
  deathCount++;
  if(deathCount == 17){
    deathCount = 49;
  }
  dead.name = "";
  dead.innerHTML = "";
  dead.onmousedown = null;
  dead.onmouseup = null;
  dead.onmousedown = function () {
    Fill(dead.getAttribute("Index"), this.id);
  };
  dead.className = "Space";
  dead.id = "Space" + deathCount;
  selected = false;
  let a = c.indexOf(dead); 
  let b = c.indexOf(document.getElementById(cID));
  c[a] = document.getElementById(cID);
  c[b] = dead;
  Move(dead.getAttribute("Index"));
  dead.style.gridColumnStart = cC;
  dead.style.gridRowStart = cR;
  dead.setAttribute("Index", cI);
  document.getElementById(cID).style.backgroundColor = null
  Reload();
}

//Moves empty space
function Fill(index, id) {
  if (selected) {
    selected = false;
    let space = document.getElementById(id);
    space.style.gridColumnStart = cC;
    space.style.gridRowStart = cR;
    let a = c.indexOf(space); 
    let b = c.indexOf(document.getElementById(cID));
    c[a] = document.getElementById(cID);
    c[b] = space;
    Move(index);
    space.setAttribute("Index", cI);
    Reload();
  }
}

//Möjlig implementering av regler i framtiden

// //Show/Checks possible moves
// function Czech(){
//   let R = document.getElementById(cID);
//   let RI = R.getAttribute("Index");

//   //Peasant
//   if(cID.charAt(6) == "P"){

//     //If Peasant is in start location
//     if((GTranslate(R.getAttribute('Index')).charAt(0) == '2' && cID.charAt(5) == 'B') || (GTranslate(R.getAttribute('Index')).charAt(0) == '7' && cID.charAt(5) == 'W')){
//       if(cID.charAt(5) == 'B'){
//         document.querySelector(CSS.escape('Index=' + (RI + 8))).style.backgroundColor = "purple";
//         document.querySelector(CSS.escape('Index=' + (RI + 8))).style.backgroundColor = "purple";
//       }
//       else{

//       }
//     }
//     else{
//       if(cID.charAt(5) == 'B'){
        
//       }
//       else{

//       }
//     }

//     //If something is diagonal to peasant
//     if(false){

//     }
//   }

//   if(cID.charAt(6) == "H"){
    
//   }

//   if(cID.charAt(6) == "T"){
//     //Rockad
//   //  if(){}
//   }

//   if(cID.charAt(6) == "B"){
    
//   }

//   if(cID.charAt(6) == "Q"){
    
//   }

//   if(cID.charAt(6) == "K"){
//     //Rockad
// //    if(){}
//   }
// }
