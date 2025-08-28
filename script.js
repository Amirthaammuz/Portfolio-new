// ======= Navbar Toggle =======
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}

// ======= Contact Form =======
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}