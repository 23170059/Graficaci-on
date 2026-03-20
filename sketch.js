let posX, posY, angulo = 0, escala = 1.0, sesgo = 0, profundidad = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = width / 2;
  posY = height / 2;
}

function draw() {
  background(240);
  
  // 1. Texto e Instrucciones
  fill(0);
  noStroke();
  textSize(20);
  text("Unidad 2: Proyecto Integrador", 20, 40);
  textSize(14);
  text("Autor: [Tu Nombre]", 20, 65);
  text("Flechas: Mover | A/D: Rotar | W/S: Escala | 1-6: Fractal", 20, height - 20);

  // 2. Transformaciones 2D
  push();
    translate(posX, posY);
    rotate(radians(angulo));
    scale(escala);
    shearX(radians(sesgo));
    fill(100, 150, 250);
    stroke(0);
    rectMode(CENTER);
    rect(0, 0, 100, 100);
  pop();

  // 3. Curva Bézier Interactiva
  noFill();
  stroke(255, 0, 0);
  bezier(50, height-100, 150, mouseY, 350, mouseY, 450, height-100);

  // 4. Fractal Recursivo
  push();
    translate(width - 100, height - 50);
    dibujarFractal(50, profundidad);
  pop();

  gestionarTeclado();
}

function dibujarFractal(largo, nivel) {
  stroke(34, 139, 34);
  line(0, 0, 0, -largo);
  translate(0, -largo);
  if (nivel > 0) {
    push(); rotate(PI/6); dibujarFractal(largo*0.7, nivel-1); pop();
    push(); rotate(-PI/6); dibujarFractal(largo*0.7, nivel-1); pop();
  }
}

function gestionarTeclado() {
  if (keyIsDown(LEFT_ARROW)) posX -= 5;
  if (keyIsDown(RIGHT_ARROW)) posX += 5;
  if (keyIsDown(UP_ARROW)) posY -= 5;
  if (keyIsDown(DOWN_ARROW)) posY += 5;
  if (keyIsDown(65)) angulo -= 2; // A
  if (keyIsDown(68)) angulo += 2; // D
  if (keyIsDown(87)) escala += 0.01; // W
  if (keyIsDown(83)) escala -= 0.01; // S
}

function keyPressed() {
  if (key >= '1' && key <= '6') profundidad = int(key);
}