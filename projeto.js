//quantidade inicial para definir se ta desligado ou ligado
let definidorLigaDesliga = "desliga";
let lampada = document.getElementById("lampadaApagada");
function ligarDesligarLampada() {
  //responsavel por ligar a lampada
  if (definidorLigaDesliga == "liga") {
    definidorLigaDesliga = "desliga";

    console.log("ligado");

    lampada.src = "assets/lampadaLigada.jpg"

    //responsavel por desligar a lampada
  } else  {
    definidorLigaDesliga = "liga";
    console.log("desliga");

    lampada.src = "assets/lampadaApagada.jpg";
  } 
}
