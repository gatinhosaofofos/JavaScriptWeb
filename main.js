// Aplausos ----------------------------------------------
function TocaSomAplausos () {
     document.querySelector('#som_tecla_aplausos').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas[0].onclick = TocaSomAplausos

listaDeTeclas[1].onclick = tocaSomVaia
listaDeTeclas[2].onclick = tocaSomRisada

/images-removebg-preview.png
