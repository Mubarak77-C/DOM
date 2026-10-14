const btn = document.querySelector("#clicked");
btn.addEventListener("click", ()=>{

console.log('clicked')
});

btn.addEventListener("click", function(e){
    console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});


// ### for classes 
// 1. Use querySelectorAll and a class selector (.clicked) to get ALL matching buttons
const buttonsClass = document.querySelectorAll(".clicked");

// 2. Loop through every button to attach the behavior
buttons.forEach((button) => {
  
  // Log when clicked
  button.addEventListener("click", () => {
    console.log('clicked', button.id);
  });

  // Log the target element
  button.addEventListener("click", function(e){
    console.log(e.target);
  });

  // Change background to blue
  button.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

  // Show alert with the button's ID
  button.addEventListener("click", () => {
    alert(button.id);
  });
  
});