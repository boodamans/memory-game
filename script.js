const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let clicked = []
let clickNums = 0
let x = 0
let score = 0
const white = 'white'

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {

  const selected = event.target

  clicked.push(selected)

  function whiteOut(j){
  setTimeout(x.style.backgroundColor = white, 1000)
  }
  function done(j){
  j.removeEventListener('click', handleCardClick)
  }
  function colorChange() {
    selected.style.backgroundColor = event.target.className;
    x+=1;   
    clickNums = clickNums + 1
  }
  
  colorChange();

  //if a tile is clicked twice
  if(clicked[0] == clicked[1]){
    clicked.length = 1
    clickNums = clickNums - 1
    return
  }
  //match
  else if(clicked.length == 2){
    if(clicked[0].className == clicked[1].className){
      console.log('Match!');
      score = score + 1
      done(clicked[0]);
      done(clicked[1]);
    }
    //no match
    else if(clicked[0].className !== clicked[1].className){
      console.log('No Match!')
      setTimeout(function(){(clicked[0].style.backgroundColor = 'white')}, 1000)
      setTimeout(function(){(clicked[1].style.backgroundColor = 'white')}, 1000)
      gameContainer.classList.add('noClick')
      setTimeout((function(){
        gameContainer.classList.remove('noClick')
      }), 1000)
      setTimeout(function(){

      }, 1000)
    }
  }
  //resets selection array
    else{
      clicked = []
      clicked.push(selected)
    }
    if(score === 5){
      console.log('Time!')
      setTimeout(function(){
        alert(`You matched all the tiles in ${clickNums} clicks!`)
      }, 10)
    }
}

// when the DOM loads
createDivsForColors(shuffledColors);
