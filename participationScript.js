const form = document.querySelector(".form-grid");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const inputs = form.querySelectorAll("input, textarea");
  const data = {};
  inputs.forEach(input => {
    if (input.type === "text" || input.type === "textarea") {
      data[input.previousElementSibling.textContent.trim()] = input.value;
    } else if (input.type === "file") {
      data["Uploaded logo"] = input.files[0].name;
    } else if (input.type === "checkbox") {
      data["Deelname aan Geschiedenis Olympiade 2024"] = input.checked;
    }
  });
  console.log(data);
});