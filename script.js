const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

// Set cookie
function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Get cookie
function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return null;
}

// Apply preferences
function applyPreferences() {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    document.documentElement.style.setProperty("--fontsize", savedSize);
    fontSizeInput.value = parseInt(savedSize);
  }

  if (savedColor) {
    document.documentElement.style.setProperty("--fontcolor", savedColor);
    fontColorInput.value = savedColor;
  }
}

// Save preferences
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const size = `${fontSizeInput.value}px`;
  const color = fontColorInput.value;

  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  document.documentElement.style.setProperty("--fontsize", size);
  document.documentElement.style.setProperty("--fontcolor", color);
});

// Apply saved preferences on page load
applyPreferences();//your JS code here. If required.
