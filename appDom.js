//create elements
let id = 0;

id++;
let grapes = getTr(id, "grapes");
id++;
let peach = getTr(id, "peach");
id++;
let melon = getTr(id, "melon");
id++;
let orange = getTr(id, "orange");
id++;
let lime = getTr(id, "lime");

tbody = document.querySelector(".tbody");
tbody.appendChild(grapes);
tbody.appendChild(peach);
tbody.appendChild(melon);
tbody.appendChild(orange);
tbody.appendChild(lime);

//add item
let addButton = document.getElementById("btn-add");
addButton.addEventListener("click", (p) => {
  let input = document.getElementById("input-item").value;
  console.log(input);
  if (input !== "") {
    id++;
    let fruit = getTr(id, input);
    console.log(fruit);
    tbody.appendChild(fruit);
  }
});

//move up => cum nu a trebuit dupa inserare, sa-l sterg pe cel vechi
tbody.addEventListener("click", (p) => {
  let obj = p.target;
  if (obj.classList.contains("btn-Up")) {
    let ID = +obj.classList[3].split("-")[1];
    let currentTr = document.getElementById(`tr-${ID}`);
    if (currentTr !== tbody.firstElementChild) {
      let previousTr = currentTr.previousElementSibling;
      tbody.insertBefore(currentTr, previousTr);
    }
  }
});

//move down
tbody.addEventListener("click", (p) => {
  let obj = p.target;
  if (obj.classList.contains("btn-Down")) {
    let ID = +obj.classList[3].split("-")[1];
    let currentTr = document.getElementById(`tr-${ID}`);
    if (currentTr !== tbody.lastElementChild) {
      let nextTr = currentTr.nextElementSibling;
      tbody.insertBefore(nextTr, currentTr);
    }
  }
});

//remove button
tbody.addEventListener("click", (p) => {
  let obj = p.target;
  if (obj.classList.contains("btn-Remove")) {
    let ID = +obj.classList[3].split("-")[1];
    let currentTr = document.getElementById(`tr-${ID}`);
    tbody.removeChild(currentTr);
  }
});

//hide list / show list => nu merge , sterge doar primul
hideButton = document.querySelector(".btn-hide");
hideButton.addEventListener("click", (p) => {
  let tr = tbody.firstElementChild;
  while (tr !== tbody.lastElementChild) {
    let i = tr;
    i.style.display = "none";
    tr = tbody.nextElementSibling;
  }
});
