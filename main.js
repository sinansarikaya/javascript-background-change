let containerColor = document.querySelector(".container");

const handleChange = () => {
  let colors = document.getElementById("color").value;
  containerColor.style.backgroundColor = colors;
  localStorage.setItem("bgColor", colors);
  return colors;
};
if (localStorage.getItem("bgColor")) {
  containerColor.style.backgroundColor = localStorage.getItem("bgColor");
} else {
  localStorage.setItem("bgColor", "#b94b4b");
  containerColor.style.backgroundColor = localStorage.getItem("bgColor");
}
document.getElementById("color").value = localStorage.getItem("bgColor");
