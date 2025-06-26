// Write your code here!
// Remove the main#main element
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the id to 'victory'
newHeader.id = 'victory';

// Set the text content
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name

// Append the newHeader to the body
document.body.append(newHeader);