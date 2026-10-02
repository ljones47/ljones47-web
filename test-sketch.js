function setup() {
  createCanvas(600,600)
}

// initializing
var count = 0
var color_initial = 141

function draw(){
  background(117,168,142)

  var x = mouseX
  var y = mouseY

  size = 40 +  8 * sin(count/8)

  var color = 127 + 127 * sin(count/32)
  
  if (mouseIsPressed === true) {
    ellipse(x, y, size, size)
    fill(252, 153, color)

  count = count + 1
  }
}
