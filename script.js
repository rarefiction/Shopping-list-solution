var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// 1-1) Adds all of the lists in array form to variable called listArray
var listArray = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  // 3) adds button for delete and eventlistener for toggle on new list
  addButtonforDelete(li);
  toggleAfterClick(li);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// 1-3) each listitem gets added an eventlistener which respond to a click and carries out an anonymouse function that toggles the class done (text-decoration: line-through)
function toggleAfterClick(listItem) {
  listItem.addEventListener("click", function () {
    listItem.classList.toggle("done");
  });
}

// 1-2) using forEach runs each listitem in the array of lists with function toggleAfterClick
listArray.forEach(toggleAfterClick);

// 2-2) for each listItem creates new button variable btn, adds the text Delete than adds an eventlistener (which respond to click and carries anonymouse function to delete the parent element li) to btn than appends the btn to the list
function addButtonforDelete(listItem) {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete"));
  btn.addEventListener("click", function () {
    // many ways of doing this but since we learnt parentElement from past lectures
    btn.parentElement.remove();
  });
  listItem.appendChild(btn);
}

// 2-1) similar to 1-2 for each list in list array run function addButtonForDelete
listArray.forEach(addButtonforDelete);
