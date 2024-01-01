const getComputerChoice = () => {
  let computer = Math.floor((Math.random() * 3) + 1);

  if (computer === 1) {
    return 'rock';
  } else if (computer === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const getPlayerChoice = () => {
  let user = prompt("rock, paper, or scissors: ");
  let changeUser = user.toLowerCase();
  return changeUser;
}

const playGame = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'tie game';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Computer chose paper. Computer wins';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'Computer chose scissors. User wins';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'Computer chose rock. User wins';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'tie game';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'Computer chose scissors. Computer wins';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'Computer chose rock. Computer wins';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'Computer chose paper. User wins';
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'tie game';
  }
}

const game = () => {
  let round = playGame(getPlayerChoice(), getComputerChoice());
  console.log(round);

  if (round === 'Computer chose scissors. User wins' || round === 'Computer chose rock. User wins' || round === 'Computer chose paper. User wins') {
    wins++;
    // console.log(wins);
  } else if (round === 'Computer chose paper. Computer wins' || round === 'Computer chose scissors. Computer wins' || round === 'Computer chose rock. Computer wins') {
    loses++;
  }

  if (wins === 5) {
    return 'user wins the game';
  } else if (loses === 5) {
    return 'computer wins the game';
  }
}

let wins = 0;
let loses = 0;

while (wins < 5 && loses < 5) {
  game();
}

console.log(game());
