const submitBtn = document.querySelector('.verzenden .submit-button');
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("test");
});
const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name
})
//   const inputs = form.querySelectorAll("input, textarea");
//   const data = {};
//   inputs.forEach(input => {
//     if (input.type === "text" || input.type === "textarea") {
//       data[input.previousElementSibling.textContent.trim()] = input.value;
//     } else if (input.type === "file") {
//       data["Uploaded logo"] = input.files[0].name;
//     } else if (input.type === "checkbox") {
//       data["Deelname aan Geschiedenis Olympiade 2024"] = input.checked;
//     }
//   });
//   console.log(data);