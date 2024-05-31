let buttons = document.getElementsByTagName("button");
let flags = document.getElementById("flags");
let timer = document.getElementById("timer");
let gameOverPanel = document.getElementsByClassName("gameOver")[0];
let flagsEnd = document.getElementById("flagsEnd");
let timerEnd = document.getElementById("timerEnd");
let winOrLose = document.getElementById("winOrLose");
let restartButton = document.getElementsByClassName("restart")[0];
let timerInterval;
let countFlags = 40;
let gameEnded = false;
flags.innerHTML = countFlags;

let field = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const generateMines = (xOpened, yOpened) => {
  let mineCount = 0;
  while (mineCount < 40) {
    let x = Math.floor(Math.random() * 18);
    let y = Math.floor(Math.random() * 14);
    if (x !== xOpened && y !== yOpened && field[y][x] !== "💣") {
      field[y][x] = "💣";
      mineCount++;
    }
  }
};

const numberFiller = () => {
  for (let i = 0; i < 14; i++) {
    for (let j = 0; j < 18; j++) {
      if (field[i][j] !== "💣") {
        if (i == 0) {
          if (j == 0) {
            if (field[i][j + 1] === "💣") {
              field[i][j]++;
            }
            if (field[i + 1][j] === "💣") {
              field[i][j]++;
            }
            if (field[i + 1][j + 1] === "💣") {
              field[i][j]++;
            }
          } else if (j == 17) {
            if (field[i][j - 1] === "💣") {
              field[i][j]++;
            }
            if (field[i + 1][j] === "💣") {
              field[i][j]++;
            }
            if (field[i + 1][j - 1] === "💣") {
              field[i][j]++;
            }
          } else {
            if (field[i][j - 1] === "💣") {
              field[i][j]++;
            }
            if (field[i][j + 1] === "💣") {
              field[i][j]++;
            }
            if (field[i + 1][j] === "💣") {
              field[i][j]++;
            }
            if (field[i + 1][j - 1] === "💣") {
              field[i][j]++;
            }
            if (field[i + 1][j + 1] === "💣") {
              field[i][j]++;
            }
          }
        }

        if (i == 13) {
          if (j == 0) {
            if (field[i][j + 1] === "💣") {
              field[i][j]++;
            }
            if (field[i - 1][j] === "💣") {
              field[i][j]++;
            }
            if (field[i - 1][j + 1] === "💣") {
              field[i][j]++;
            }
          } else if (j == 17) {
            if (field[i][j - 1] === "💣") {
              field[i][j]++;
            }
            if (field[i - 1][j] === "💣") {
              field[i][j]++;
            }
            if (field[i - 1][j - 1] === "💣") {
              field[i][j]++;
            }
          } else {
            if (field[i][j - 1] === "💣") {
              field[i][j]++;
            }
            if (field[i][j + 1] === "💣") {
              field[i][j]++;
            }
            if (field[i - 1][j] === "💣") {
              field[i][j]++;
            }
            if (field[i - 1][j - 1] === "💣") {
              field[i][j]++;
            }
            if (field[i - 1][j + 1] === "💣") {
              field[i][j]++;
            }
          }
        }
        if (j == 0 && i != 0 && i != 13) {
          if (field[i][j + 1] === "💣") {
            field[i][j]++;
          }
          if (field[i - 1][j] === "💣") {
            field[i][j]++;
          }
          if (field[i - 1][j + 1] === "💣") {
            field[i][j]++;
          }
          if (field[i + 1][j] === "💣") {
            field[i][j]++;
          }
          if (field[i + 1][j + 1] === "💣") {
            field[i][j]++;
          }
        }
        if (j == 17 && i != 0 && i != 13) {
          if (field[i][j - 1] === "💣") {
            field[i][j]++;
          }
          if (field[i - 1][j] === "💣") {
            field[i][j]++;
          }
          if (field[i - 1][j - 1] === "💣") {
            field[i][j]++;
          }
          if (field[i + 1][j] === "💣") {
            field[i][j]++;
          }
          if (field[i + 1][j - 1] === "💣") {
            field[i][j]++;
          }
        }
        if (i != 0 && i != 13 && j != 0 && j != 17) {
          if (field[i - 1][j - 1] === "💣") {
            field[i][j]++;
          }
          if (field[i - 1][j] === "💣") {
            field[i][j]++;
          }
          if (field[i - 1][j + 1] === "💣") {
            field[i][j]++;
          }
          if (field[i][j - 1] === "💣") {
            field[i][j]++;
          }
          if (field[i][j + 1] === "💣") {
            field[i][j]++;
          }
          if (field[i + 1][j - 1] === "💣") {
            field[i][j]++;
          }
          if (field[i + 1][j] === "💣") {
            field[i][j]++;
          }
          if (field[i + 1][j + 1] === "💣") {
            field[i][j]++;
          }
        }
      }
    }
  }
};

const fieldEmpty = () => {
  for (let i = 0; i < 14; i++) {
    for (let j = 0; j < 18; j++) {
      field[i][j] = 0;
    }
  }
};

const isFieldEmpty = () => {
  for (let i = 0; i < 14; i++) {
    for (let j = 0; j < 18; j++) {
      if (field[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
};

const cellOpener = (i) => {
  let stack = [i];
  while (stack.length > 0) {
    let index = stack.pop();
    let x = Math.floor(index / 18);
    let y = index % 18;
    if (buttons[index].getAttribute("disabled") === "true") continue;
    buttons[index].textContent = field[x][y];
    buttons[index].style.backgroundColor = "lightgrey";
    buttons[index].setAttribute("disabled", true);
    if (field[x][y] === 0) {
      let neighbors = [];
      if (x > 0) neighbors.push(index - 18);
      if (x < 13) neighbors.push(index + 18);
      if (y > 0) neighbors.push(index - 1);
      if (y < 17) neighbors.push(index + 1);
      if (x > 0 && y > 0) neighbors.push(index - 19);
      if (x > 0 && y < 17) neighbors.push(index - 17);
      if (x < 13 && y > 0) neighbors.push(index + 17);
      if (x < 13 && y < 17) neighbors.push(index + 19);
      stack.push(...neighbors);
    } else if (field[x][y] === "💣") {
      buttons[index].style.backgroundColor = "red";
      gameOver(false);
    }
  }
};

const gameOver = (win) => {
  gameEnded = true;
  for (let i = 0; i < 252; i++) {
    buttons[i].setAttribute("disabled", true);
  }
  flagsEnd.innerHTML = countFlags;
  clearInterval(timerInterval);
  timerEnd.innerHTML = timer.innerHTML;
  if (win) {
    gameOverPanel.classList = "gameOver win";
    winOrLose.innerHTML = "Won";
  } else {
    gameOverPanel.classList = "gameOver lose";
    winOrLose.innerHTML = "Lost";
  }
  gameOverPanel.style.visibility = "visible";
};

const winCondition = () => {
  let countOpenedCells = 0;
  for (let i = 0; i < 252; i++) {
    buttons[i].style.backgroundColor === "lightgrey"
      ? countOpenedCells++
      : null;
  }
  if (countOpenedCells === 212) {
    gameOver(true);
  }
};

const restart = () => {
  gameEnded = false;
  countFlags = 40;
  flags.innerHTML = countFlags;
  timer.innerHTML = "0:0:0";
  gameOverPanel.style.visibility = "hidden";
  fieldEmpty();
  timeFiller();
  for (let i = 0; i < 252; i++) {
    buttons[i].style.backgroundColor = "gray";
    buttons[i].textContent = "";
    buttons[i].removeAttribute("disabled");
  }
};

const timeFiller = () => {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  timerInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    timer.innerHTML = hours + ":" + minutes + ":" + seconds;
  }, 1000);
};

timeFiller();

for (let i = 0; i < 252; i++) {
  buttons[i].addEventListener("click", function () {
    if (isFieldEmpty()) {
      generateMines(Math.floor(i / 18), i % 18);
      numberFiller();
      console.log(field);
    }
    cellOpener(i);
    winCondition();
  });
  buttons[i].addEventListener("contextmenu", function (e) {
    e.preventDefault();
    if (buttons[i].style.backgroundColor !== "lightgrey" && !gameEnded) {
      if (buttons[i].getAttribute("disabled") === "true") {
        buttons[i].textContent = "";
        buttons[i].removeAttribute("disabled");
        countFlags++;
        flags.innerHTML = countFlags;
      } else {
        buttons[i].setAttribute("disabled", true);
        buttons[i].textContent = "🚩";
        countFlags--;
        flags.innerHTML = countFlags;
      }
    }
  });
}

restartButton.addEventListener("click", restart);
