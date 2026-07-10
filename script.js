const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");
const saveBtn = document.querySelector('input[type="submit"]');

// Set cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value};path=/`;
}

// Get cookie
function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}

// Apply saved preferences
function applyPreferences() {
  const fontSize = getCookie("fontsize");
  const fontColor = getCookie("fontcolor");

  if (fontSize) {
    document.documentElement.style.setProperty("--fontsize", fontSize);
    fontSizeInput.value = parseInt(fontSize);
  }

  if (fontColor) {
    document.documentElement.style.setProperty("--fontcolor", fontColor);
    fontColorInput.value = fontColor;
  }
}

// Save preferences
saveBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const size = fontSizeInput.value + "px";
  const color = fontColorInput.value;

  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  document.documentElement.style.setProperty("--fontsize", size);
  document.documentElement.style.setProperty("--fontcolor", color);
});

// Load saved preferences
applyPreferences();