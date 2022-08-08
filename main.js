let containerColor = document.querySelector(".container");
let imageInput = document.getElementById("imageInput");

const handleChange = () => {
  let colors = document.getElementById("color").value;
  containerColor.style.backgroundColor = colors;
  localStorage.setItem("bgColor", colors);

  document.querySelector(".container").style.backgroundImage = "";

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

function handleImage() {
  const file = imageInput.files[0];

  containerColor.setAttribute(
    "style",
    "background-image: url(" +
      URL.createObjectURL(file) +
      ");background-repeat: no-repeat;width:100%; height:100vh;background-size:cover;"
  );
}
