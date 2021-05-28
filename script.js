const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

let btn = document.createElement("button");

window.onload = function createLetters() {
  for (i = 0; i < alphabet.length; i++) {
    let btn = document.createElement("button");
    console.log(btn[i]);
    btn.innerText = btn[i];
    document.body.appendChild(btn);
  }
};
