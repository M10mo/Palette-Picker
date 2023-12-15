import palettes from "./palettes.json" assert { type: "json" };
console.log(palettes); // It's now regular JS code!

// Store user's information in localStorage


function renderPalette() {
  const paletteHistoryDiv = document.getElementById("app");

  paletteHistoryDiv.innerHTML = "";
  // Retrieve user's palette from localStorage
  const storedPalette = localStorage.getItem("palette");
const paletteDiv = document.querySelector('#palettes')
  if (storedPalette) {
    storedPalette.foreach(palette => {
  const div = document.createElement('div')
      div.innerHTML = `
        <h2>pallete title:${palette.title}<h2>
        <p>color#1 : ${palette.color1}<p>
        <p>color#2 : ${palette.color2}<p>
        <p>color#3 : ${palette.color3}>
        <p>Temperature: ${palette.temperature}<p>
        `
      paletteDiv.appendChild(div)
      console.log(div)
    })
    
  }
  
}


















//     const userPalette = JSON.parse(storedPalette);
//     // Create a new form with the stored palette
//     const paletteForm = document.createElement("div");
//     paletteForm.className = "colorPaletteBox";
//   }
//   const titleHeading = document.createElement("h4");
//   titleHeading.textContent = userPalette.paletteTitle;
//   paletteForm.appendChild(titleHeading);

//   const colorBoxes = document.createElement("div");
//   colorBoxes.className = "colorPaletteBox";

//   for (const color of [
//     userPalette.color1,
//     userPalette.color2,
//     userPalette.color3,
//   ]) {
//     const colorBox = document.createElement("div");
//     colorBox.style.backgroundColor = color;
//     colorBoxes.appendChild(colorBox);
//   }

//   paletteForm.appendChild(colorBoxes);

//   const temperatureHeading = document.createElement("p");
//   temperatureHeading.textContent = `Temperature: ${userPalette.temperature}`;
//   paletteForm.appendChild(temperatureHeading);

//   paletteHistoryDiv.appendChild(paletteForm);
// }



// Add event listener for form submission

document.getElementById("paletteForm").addEventListener("submit", onSubmit);

function onSubmit(event) {
  const form = event.target;
  const formData = new FormData(form);
  const dataObj = Object.fromEntries(formData);
  event.preventDefault();
 

}




  function submitPalettes() {
    if (!localStorage.getItem('palette')) {
     localStorage.setItem('palettes',JSON.stringify(palettes))
   }
    
  }
  

 

const main = () => {
  submitPalettes();
  renderPalette()

}
main()