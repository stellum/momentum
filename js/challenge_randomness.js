const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const btn = document.querySelector("button");

function randomness() {
  const random1 = colors[Math.floor(Math.random() * colors.length)];
  const random2 = colors[Math.floor(Math.random() * colors.length)];

  // linear-gradient 적용을 위한 변수 만들기
  const gradColor = `linear-gradient(to right, ${random1}, ${random2})`; // 왜 백틱으로 하는걸까?
  document.body.style.background = gradColor;
}

btn.addEventListener("click", randomness);
