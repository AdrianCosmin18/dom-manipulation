function getEmptyTr(id) {
  let tr = document.createElement("tr");
  tr.classList.add(`tr-${id}`);
  tr.id = `tr-${id}`;
  return tr;
}

function getButtonTable(id, value) {
  let button = document.createElement("button");

  if (value === "Up") {
    button.style.backgroundColor = "#6eb8b1";
    button.style.border = "#6eb8b1";
  } else if (value === "Down") {
    button.style.backgroundColor = "#5e88b8";
    button.style.border = "#5e88b8";
  } else if (value === "Remove") {
    button.style.backgroundColor = "#7b8ca1";
    button.style.border = "#7b8ca1";
  }
  button.style.color = "white";
  button.classList.add("btn", "btn-info", `btn-${value}`, `btn-${id}`);
  button.textContent = value;
  return button;
}

function getTd(id) {
  let td = document.createElement("td");
  td.classList.add(`td-${id}`);
  return td;
}

function getTr(id, text) {
  let tr = getEmptyTr(id);
  let buttonUp = getButtonTable(id, "Up");
  let buttonDown = getButtonTable(id, "Down");
  let buttonRemove = getButtonTable(id, "Remove");

  let td1 = getTd(id);
  td1.style.width = "90%";
  td1.textContent = text;

  let td2 = getTd(id);
  td2.appendChild(buttonUp);

  let td3 = getTd(id);
  td3.appendChild(buttonDown);

  let td4 = getTd(id);
  td4.appendChild(buttonRemove);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  return tr;
}
