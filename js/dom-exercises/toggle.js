const $html = document.documentElement;
const goDark = ($button) => {
  $button.innerHTML = "🌚";
  document.querySelector("header").classList.toggle("light");
  document.querySelectorAll(".clock").forEach((el) => {
    el.classList.toggle("light");
  });
  document.querySelectorAll("section").forEach((el) => {
    el.classList.toggle("light");
  });
};

const goLight = ($button) => {
  $button.innerHTML = "🌝";
  document.querySelector("header").classList.toggle("light");
  document.querySelectorAll(".clock").forEach((el) => {
    el.classList.toggle("light");
  });
  document.querySelectorAll("section").forEach((el) => {
    el.classList.toggle("light");
  });
  document.getElementById("drawing-canvas");
};

export default function toggleMode(button) {
  let $button = document.getElementById(button);
  $button.addEventListener("click", (e) => {
    $button.innerHTML === "🌚" ? goLight($button) : goDark($button);
  });
}
