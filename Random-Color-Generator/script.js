// Hex  color code Creater

const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector('.hex-color-container');
const copyHexColor = document.querySelector('.copy-hex-color')


hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, charSetLength = characterSet.length; i < 6; i++) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }

  hexColorValue.textContent = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`
  hexBtn.style.color = `#${hexColorOutput}`
});

// Rgb  color code Creater

const rgbBtn = document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getGreenInputRange = document.querySelector('#green');
const getBlueInputRange = document.querySelector('#blue');
const rgbColorContainer =  document.querySelector('.rgb-color-container');
const copyRgbColor = document.querySelector('.copy-rgb-color');
const rgbColorValue = document.querySelector('.rgb-color-value');
const copyrgbcolor = document.querySelector('.copy-rgb-color')

rgbBtn.addEventListener('click', ()=>{
   let extractRedValue = getRedInputRange.value;
   let extractGreenValue = getGreenInputRange.value;
   let extractBlueValue = getBlueInputRange.value;

   rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
   rgbBtn.style.color= `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
   rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractRedValue})`

})

function copyHexColorToClipBoard(){
  navigator.clipboard.writeText( hexColorValue.textContent);
  alert('Hex color is Copied to Clipboard')
}

copyHexColor.addEventListener('click', copyHexColorToClipBoard)

function copyRgbColorToClipBoard(){
  navigator.clipboard.writeText( rgbColorValue.textContent);
  alert('Rgb Color is Copied to Clipboard')
}

copyrgbcolor.addEventListener('click', copyRgbColorToClipBoard)

