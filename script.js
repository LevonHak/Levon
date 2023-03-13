// Warships War


///////////////////////////////////       USER 1     ///////////////////////////////////////////

let player1 = {
    name: "Player 1",
    matrix: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0)) // Player One with array of 10x10 cells
  };
  
  let player2 = {
    name: "Player 2",
    matrix: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0)) // Player Two with array of 10x10 cells
  };

let sizes = [4, 3, 2, 1]; // Player Ones ship sizes
let count = 0;


function canPlace(groupSize, isHorizontal, y, x) {  // Checking if the cell is variable for placing a ship
  if (isHorizontal) {
    if (x + groupSize > 10) return false;   // if the x-coordinate is over 10 the function stops
    for (let i = x; i < x + groupSize; i++) {
      if (player1.matrix[y][i] !== 0) return false; 
      if (y > 0 && player1.matrix[y - 1][i] !== 0) return false;        
      if (y < 9 && player1.matrix[y + 1][i] !== 0) return false; 
    }
  } else {
    if (y + groupSize > 10) return false;   // if the y-coordinate is over 10 the function stops
    for (let i = y; i < y + groupSize; i++) {
      if (player1.matrix[i][x] !== 0) return false; 
      if (x > 0 && player1.matrix[i][x - 1] !== 0) return false; 
      if (x < 9 && player1.matrix[i][x + 1] !== 0) return false; 
    }
  }
  return true;
}

function place(groupSize, isHorizontal, y, x) {   // Function is used to place ships Horizontaly
  if (isHorizontal) {
    for (let i = x; i < x + groupSize; i++) {
        player1.matrix[y][i] = 1;
    }
  } else {
    for (let i = y; i < y + groupSize; i++) {
        player1.matrix[i][x] = 1;
    }
  }
  count += groupSize; // count == count + groupSize
}

while (count < 10) {    
  let size = sizes[Math.floor(Math.random() * sizes.length)];   // Sets the size of Ships
  let isHorizontal = Math.random() < 0.5;
  let x, y;

  if (isHorizontal) {
    x = Math.floor(Math.random() * (11 - size));
    y = Math.floor(Math.random() * 10);
  } else {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * (11 - size));
  }

  if (canPlace(size, isHorizontal, y, x)) { // If the "canPlace" function works it lets to "place"  function work
    place(size, isHorizontal, y, x);
  }
}



 ///////////////////////////////////       USER 2    ///////////////////////////////////////////


let sizes1 = [4, 3, 2, 1];
let count1 = 0;


function canPlace1(groupSize, isHorizontal, y, x) {
  if (isHorizontal) {
    if (x + groupSize > 10) return false; 
    for (let i = x; i < x + groupSize; i++) {
      if (player2.matrix[y][i] !== 0) return false; 
      if (y > 0 && player2.matrix[y - 1][i] !== 0) return false;
      if (y < 9 && player2.matrix[y + 1][i] !== 0) return false; 
    }
  } else {
    if (y + groupSize > 10) return false;
    for (let i = y; i < y + groupSize; i++) {
      if (player2.matrix[i][x] !== 0) return false; 
      if (x > 0 && player2.matrix[i][x - 1] !== 0) return false; 
      if (x < 9 && player2.matrix[i][x + 1] !== 0) return false; 
    }
  }
  return true;
}

function place1(groupSize, isHorizontal, y, x) {
  if (isHorizontal) {
    for (let i = x; i < x + groupSize; i++) {
        player2.matrix[y][i] = 1;
    }
  } else {
    for (let i = y; i < y + groupSize; i++) {
        player2.matrix[i][x] = 1;
    }
  }
  count1 += groupSize;
}

while (count1 < 10) {
  let size = sizes1[Math.floor(Math.random() * sizes1.length)];
  let isHorizontal = Math.random() < 0.5;
  let x, y;

  if (isHorizontal) {
    x = Math.floor(Math.random() * (11 - size));
    y = Math.floor(Math.random() * 10);
  } else {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * (11 - size));
  }

  if (canPlace1(size, isHorizontal, y, x)) {
    place1(size, isHorizontal, y, x);
  }
}


console.log(player1.matrix);
console.log(player2.matrix);




///////////////////////////////       GAME       ////////////////////////


  
  let players = [player1, player2];
  let currentPlayerIndex = Math.floor(Math.random() * players.length);  // Creating a random number btw player1 and player2
  let currentMatrix = players[currentPlayerIndex].matrix;
  
  function canAttack(matrix, y, x) {
    return matrix[y][x] === 1;
  }
  
  function attack(matrix, y, x) {
    matrix[y][x] = -1;
  }
  
  function play() {
    let opponentIndex = currentPlayerIndex === 0 ? 1 : 0;   // Generates which player should start the game first
    let opponent = players[opponentIndex];
  
    let [y, x] = prompt("Enter the Y and X coordinates at (0-9):").slice(" ");  // Coordinates to attack the ship 
    
  
    if (canAttack(opponent.matrix, y, x)) {
      console.log("Hit!");
      attack(opponent.matrix, y, x);
      console.log(player1.matrix);
      console.log(player2.matrix);
    } else {
      console.log("Miss!");
      currentPlayerIndex = opponentIndex;
      currentMatrix = players[currentPlayerIndex].matrix;
      console.log(player1.matrix);
      console.log(player2.matrix);
    }
  
    let opponentCount = opponent.matrix.reduce((acc, row) => {
      return acc + row.filter(val => val === 1).length;         // Filters the value 1 from the board 
    }, 0);
  
    if (opponentCount === 0) {
      console.log("Game over! " + players[currentPlayerIndex].name + " wins!"); // If in some of the board there are no 1's at all opposite team wins
      return;
    }
  
    play();
  }
  
  play();
  






