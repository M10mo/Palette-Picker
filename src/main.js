import palettes from "./palettes.json" assert { type: "json" };
console.log(palettes); // It's now regular JS code!

document.addEventListener('DOMContentLoaded', () => {
  // Retrieve saved palette from localStorage on page load
  displayPaletteHistory();
});

function addPalette() {
  const paletteTitle = document.getElementById('paletteTitle').value;
  const color1 = document.getElementById('color1').value;
  const color2 = document.getElementById('color2').value;
  const color3 = document.getElementById('color3').value;
  const temperature = document.querySelector('input[name="temperature"]:checked');

  // Check if all required fields are filled
  if (!paletteTitle || !color1 || !color2 || !color3 || !temperature) {
    alert('Please fill in all fields.');
    return;
  }

  // Store user's information in localStorage
  const userPalette = {
    paletteTitle,
    color1,
    color2,
    color3,
    temperature: temperature.value
  };

  localStorage.setItem('userPalette', JSON.stringify(userPalette));

  // Display the new palette in the history
  displayPaletteHistory();

  // Clear the form
  document.getElementById('paletteForm').reset();
}

function displayPaletteHistory() {
  const paletteHistoryDiv = document.getElementById('app');
  paletteHistoryDiv.innerHTML = '';

  // Retrieve user's palette from localStorage
  const storedPalette = localStorage.getItem('userPalette');

  if (storedPalette) {
    const userPalette = JSON.parse(storedPalette);

    // Create a new form with the stored palette
    const paletteForm = document.createElement('div');
    paletteForm.className = 'colorPaletteBox';

    const titleHeading = document.createElement('h4');
    titleHeading.textContent = userPalette.paletteTitle;
    paletteForm.appendChild(titleHeading);

    const colorBoxes = document.createElement('div');
    colorBoxes.className = 'colorPaletteBox';

    for (const color of [userPalette.color1, userPalette.color2, userPalette.color3]) {
      const colorBox = document.createElement('div');
      colorBox.style.backgroundColor = color;
      colorBoxes.appendChild(colorBox);
    }

    paletteForm.appendChild(colorBoxes);

    const temperatureHeading = document.createElement('p');
    temperatureHeading.textContent = `Temperature: ${userPalette.temperature}`;
    paletteForm.appendChild(temperatureHeading);

    paletteHistoryDiv.appendChild(paletteForm);
  }
}