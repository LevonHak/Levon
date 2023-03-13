//  Task 1

// let Animal = function(name,legs,wings,place){
// 	this.name = name;
// 	this.legs = legs;
// 	this.wings = wings;
// 	this.place = place
// }
// let animal1 = new Animal("Han","two","two","ground");
// let animal2 = new Animal("Dog","four","none","ground");
// let animal3 = new Animal("Fish","none","none","water");

// console.log(animal1,animal2,animal3)

//   Task 2

// let Car = function(mark,model,year,engineStarted){
// 	this.mark = mark;
// 	this.model = model;
// 	this.year = year;
// 	this.showInfo = function(){
// 		return (this.mark + " " + this.model + " " + this.year)
// 	};
// 	this.engineStarted = function(startEngine,stopEngine){
// 		this.startEngine = startEngine;
// 		this.stopEngine = stopEngine;
// 		if(engineStarted === "true"){
// 			console.log("Engine Started")
// 		}else{
// 			console.log("Engine Stopped")
// 		}
// 	}
// }
// let car = new Car(prompt(),prompt(),prompt(),prompt());
// console.log(car.showInfo(),car.engineStarted())

//  	Task 3 

// let people = [{name: "John"}, {name: "Smith"}, {name: "Jared"}]
// let showInfo = function(){
// 	console.log(people[people.length-1]);
// };
// showInfo();


// Task: The 'OK':

// let smth = [1,5,'ok', 6, 'ok', 150];

// function checkOk(){
// for(let i = 0; i < smth.length; i++){
//     if(smth[i] === 'ok'){
//         return smth[i]
//     }
// }
// }
// let res = checkOk();
// console.log(res);


// Task: The Matrix Index Detector


// function getIndexOfK(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//       let index = arr[i].indexOf(k);
//       if (index > -1) {
//         return [i, index];
//       }
//     }
//   }
  
//   let k = 0;
//   let array = [
//     [0,1,2,3,4,5,6,7,8,9,10],
//     [11,12,13,14,15,16,17,18],
//     [19,20,21,22,23,24,25,26],
// ];
//   for (let i = 0; i < 10; i++) {
//     array[i] = [];
//     for (let j = 0; j < 100; j++) {
//       k = k + 1;
//       array[i].push(k);
//     }
//   }
//   let number = Number(prompt());
//   let result = getIndexOfK(array, number);
//   alert('The value ' + number + ' is located at array[' + result[0] + '][' + result[1] + '].');




// function checkPass() {
//     let password = prompt();
//         errors = [];
//     if (password.length < 8) {
//         errors.push("Your password must be at least 8 characters"); 
//     }
//     if (password.search(/[a-z]/i) < 0) {
//         errors.push("Your password must contain at least one letter.");
//     }
//     if (password.search(/[A-Z]/) < 0) {
//         errors.push("Your password must contain at least one uppercase letter.");
//     }
//     if (password.search(/[0-9]/) < 0) {
//         errors.push("Your password must contain at least one digit."); 
//     }
//     if (errors.length > 0) {
//         alert(errors.join("\n"));
//         return false;
//     }
//     return true;
// }
// console.log(checkPass());



// class main {
 
//     constructor() {
//         let ask = +prompt();
//         let matrix = new Array(ask).fill().map(() => new Array(ask).fill(0));
//         for (let i = 0; i < matrix.length; i++) {
//           let random = Math.floor(Math.random() * ask);
//           matrix[i][random] = 1;
//         }
//         console.log(matrix);
//         let zeroCount = ask * ask;
//         setTimeout((function(){
//           while (true) {
//             let y = +prompt();
//             let x = +prompt();
//             console.log(y, x);
//                 if (matrix[y][x] === 1) {
//                     console.log('You Lost');
//                     break;
//                 } else if (matrix[y][x] === 2) {
//                     console.log("It's already opened");
//                     continue;
//                 } else {
//                     matrix[y][x] = 2;
//                     console.log(matrix);
//                     if (matrix[y][x] === 0) {
//                         zeroCount--;
//                     }
//                 }
//                 if (zeroCount === 0) {
//                     break;
                    
//             }
//             if (x > ask-1 || y > ask-1 || x < 0 || y < 0) {
//                 console.log('You have overflowed');
//                 break;
//             }
//             if(x == ''){
//                 break;
//             }else {
//                 matrix[y][x] = 2;
//                 let count = 0;
//                 if (y > 0 && matrix[y-1][x] === 1) { // check top cell
//                     count++;
//                 }
//                 if (y > 0 && matrix[y-1][x+1] === 1) { // check top-right cell
//                     count++;
//                 }
//                 if (y > 0 && matrix[y-1][x-1] === 1) { // check top-left cell
//                     count++;
//                 }
//                 if (x > 0 && matrix[y][x-1] === 1) { // check left cell
//                     count++;
//                 }
//                 if (y < ask-1 && matrix[y+1][x] === 1) { // check bottom cell
//                     count++;
//                 }
//                 if (y < ask-1 && matrix[y+1][x+1] === 1) { // check bottom-right cell
//                     count++;
//                 }
//                 if (y < ask-1 && matrix[y+1][x-1] === 1) { // check bottom-left cell
//                     count++;
//                 }
//                 if (x < ask-1 && matrix[y][x+1] === 1) { // check right cell
//                     count++;
//                 }
//                 console.log(`There are ${count} mines around this cell.`);
                
                
//             }
           
           

//           }
          
//     }),3000) 
//       }
//   }
//   class game extends main {
//     start(){
//       super.board()
//     }
//   }
  
//   let newgame = new game()

// Warships War cells check

    // for(let i = 0; i < matrix.length; i++){
    //     for(let j = 0; j < matrix.length; j++){
    //         if(matrix[j][i] === 1){
    //             for (let a = -1; a <= matrix.length; a++) {
    //                 for(let b = -1; b <= matrix.length; b++){
                          
    //                     if(i + a === i & j + b === j){
    //                         continue;
    //                     }
    
    //                     if((j + b) >= 0 && (j + b) < matrix.length && (i + a) >= 0 && (i + a) < matrix.length){
    //                         matrix[j + b][i + a] = 9
    //                     }
    //                 }
                    
    //             }
    //         }
    //     }
    // }


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
  






