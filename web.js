// Using your specific ID instead of a generic 'button'
const myButton = document.getElementById('colorButton');
const greeting = document.getElementById('greeting');

// Use a default name if they hit cancel
var userName = prompt("What’s Your Name?") || "Guest";

// Use textContent for safety
greeting.textContent = `Hello ${userName}!`;

const body = document.body; // Shortcut!

function changeColor() {
  var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'violet', 'orange', 'cyan', 'magenta'];
  

  body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}

const btn = document.getElementById('colorButton');

// When the button is clicked, run the changeColor function
btn.addEventListener('click', changeColor);