function setup() {
  createCanvas(505, 505);
}

function draw() {
  background(255);

  for (x = 5; x <= 500; x++) {
    for (y = 5; y <= 500; y++) {
      ellipse(x, y, 10, 10);
      y = y + 10;
    }

    x = x + 10;

  }

}
