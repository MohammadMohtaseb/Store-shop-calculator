document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  const toggleButton = document.getElementById("toggleButton");

  // تحقق من sessionStorage لتطبيق الوضع السابق
  const currentMode = sessionStorage.getItem("mode");
  if (currentMode) {
      body.classList.add(currentMode);
  }

  toggleButton.addEventListener("click", function() {
      if (body.classList.contains("light-mode")) {
          body.classList.remove("light-mode");
          body.classList.add("dark-mode");
          sessionStorage.setItem("mode", "dark-mode");
      } else {
          body.classList.remove("dark-mode");
          body.classList.add("light-mode");
          sessionStorage.setItem("mode", "light-mode");
      }
  });
});
