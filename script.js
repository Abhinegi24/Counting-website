let countEl = document.getElementById("count-el");
let saveBtn = document.getElementById("save-el");

let count = 0;

function incrementCount() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let saveCount = count + " - ";
  saveBtn.textContent += saveCount;
  countEl.textContent = 0;
  count = 0;
}
