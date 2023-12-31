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
    return 'user wins';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'computer wins';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'user wins';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'tie game';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'computer wins';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'computer wins';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'user wins';
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'tie game';
  }
}

console.log(playGame(getPlayerChoice(), getComputerChoice()));