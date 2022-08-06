let containerColor = document.querySelector(".container");

const handleChange = () => {
  let colors = document.getElementById("color").value;
  containerColor.style.backgroundColor = colors;
  localStorage.setItem("bgColor", colors);
  document.getElementById("colorHex").innerHTML =
    localStorage.getItem("bgColor");
  return colors;
};
if (localStorage.getItem("bgColor")) {
  containerColor.style.backgroundColor = localStorage.getItem("bgColor");
} else {
  localStorage.setItem("bgColor", "#b94b4b");
  containerColor.style.backgroundColor = localStorage.getItem("bgColor");
}
document.getElementById("color").value = localStorage.getItem("bgColor");
document.getElementById("colorHex").innerHTML = localStorage.getItem("bgColor");
const handleClick = () => {
  navigator.clipboard.writeText(localStorage.getItem("bgColor"));
  document.querySelector(
    ".tooltiptext"
  ).innerHTML = `Copied: ${localStorage.getItem("bgColor")}`;
};
