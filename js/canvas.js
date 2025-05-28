const canvas = document.getElementById("designCanvas");
const ctx = canvas.getContext("2d");

let objects = [];
let currentSide = "front";

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  objects = [];
}

// Placeholder for addText/addImage logic later
document.getElementById("clearCanvas").onclick = clearCanvas;
