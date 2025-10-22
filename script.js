function updateTime() {
  const timeEl = document.getElementById("user-time");
  timeEl.textContent = Date.now();
}

updateTime();

// Optional: Update every second for realism
setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-bar a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    if (currentPath === link.getAttribute("href")) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});

// FORM VALIDATION
const form = document.getElementById("contact-form");
const successPopup = document.getElementById("test-contact-success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const subject = document.getElementById("contact-subject").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  // Error elements
  const errors = {
    name: document.getElementById("test-contact-error-name"),
    email: document.getElementById("test-contact-error-email"),
    subject: document.getElementById("test-contact-error-subject"),
    message: document.getElementById("test-contact-error-message"),
  };

  // Reset previous errors
  Object.values(errors).forEach((el) => (el.textContent = ""));

  let isValid = true;

  // Validate fields
  if (name === "") {
    errors.name.textContent = "Please enter your full name.";
    isValid = false;
  }

  if (email === "") {
    errors.email.textContent = "Please enter your email address.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (subject === "") {
    errors.subject.textContent = "Please enter a subject.";
    isValid = false;
  }

  if (message.length < 10) {
    errors.message.textContent = "Message must be at least 10 characters long.";
    isValid = false;
  }

  // ✅ Show success if valid
  if (isValid) {
    successPopup.textContent = "✅ Message sent successfully!";
    successPopup.style.display = "block";

    // Hide popup after 3 seconds
    setTimeout(() => {
      successPopup.style.display = "none";
    }, 3000);

    form.reset();
  }
});
