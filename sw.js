const puzzle = document.getElementById("puzzle");
const message = document.getElementById("message");

let tiles = [1, 2, 3, 4, 5, 6, 7, 8, ""];

function createPuzzle() {
  puzzle.innerHTML = "";
  tiles.forEach((tile, index) => {
    const div = document.createElement("div");
    div.className = tile === "" ? "tile empty" : "tile";
    div.innerText = tile;
    div.addEventListener("click", () => moveTile(index));
    puzzle.appendChild(div);
  });
}

function moveTile(index) {
  const emptyIndex = tiles.indexOf("");
  const validMoves = [
    index - 1,
    index + 1,
    index - 3,
    index + 3
  ];

  if (validMoves.includes(emptyIndex)) {
    [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
    createPuzzle();
    checkWin();
  }
}

function shufflePuzzle() {
  tiles.sort(() => Math.random() - 0.5);
  message.innerText = "";
  createPuzzle();
}

function checkWin() {
  const win = [1, 2, 3, 4, 5, 6, 7, 8, ""];
  if (JSON.stringify(tiles) === JSON.stringify(win)) {
    message.innerText = "🎉 Congratulations! You solved the puzzle!";
  }
}

createPuzzle();