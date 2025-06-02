document.addEventListener("DOMContentLoaded", function() {
  const box = document.getElementById("myBox");
  if (box) {
    box.addEventListener("click", function() {
      box.classList.add("animate");
      setTimeout(() => box.classList.remove("animate"), 500); // durasi animasi 0.5 detik
    });
  }
});