const total = document.getElementById("number");
let value = 0;
function addNum() {
  value += 1;
  update(value);
}

function subNum() {
  value -= 1;
  update(value);
}

function reset() {
  value = 0;
  update(value);
}

function update(value) {
  total.innerText = value;
}
