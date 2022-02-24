$(document).ready(function () {

  var canvas = document.querySelector("#canvas"),
    ctx = canvas.getContext("2d"),
    particles = [],
    amount = 0,
    mouse = { x: 0, y: 0 },
    radius = 1;

  var primaryColor = "#CC6600";
  var whiteColor = "#fff";
  var colors = [primaryColor, whiteColor, primaryColor, whiteColor, primaryColor];
  // anime text is TEXT variables
  var TEXT = "Portfolio";
  //var TEXT = "00000000";
  // if (document.querySelector(".canvas").offsetWidth < 700) {
  //   TEXT = "P o r t f o l i o";
  // }

  var wh = canvas.height = window.innerHeight;
  var ww = canvas.width = document.querySelector(".canvas").offsetWidth;

  function Particle(x, y) {
    this.x = Math.random() * ww;
    this.y = Math.random() * wh;
    this.dest = {
      x: x,
      y: y
    };
    this.r = Math.random() * 5 + 2;
    this.vx = (Math.random() - 0.5) * 20;
    this.vy = (Math.random() - 0.5) * 20;
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random() * 0.05 + 0.94;
    this.color = colors[Math.floor(Math.random() * 6)];
  }

  Particle.prototype.render = function () {
    this.accX = (this.dest.x - this.x) / 1000;
    this.accY = (this.dest.y - this.y) / 1000;
    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fill();
    var a = this.x - mouse.x;
    var b = this.y - mouse.y;
    var distance = Math.sqrt(a * a + b * b);
    if (distance < (radius * 70)) {
      this.accX = (this.x - mouse.x) / 100;
      this.accY = (this.y - mouse.y) / 100;
      this.vx += this.accX;
      this.vy += this.accY;
    }
  };

  function initScene() {
    ww = document.querySelector(".canvas").offsetWidth;
    wh = canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold " + (ww / 6) + "px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(TEXT, ww / 2, wh / 2);
    var data = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "screen";
    particles = [];
    var osonix = 150;
    if (ww < 800) {
        osonix = 100
    }
    for (var i = 0; i < ww; i += Math.round(ww / osonix)) {
      for (var j = 0; j < wh; j += Math.round(ww / osonix)) {
        if (data[((i + j * ww) * 4) + 3] > osonix) {
          particles.push(new Particle(i, j));
        }
      }
    }
    amount = particles.length;
  }

  function render(a) {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < amount; i++) {
      particles[i].render();
    }
  };

  // window.addEventListener("resize", initScene);
  // window.addEventListener("mousemove", onMouseMove);
  // window.addEventListener("touchmove", onTouchMove);
  // window.addEventListener("touchend", onTouchEnd);
  // window.addEventListener("click", onMouseClick);
  initScene();
  requestAnimationFrame(render);
});
