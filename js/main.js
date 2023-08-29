
// humberger icon toggle here
let humbarger = document.querySelector (`.humbarger`)
let navMenu = document.querySelector (`.nav-items`)


humbarger.addEventListener (`click`, () =>{
    navMenu.classList.toggle (`active`)
    humbarger.classList.toggle (`active`)
   
})



// accordion funtion 
const accordion = document.getElementsByClassName (`accordionBox`);

for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener(`click`,function (){
        this.classList.toggle(`active`)
    })
}












