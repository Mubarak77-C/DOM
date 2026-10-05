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
