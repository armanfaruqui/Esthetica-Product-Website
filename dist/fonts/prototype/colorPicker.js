let currentPantone = null;

const colorPicker = document.getElementById("color-picker");
const colorPickerContainer = document.getElementById("color-picker-container");
const colorPickerHeading = document.querySelector("#color-picker-container h3");
const jscolorInstance = new jscolor(colorPicker);
jscolorInstance.show();

const pantoneDivs = document.querySelectorAll(".pantone");
pantoneDivs.forEach((div) => {
  div.addEventListener("click", function () {
    currentPantone = this;
    colorPickerContainer.style.display = "flex";
    jscolorInstance.show(); // Show the color picker palette
    colorPickerHeading.textContent = "Select your pantone color"; // Change the text content of the h3 element
  });
});

document.getElementById("set-color").addEventListener("click", function () {
  const selectedColor = colorPicker.jscolor.toHEXString();
  if (currentPantone) {
    currentPantone.style.backgroundColor = selectedColor;
  } else {
    document.querySelector(".esthetic").style.backgroundColor = selectedColor;
    colorPickerHeading.textContent = "Select your background color"; // Reset the text content of the h3 element
  }
  colorPickerContainer.style.display = "none";
  currentPantone = null;
});
