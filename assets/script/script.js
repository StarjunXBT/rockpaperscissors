const ROCK = document.getElementById("rock");
const PAPER = document.getElementById("papers");
const SCISSORS = document.getElementById("scissors");
const BUTTONS = document.getElementsByClassName("btnPlayer");
const USERSCORE = document.getElementById("user");
const CPUSCORE = document.getElementById("computer");

buttonsEvent(BUTTONS);

function checkWin(a, b) {
    if( Number(a) + Number(b) === 3) alert("Want to replay?")
}

function computerPlay() {
  return ["rock", "papers", "scissors"][Math.floor(Math.random() * 3)];
}

function roundWinner(userChoice, computerChoice) {
  if (computerChoice === userChoice) return null;

  console.log(`User played: ${userChoice}, Cpu played: ${computerChoice}`);

  switch (userChoice) {
    case "rock":
      if (computerChoice === "papers") return "computer";
      break;
    case "papers":
      if (computerChoice === "scissors") return "computer";
      break;
    case "scissors":
      if (computerChoice === "rock") return "computer";
      break;
  }

  return "user";
}

function buttonsEvent(BUTTONS) {
  for (button of BUTTONS) {
    button.addEventListener("click", (e) => {
      const CPUPLAY = computerPlay();
      const USERPLAY = e.target.id;
      const WINNER = roundWinner(USERPLAY, CPUPLAY);
      const SCOREUPDATE = document.getElementById(WINNER);
      if (SCOREUPDATE) ++SCOREUPDATE.textContent;
      checkWin(USERSCORE.textContent, CPUSCORE.textContent, "btnPlayer");
    });
  }
}
