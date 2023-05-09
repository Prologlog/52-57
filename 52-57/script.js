let rows = 3;
let cols = 3;
let colors = ['red', 'green', 'blue'];
let table = document.querySelector('#field');
let win = document.querySelector('p');
let cells = [];
let clickCount = 0;
for (let i = 0; i < rows; i++) {
  let row = document.createElement('tr');
  cells[i] = []
  for (let j = 0; j < cols; j++) {
    let cell = document.createElement('td')
    let color = colors[Math.floor(Math.random() * colors.length)]
    cell.classList.add(color)
    cells[i][j] = color
    row.appendChild(cell)
  }
  table.appendChild(row)
}
table.addEventListener('click', click)
function click(event) {
  let cell = event.target;
  if (cell.tagName.toLowerCase() === 'td') {
    let i = cell.parentNode.rowIndex;
    let j = cell.cellIndex;
    let colorIndex = colors.indexOf(cells[i][j]);
    let nextColor = colors[(colorIndex + 1) % colors.length];
    cell.classList.remove(cells[i][j]);
    cell.classList.add(nextColor);
    cells[i][j] = nextColor;
    clickCount++;
    if (checkWin()) {
      win.textContent = 'Количество кликов: ' + clickCount
    }
  }
}
function checkWin() {
  let firstColor = cells[0][0];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (cells[i][j] !== firstColor) {
        return false
      }
    }
  }
  return true
}