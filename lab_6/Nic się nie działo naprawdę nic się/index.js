document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  const balls = [];
  let mouseX = 0;
  let mouseY = 0;
  let repelForce = 10;
  let attractForce = 10;

  function init() {
    for (let i = 0; i < 10; i++) {
      balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        radius: 10,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach(ball => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();

      balls.forEach(otherBall => {
        if (ball !== otherBall) {
          const distance = Math.sqrt((ball.x - otherBall.x) ** 2 + (ball.y - otherBall.y) ** 2);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(ball.x, ball.y);
            ctx.lineTo(otherBall.x, otherBall.y);
            ctx.stroke();
          }
        }
      });

      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
        ball.dx *= -1;
      }
      if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
        ball.dy *= -1;
      }

      const dx = ball.x - mouseX;
      const dy = ball.y - mouseY;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);
      if (distance < 50) {
        const forceX = -dx / distance * attractForce;
        const forceY = -dy / distance * attractForce; 
        ball.dx += forceX;
        ball.dy += forceY;
      }
    });
  }

  function start() {
    setInterval(draw, 1000 / 60);
  }

  function reset() {
    balls.length = 0;
    init();
  }

  canvas.addEventListener('mousemove', e => {
    mouseX = e.clientX - canvas.getBoundingClientRect().left;
    mouseY = e.clientY - canvas.getBoundingClientRect().top;
  });


  document.getElementById('startBtn').addEventListener('click', start);
  document.getElementById('resetBtn').addEventListener('click', reset);

  init();
});
