const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

function setCookie(name, value) {
  document.cookie = `${name}=${value};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return "";
}

function applyPreferences() {
  const size = getCookie("fontsize");
  const color = getCookie("fontcolor");

  if (size) {
    document.documentElement.style.setProperty("--fontsize", size);
    document.body.style.fontSize = size;
    fontSizeInput.value = parseInt(size);
  }

  if (color) {
    document.documentElement.style.setProperty("--fontcolor", color);
    document.body.style.color = color;
    fontColorInput.value = color;
  }
}

applyPreferences();

form.addEventListener("submit", function () {
  const size = fontSizeInput.value + "px";
  const color = fontColorInput.value;

  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  document.documentElement.style.setProperty("--fontsize", size);
  document.documentElement.style.setProperty("--fontcolor", color);

  document.body.style.fontSize = size;
  document.body.style.color = color;
});