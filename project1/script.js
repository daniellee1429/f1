const images = [
  "attachments/1C3A9866.JPG",
  "attachments/DSCN1228_Original.jpg",
  "attachments/IMG_4203.jpg",
  "attachments/IMG_4565.jpg",
  "attachments/IMG_5196.jpg",
  "attachments/IMG_8469.jpg",
  "attachments/IMG_9020.jpg",
];

const imgEl = document.getElementById("photo");
const btn = document.getElementById("newBtn");

let i = 0;
function next() {
  imgEl.src = images[i];
  i++;
  if (i >= images.length) {
    i = 0;
  }
}
btn.addEventListener("click", next);

const form = document.getElementById("textForm");
const input = document.getElementById("userInput");
const display = document.getElementById("displayArea");

form.addEventListener("submit", function (event) {
  const text = input.value;
  const p = document.createElement("p");
  p.textContent = text;

  display.appendChild(p);

  input.value = "";
});
