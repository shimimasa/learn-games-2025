/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.width  = innerWidth;
canvas.height = innerHeight;

let x = 0;
function loop () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.fillRect(x, canvas.height / 2 - 25, 50, 50);
  x = (x + 2) % canvas.width;
  requestAnimationFrame(loop);
}
loop();
