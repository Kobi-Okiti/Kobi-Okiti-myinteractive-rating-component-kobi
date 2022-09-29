const mainContainer = document.querySelector(".rating");
const thanksContainer = document.querySelector(".thank-you");
var sumbmitButton = document.querySelector("#submit_button");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");


// sumbmitButton.addEventListener("click",function(){
//    console.log("Click is affected!!!");
// });


sumbmitButton.addEventListener("click", () =>{
    mainContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");
});

rates.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerHTML = rate.innerHTML;
    })
})
