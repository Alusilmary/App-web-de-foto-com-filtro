let video;
let canvas;
let tintColor = "";

function setup() {
  // Cria o canvas e posiciona-o ao centro
  canvas = createCanvas(640, 480);
  canvas.position((windowWidth - width) / 2, 280);

  // Inicializa o vídeo e oculta o elemento HTML padrão
  video = createCapture(VIDEO) 
    console.log("Câmera iniciada com sucesso!");
   video.size(640, 480);
  video.hide(); // Esconde o elemento de vídeo padrão do HTML
}

function draw() {
  // Renderiza o vídeo no canvas e aplica o filtro
  background(220);
  image(video, 0, 0, 640, 480);
  if (tintColor) {
    tint(tintColor);
  }
}

function filterTint() {
  // Define a cor do filtro com base no valor do input
  tintColor = document.getElementById("colorName").value;
}

function takeSnapshot() {
  // Salva a imagem com o nome especificado
  save('studentName.png');
}
