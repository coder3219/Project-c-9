
function setup() {
  createCanvas(1000, 300);
}

function draw() {
  background("yellow");
  if (keyIsDown(UP_ARROW)) {
    background("red")
  }
  
    if (keyIsDown(DOWN_ARROW)){
    background("blue")
    }
    if (keyIsDown(RIGHT_ARROW)){
      background("green")

    }
    if (keyIsDown(LEFT_ARROW)){
      background("cyan")

    }
}




