document.addEventListener("DOMContentLoaded", () => {
  function updateTime() {
    const time = document.getElementById("user-time");
    if (time) {
      time.textContent = Date.now();
    }
  }

  updateTime();
  //Update every second for realism
  setInterval(updateTime, 1000);

  // FORM VALIDATION
  const form = document.getElementById("contact-form");
  const successPopup = document.getElementById("success-popup");
  // console.log(successPopup);
  const successPopupMessage = document.getElementById("success-message");

  if (successPopup) successPopup.style.display = "none";

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // form values
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const subject = document.getElementById("contact-subject").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      // Error elements
      const errors = {
        name: document.querySelector('[data-testid="test-contact-error-name"]'),
        email: document.querySelector(
          '[data-testid="test-contact-error-email"]'
        ),
        subject: document.querySelector(
          '[data-testid="test-contact-error-subject"]'
        ),
        message: document.querySelector(
          '[data-testid="test-contact-error-message"]'
        ),
      };

      // Reset previous errors
      Object.values(errors).forEach((el) => (el.textContent = ""));

      let isValid = true;

      // Validations
      if (name === "" || name == null) {
        errors.name.textContent = "Please enter your full name.";
        isValid = false;
      }

      if (email === "") {
        errors.email.textContent = "Please enter your email address.";
        isValid = false;
      } else {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
          errors.email.textContent = "Please enter a valid email address.";
          isValid = false;
        }
      }

      if (subject === "") {
        errors.subject.textContent = "Please enter a subject.";
        isValid = false;
      }

      if (message.length < 10) {
        errors.message.textContent =
          "Message must be at least 10 characters long.";
        isValid = false;
      }

      // ✅ Success handling
      if (isValid) {
        successPopupMessage.textContent = "✅ Message sent successfully!";
        successPopup.style.display = "block";
        // console.log(successPopupMessage.textContent);

        // Hide after 3 seconds
        setTimeout(() => {
          successPopup.style.display = "none";
        }, 3000);

        form.reset();
      }
    });
  }
});
