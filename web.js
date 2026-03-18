const body = document.body;
const btn = document.getElementById('colorButton');

function saveFunc(){
  var username=document.getElementById('nameInput').value || 'Guest'
document.getElementById('greeting').textContent = `Hello, ${username}!`
}
var saveButton=document.getElementById('saveName')
saveButton.addEventListener('click', saveFunc)

function changeColor() {
  // Generates a random number between 0 and 16,777,215 (decimal for #FFFFFF)
  // then converts it to a hex string and pads it with zeros if needed.
  const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  
  body.style.backgroundColor = randomHex;
  
  // Verification: Open your browser's inspect tool (F12) to see this running
  document.getElementById("currentColor").textContent=`Current Color: ${randomHex}`;
}

btn.addEventListener('click', changeColor);
