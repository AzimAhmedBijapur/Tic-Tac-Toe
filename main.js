const cell = document.querySelectorAll('.board div');
const statusText = document.querySelector('.status');
const board = document.querySelector('.board');
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

// eslint-disable-next-line consistent-return
function declareWinner() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < winConditions.length; i++) {
    const conditions = winConditions[i];
    const cellOne = options[conditions[0]];
    const cellTwo = options[conditions[1]];
    const cellThree = options[conditions[2]];
    if (cellOne !== '' && cellThree !== '' && cellTwo !== '') {
      if (cellOne === cellTwo && cellTwo === cellThree) {
        statusText.textContent = `${cellOne} won`;
        board.style.pointerEvents = 'none';
        return true;
      }
    }
  }
}
// eslint-disable-next-line no-unused-vars
function restartGame() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}
function updateCell() {
  // eslint-disable-next-line no-use-before-define
  cell.forEach((cells) => cells.addEventListener('click', () => cellClicked(cells)));
}
function updateStatus() {
  const end = declareWinner();
  let count = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < options.length; i++) {
    if (options[i] !== '') {
      count += 1;
    }
    if (count === 9) {
      board.style.pointerEvents = 'none';
    }
  }
  if (end === true) {
    /* empty */
  } else {
    statusText.textContent = `${currentPlayer}'s turn`;
  }
}
function cellClicked(cells) {
  if (currentPlayer === 'X') {
    // eslint-disable-next-line no-param-reassign
    if (cells.textContent !== '') { /* empty */ } else {
      // eslint-disable-next-line no-param-reassign
      cells.textContent = 'X';
      options[cells.getAttribute('data-num')] = 'X';
    }
    currentPlayer = '0';
    updateStatus();
  } else {
    // eslint-disable-next-line no-param-reassign
    if (cells.textContent !== '') { /* empty */ } else {
      // eslint-disable-next-line no-param-reassign
      cells.textContent = 'O';
      options[cells.getAttribute('data-num')] = 'O';
    }
    currentPlayer = 'X';
    updateStatus();
  }
}
function playGame() {
  statusText.textContent = `${currentPlayer}'s turn`;
  updateCell();
}

playGame();
