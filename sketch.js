// Coding Challenge 130.3: Drawing with Fourier Transform and Epicycles
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/130.1-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.2-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.3-fourier-transform-drawing.html
// https://youtu.be/7_vKzcgpfvU


let x = [];
let fourierX;
let time = 0;
let path = [];
let complex = 1;
const skip = 1;


function setup() {
  createCanvas(windowWidth/2, windowHeight);
  for (let i = 0; i < drawing.length; i += skip) {
    const c = new Complex(drawing[i].x, drawing[i].y);
    x.push(c);
  }
  fourierX = dft(x);
  fourierX.sort((a, b) => b.amp - a.amp);
}

function epicycles(x, y, rotation, fourier) {
    // console.log(fourier.length/(complex*complex));
    

    for (let i =1; i < fourier.length/(complex*complex); i++) {
        let prevx = x;
        let prevy = y;
        let freq = fourier[i].freq;
        let radius = fourier[i].amp;
        let phase = fourier[i].phase;
        x += radius * cos(freq * time + phase + rotation);
        y += radius * sin(freq * time + phase + rotation);
    
        stroke(255, 30);
        strokeWeight(0.8);
        noFill();
        ellipse(prevx, prevy, radius * 2);
        stroke(255,50);
        line(prevx, prevy, x, y);
    }

  console.log(x,y);
  return createVector(x, y);
}

function draw() {
  if(time< TWO_PI)
  {
    background(0);
    let v = epicycles(width / 2, height / 2, 0, fourierX);
    console.log(v);
    path.unshift(v);

    beginShape();
    noFill();
    // stroke(255,68,0);
    stroke(255);
    strokeWeight(4);
    for (let i = 0; i < path.length ; i++) {
      vertex(path[i].x, path[i].y);
      // console.log(i);
      // console.log(path[i].x,path[i].y);
    }
    endShape();

    const dt = TWO_PI / fourierX.length;
    time += dt;
  }
  // else{
  //   // time = 0;
  //   path = [];
  //   complex--;
  //   if(complex<=0)
  //       complex=1;
  // }
}


