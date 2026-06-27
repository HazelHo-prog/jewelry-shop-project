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

        const filter = button.getAttribute("data-filter");

        filterItems.forEach((item) => {
          const category = item.getAttribute("data-category");
          const showItem = filter === "all" || filter === category;
          item.style.display = showItem ? "" : "none";
        });
      });
    });
  }

  const emailFields = document.querySelectorAll('input[type="email"]');

  emailFields.forEach((field) => {
    field.addEventListener("input", () => {
      if (field.value.trim() === "") {
        field.setCustomValidity("");
      } else if (!field.checkValidity()) {
        field.setCustomValidity("Please enter a valid email address.");
      } else {
        field.setCustomValidity("");
      }
    });
  });
});