export function DDA(ctx, x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let steps;

  let xIncrement, yIcrement;
  let x = x1;
  let y = y1;

  if (Math.abs(dx) > Math.abs(dy)) {
    steps = Math.abs(dx);
  } else {
    steps = Math.abs(dy);
  }

  xIncrement = dx / steps;
  yIcrement = dy / steps;

  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < steps; i++) {
    x += xIncrement;
    y += yIcrement;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.closePath();
}
