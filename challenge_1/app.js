
let parent = document.getElementById("board");
var player1 = {
  isMyTurn: true,
  myBoard: [],
  round: 0,
}

var player2 = {
  isMyTurn: false,
  myBoard: [],
  round: 0,
}
var win = {
  0: ["0", "1", "2"],
  1: ["3", "4", "5"],
  2: ["6", "7", "8"],
  3: ["0", "3", "6"],
  4: ["1", "4", "7"],
  5: ["2", "5", "8"],
  6: ["0", "4", "8"],
  7: ["2", "4", "6"]}

  var newGame = function() {
    var allSquare = $(".square");
    for (var i = 0; i < allSquare.length; i++) {
      console.log(allSquare[i]);
      allSquare[i].innerHTML = ' ';
    }
    player1.round = 0;
    player2.round = 0;
    player1.isMyTurn = true;
    player1.myBoard = [];
    player2.isMyTurn = false;
    player2.myBoard = [];
  }

var checkWin = function (myBoard) {
  myBoard.sort();
  outer: for (var key in win) {

    var set = win[key];
    console.log(set);
    console.log(typeof + set[0]);
    //console.log(myBoard);
    for (var i = 0; i < set.length; i++) {
      if (!myBoard.includes(set[i])) {
        console.log('here ' + set[i]);
        continue outer;
      }
    }
    return true;

  }
  return false;
}

$(".square").click(function (event) {
  console.log(event.target);
  console.log(this);
  // console.log(event.target.data.("row"));
  if (player1.isMyTurn) {
    console.log(this.id);
    if (this.innerHTML === 'X' || this.innerHTML === 'O') {
      alert("please choose other space");
    } else {
      this.innerHTML = 'X';
      player1.round = player1.round + 1;
      player1.myBoard.push(this.id);
      if (player1.round >= 3) {
        console.log("round " + player1.round);
        console.log(player1.myBoard);
        console.log(checkWin(player1.myBoard));
        if (checkWin(player1.myBoard)) {
          alert("Congratulations player1! Won!")
          return;
        }
      }
      player1.isMyTurn = false;
    }
    //console.log(player1.isMyTurn);
  } else {
    if (this.innerHTML === 'X' || this.innerHTML === 'O') {
      alert("please choose other space");
    } else {
      this.innerHTML = 'O';
      player1.isMyTurn = true;
      player2.myBoard.push(this.id);

      player2.round = player2.round + 1;
      if (player2.round >= 3) {
        if (checkWin(player2.myBoard)) {
          alert("Congratulations player2! Won!")
          return;
        }
      }
    }
  }
});

$('#initial').click(function() {
  newGame();
})





