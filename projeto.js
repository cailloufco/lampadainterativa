//quantidade inicial para definir se ta desligado ou ligado
let definidorLigaDesliga = "desliga";
let lampada = document.getElementById("lampadaApagada");
let interruptor = document.getElementById("InterruptorDesligado");
let instagram = document.getElementById("instagram");
function ligarDesligarLampada() {
  //responsavel por ligar a lampada

  if (definidorLigaDesliga == "liga") {
    definidorLigaDesliga = "desliga";

    console.log("ligado");
    interruptor.src = "assets/InterruptorLigado.jpg";
    lampada.src = "assets/lampadaLigada.jpg";
    instagram.style.display="block";
    //responsavel por desligar a lampada
  } else {
    definidorLigaDesliga = "liga";
    console.log("desliga");
    
    interruptor.src = "assets/InterruptorDesligado.jpg";
    

    lampada.src = "assets/lampadaApagada.jpg";
    instagram.style.display = "none";
  }
}
