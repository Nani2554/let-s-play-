document.addEventListener("DOMContentLoaded", function () {

  const puzzle = document.getElementById("puzzle");
  const status = document.getElementById("status");
  const shuffleBtn = document.getElementById("shuffleBtn");

  let tiles = [1, 2, 3, 4, 5, 6, 7, 8, ""];

  function drawPuzzle() {
    puzzle.innerHTML = "";

    tiles.forEach((value, index) => {
      const tile = document.createElement("div");

      tile.className = "tile";
      if (value === "") {
        tile.classList.add("empty");
      } else {
        tile.textContent = value;
        tile.addEventListener("click", () => moveTile(index));
      }

      puzzle.appendChild(tile);
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
      drawPuzzle();
      checkWin();
    }
  }

  function shuffle() {
    tiles.sort(() => Math.random() - 0.5);
    status.textContent = "";
    drawPuzzle();
  }

  function checkWin() {
    const win = [1, 2, 3, 4, 5, 6, 7, 8, ""];
    if (JSON.stringify(tiles) === JSON.stringify(win)) {
      status.textContent = "🎉 You solved the puzzle!";
    }
  }

  shuffleBtn.addEventListener("click", shuffle);

  drawPuzzle();
});