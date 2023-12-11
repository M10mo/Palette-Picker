import palettes from "./palettes.json" assert {type: 'json'};
console.log(palettes); // It's now regular JS code!

document.addEventListener('DOMContentLoaded', () => {
  // Retrieve saved palette from localStorage on page load
  displayPaletteHistory();
});

function addPalette() {
  const colorOption1 = document.getElementById('colorOption1').value;
  const colorOption2 = document.getElementById('colorOption2').value;
  const colorOption3 = document.getElementById('colorOption3').value;
  const temperature = document.getElementById('temperature').value;

  // Store user's information in localStorage
  const userPalette = {
    colorOption1,
    colorOption2,
    colorOption3,
    temperature
  };

  localStorage.setItem('userPalette', JSON.stringify(userPalette));

  // Display the new palette in the history
  displayPaletteHistory();
}

function displayPaletteHistory() {
  const paletteHistoryDiv = document.getElementById('paletteHistory');
  paletteHistoryDiv.innerHTML = '';

  // Retrieve user's palette from localStorage
  const storedPalette = localStorage.getItem('userPalette');

  if (storedPalette) {
    const userPalette = JSON.parse(storedPalette);

    // Create a new form with the stored palette
    const paletteForm = document.createElement('div');
    paletteForm.className = 'colorPaletteBox';

    for (const color of Object.values(userPalette)) {
      const colorBox = document.createElement('div');
      colorBox.style.backgroundColor = color;
      paletteForm.appendChild(colorBox);
    }

    paletteHistoryDiv.appendChild(paletteForm);
  }
}

// Update temperature value display
document.getElementById('temperature').addEventListener('input', () => {
  const temperatureValue = document.getElementById('temperatureValue');
  temperatureValue.textContent = document.getElementById('temperature').value;
});
