function changeColor(color) {
  const elem = document.getElementById("h4-23-nov"); //getElementById
  elem.style.color = color;
}

let display = document.querySelector(".container-meciuri-23-nov");

function showMatches(arr) {
  let text = "";
  for (let i = 0; i < arr.length; i++) {
    text += `<p>${arr[i]}</p>`;
  }
  return text;
}

h4 = document.querySelector("#h4-23-nov");
h4.addEventListener("click", (p) => {
  changeColor("blue");
  const elements = document.getElementsByTagName("p"); //getElementsByTagName
  //console.log(elements[0]);
  let v = [];
  for (let i = 0; i < elements.length; i++) {
    let arr = elements[i].textContent.split(" ");
    v.push(arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3]);
    //console.log(v);
  }
  display.innerHTML = showMatches(v);
});

let h1 = document.querySelector(".titlu");
h1.addEventListener("click", (p) => {
  const title = document.getElementsByClassName("titlu");
  //console.log(title[0]);
  title[0].style.color = "red";
});

let display1 = document.querySelector(".container-23-nov");
let paragraph = document.querySelectorAll("#meci-id"); //querySelectorAll
display1.addEventListener("click", (p) => {
  for (let i = 0; i < paragraph.length; i++) {
    console.log(paragraph[i]);
  }
});

let teamsButton = document.querySelector(".btn-teams");
teamsButton.addEventListener("click", (p) => {
  let elem = document.getElementsByClassName("meci-cls");
  console.log(elem);
  let v = [];
  for (let i = 0; i < elem.length; i++) {
    let arr = elem[i].textContent.split(" ");
    v.push(arr[0], arr[2]);
  }
  console.log(v);
  display.innerHTML = showMatches(v);
});

clasamentTitlu = document.querySelector(".titlu-grupa-b");
clasamentTitlu.addEventListener("click", (p) => {
  let elem = document.querySelectorAll("li:nth-child(2n+1)");
  console.log(elem);
  let v = [];
  v.push(elem[0].textContent.split(" ")[0]);
  v.push(elem[1].textContent.split(" ")[0]);
  display.innerHTML = showMatches(v);
});

//adaugare cu appendChild
clasament = document.querySelector(".clasament");
let ex = document.createElement("li");
ex.classList.add("loc-gr-b");
ex.textContent = "Cosmin";
clasament.appendChild(ex);

//stergerea cu removeChild - fct dar e comentat pt ca-l sterge automat
// let li = document.querySelector("li:nth-child(4)");
// clasament.removeChild(li);

//parent node
let nod = document.querySelector("li:nth-child(2)");
console.log("parintele lui li:" + nod.parentNode.classList);
let parent = nod.parentNode;
parent.removeChild(nod);

let titlu = document.querySelector(".titlu-grupa-b");
console.log("parintele titlului grupei b: " + titlu.parentNode.classList);

//previousElementSibling
let li2 = document.querySelector("li:nth-child(2)");
console.log(
  "previous element sibling: " + li2.previousElementSibling.textContent
);

let li4 = document.querySelector("li:nth-child(5)");
console.log("next elem sibling: " + li2.nextElementSibling.text);

//insertBefore
let li3 = document.querySelector("li:nth-child(2)");
let liCreated = document.createElement("li");
liCreated.classList.add("loc-gr-b");
liCreated.textContent = "liCreated";
clasament.insertBefore(liCreated, li3);

//firstElementChild / lastElementChild
let first = clasament.firstElementChild;
let last = clasament.lastElementChild;
console.log("primul:" + first.textContent);
console.log("ultimul:" + last.textContent);
