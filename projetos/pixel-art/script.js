// ref: codigo elaborado com ajuda do code review do aluno da turma 13 Rogerio P. da Silva.

const colorPalette = document.getElementById('color-palette');
const pixel = document.getElementById('pixel-board');

function randomCounter() {
  return Math.floor(Math.random() * 10);
}console.log(randomCounter())

function randomCollor() {
  const colors = ['Yellow', 'Green', 'Grey', 'Purple', 'Blue', 'Magenta', 'Red', 'Silver', 'Pink', 'Violet', 'Navy blue', 'Orange', 'Brown', 'Gold'];
  const lista = document.getElementsByClassName('color');
  lista[0].style.backgroundColor = 'black';

  for (const item of lista) {
      if (item.style.backgroundColor !== 'black') {
        item.style.backgroundColor = colors.splice(randomCounter(colors.length), 1);
    }  
  }
}


function pixels(numero) {
  numero = 5;
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < numero; index += 1) {
    const linha = document.createElement('div');
    linha.className = 'row';
    for (let i = 0; i < numero; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'pixel';
      linha.appendChild(cell);
    }
    board.appendChild(linha);
  }
}

function clickColor(event) {
  const colors = event;
  const list = document.getElementsByClassName('color');
  for (const select of list) {
    if (colors.target.className !== '') {
      select.className = 'color';
    }
  }

  if (colors.target.className === 'color') {
    colors.target.className = 'color selected'
  }
}

function paintBoard(event) {
    const corSelected = document.getElementsByClassName('color selected')[0];
    event.target.style.backgroundColor = corSelected.style.backgroundColor;
}
function addEvents() {
    colorPalette.addEventListener('click', clickColor);
    pixel.addEventListener('click', paintBoard);
}

addEvents()
pixels();
randomCollor();