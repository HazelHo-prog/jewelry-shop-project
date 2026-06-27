document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".needs-validation");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });

  const filterButtons = document.querySelectorAll("[data-filter]");
  const filterItems = document.querySelectorAll("[data-category]");

  if (filterButtons.length && filterItems.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        filterItems.forEach((item) => {
          const category = item.dataset.category;
          const showItem = filter === "all" || filter === category;
          item.style.display = showItem ? "" : "none";
        });
      });
    });
  }

  const emailInputs = document.querySelectorAll('input[type="email"]');

  emailInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim() === "") {
        input.setCustomValidity("");
        return;
      }

      if (input.validity.typeMismatch) {
        input.setCustomValidity("Please enter a valid email address.");
      } else {
        input.setCustomValidity("");
      }
    });
  });
});