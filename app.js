let P = document.getElementsByName("Piece");
let Pa = [];

//Initial placement
for (i = 0; i < P.length; i++) {

  if(i <= 7){
    Pa.push(i + 1);
  }
  
  else if(i > 7 && i <= 15){
    P[i].style.gridRowStart = 2;
    Pa.push(i + 1);
  }

  else if(i > 15 && i <= 23) {
    P[i].style.gridRowStart = 7;
    Pa.push(i + 33);
  }
  
  else if(i > 23){
    P[i].style.gridRowStart = 8;
    Pa.push(i + 33);
  }
  
  console.log(Pa[i])
}

//Toggles turns
let turn = "white";

//Enforces turn toggle
function SMove(rpi, rpc) {
  
  if (turn == "white" && rpc.charAt(0) != "B") {
    console.log(rpi)
    turn = "black";
    Move(rpi, rpc);
  } 
  
  else if (turn == "black" && rpc.charAt(0) != "W"){
    console.log(rpi)
    turn = "white";
    Move(rpi, rpc);
  }
}

//Moves a piece
function Move(rpi, rpc){

}

//Translates from Grid number to Row/Column
function GTranslate(gridNumber){
  
}